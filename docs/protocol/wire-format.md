---
sidebar_position: 1
title: Wire Format
---

# Protocol Wire Format

The Hytale protocol uses a **Netty-based** networking architecture with **little-endian byte ordering** for all fixed-width data types.

## Frame Structure

All packets follow this frame structure:

```
[4 bytes: Payload Length (LE)] [4 bytes: Packet ID (LE)] [Payload]
```

**Constants:**
| Constant | Value | Purpose |
|----------|-------|---------|
| `FRAME_HEADER_SIZE` | 4 | Length prefix only |
| `LENGTH_PREFIX_SIZE` | 4 | Length field |
| `PACKET_ID_SIZE` | 4 | Packet ID field |
| `MIN_FRAME_SIZE` | 8 | Minimum frame (length + ID) |

## Payload Serialization

Packets follow this internal structure:

```
[1 byte: Null Bits] [Fixed Fields] [Variable Field Offsets] [Variable Fields]
```

### Null Bits (Nullable Fields)
Each nullable field gets 1 bit in a byte-packed bit field at offset 0.
* **Reading**: `if ((nullBits & 0x1) != 0) { /* field is present */ }`
* **Writing**: `if (field != null) nullBits = (byte)(nullBits | 0x1);`

### Variable-Length Strings
Format: `[VarInt: byte length] [UTF-8 bytes]`

```java
// Read
String readVarString(ByteBuf buf, int offset) {
    int len = VarInt.peek(buf, offset);
    int varIntLen = VarInt.length(buf, offset);
    byte[] bytes = new byte[len];
    buf.getBytes(offset + varIntLen, bytes);
    return new String(bytes, StandardCharsets.UTF_8);
}
```

### VarInt Encoding
Variable-length integers (0 to 2^31-1) use 7 data bits + 1 continuation bit per byte.

```java
// Size lookup
int size(int value) {
    if ((value & 0xFFFFFF80) == 0) return 1;
    if ((value & 0xFFFFC000) == 0) return 2;
    if ((value & 0xFFE00000) == 0) return 3;
    if ((value & 0xF0000000) == 0) return 4;
    return 5;
}
```

## Variable Field System

Packets with variable-length fields use an **offset table** at the end of fixed fields.

**Offset Table Logic:**
* Each optional/variable field gets an `int LE` offset slot (4 bytes).
* Offset is relative to the start of the `Variable Block`.
* `-1` means the field is null.
* `0` means the field starts immediately.