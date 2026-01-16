---
sidebar_position: 3
title: Compression (Zstd)
---

# Zstd Compression

The protocol supports both compressed and uncompressed packets using **Zstd compression**. This is configurable via the `hytale.protocol.compressionLevel` system property.

## Compression Format

When a packet is marked as compressed in the registry, the wire format changes:

**Uncompressed:**
```
[Length (LE)] [Packet ID (LE)] [Payload]
```

**Compressed:**
```
[Compressed Length (LE)] [Packet ID (LE)] [Zstd Compressed Payload]
```

:::info Note
The Packet ID is **never** compressed. Only the payload following the ID is compressed.
:::

## Implementation Logic

### Sending (Encoding)

```java
if (info.compressed() && serializedSize > 0) {
    int compressBound = (int)Zstd.compressBound(serializedSize);
    out.ensureWritable(compressBound);
    
    // Compress payload into output buffer
    int compressedSize = compressToBuffer(payloadBuf, out, out.writerIndex(), compressBound);

    if (Zstd.isError(compressedSize))
        throw new ProtocolException("Zstd compression failed");

    // Write the compressed size into the length field
    out.setIntLE(lengthIndex, compressedSize);
}
```

### Receiving (Decoding)

```java
if (info.compressed() && payloadLength > 0) {
    // Decompress payload
    payload = decompressFromBuffer(in, in.readerIndex(), payloadLength, info.maxSize());
    in.skipBytes(payloadLength);
}
```