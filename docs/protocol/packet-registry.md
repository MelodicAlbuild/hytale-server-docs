---
sidebar_position: 2
title: Packet Registry
---

# Packet Registry

The Hytale protocol utilizes a strict registry for defining packet IDs, sizes, and compression rules.

:::info Note
There is a full [Packet Reference](../packets/index.md) that has more than these current packets listed on this page. These are purely for example purposes.
:::

## PacketInfo Structure

```java
public static final class PacketInfo {
    int id;                    // Packet ID (0-255+)
    String name;               // Human name
    Class<? extends Packet> type;
    int fixedBlockSize;        // Size of fixed fields
    int maxSize;               // Maximum allowed payload size
    boolean compressed;        // Is this packet type compressed?
}
```

## Update Packets (World Data)

The following packets (IDs 40-85) are used to synchronize game registries and world state. **All of these are compressed.**

| ID | Name | Description |
|----|------|-------------|
| 40 | `UpdateBlockTypes` | Block type definitions |
| 41 | `UpdateBlockHitboxes` | Block collision boxes |
| 42 | `UpdateBlockSoundSets` | Block sound configurations |
| 47 | `UpdateWeathers` | Weather configurations |
| 51 | `UpdateEntityEffects` | Entity effect definitions |
| 53 | `UpdateModelvfxs` | Model VFX definitions |
| 55 | `UpdateItemQualities` | Item quality tiers |
| 61 | `UpdateEnvironments` | Environment configs |
| 65 | `UpdateSoundEvents` | Sound event definitions |
| 66 | `UpdateInteractions` | Interaction definitions |
| 72 | `UpdateEntityStatTypes` | Entity stat definitions |
| 73 | `UpdateEntityUIComponents` | Entity UI components |
| 74 | `UpdateHitboxCollisionConfig` | Hitbox collision configs |
| 79 | `UpdateSoundSets` | Sound set definitions |
| 83 | `UpdateFluids` | Fluid definitions |
| 84 | `UpdateTagPatterns` | Tag pattern definitions |

## Other Packet Ranges

| Range | Purpose | Count |
|-------|---------|-------|
| 0-18 | Connection & Auth | 19 |
| 20-26 | World & Assets | 7 |
| 100-119 | Client State | 20 |
| 131-150 | World Data | 20 |
| 200-219 | UI & Messages | 20 |
| 280-361 | Camera & Editor | 82 |
| 400-423 | Builder Tools | 24 |