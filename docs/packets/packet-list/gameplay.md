---
title: Gameplay & World
description: Player movement, world loading, and block updates.
sidebar_position: 6
---

# Gameplay Packets

Packets in `com.hypixel.hytale.protocol.packets.player` and `world`.

## SetClientId (100)
**Bound:** Clientbound

Tells the client which Entity ID represents their player.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `entityId` | `Int` | The player's entity ID. |

## SetGameMode (103)
**Bound:** Clientbound

Sets the player's interaction mode.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `gameMode` | `Byte` | `0`=Survival, `1`=Creative, `2`=Adventure. |

## JoinWorld (104)
**Bound:** Clientbound

Signals the client to enter the world rendering state.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `clearWorld` | `Boolean` | If true, unload all previous chunks/entities. |
| `fadeInOut` | `Boolean` | Trigger a black fade effect. |
| `worldUuid` | `UUID` | Unique instance ID of the world. |

## ClientReady (105)
**Bound:** Serverbound

Sent by the client when it has finished processing assets and is ready to spawn.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `readyForChunks` | `Boolean` | True if client can accept chunk data. |
| `readyForGameplay` | `Boolean` | True if client is ready to control player. |

## ClientMovement (107)
**Bound:** Serverbound

Updates the player's position and rotation.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `nullBits` | `Byte` | Bitmask. |
| `x` | `Double` | **Optional** (Mask `0x1`). |
| `y` | `Double` | **Optional** (Mask `0x2`). |
| `z` | `Double` | **Optional** (Mask `0x4`). |
| `yaw` | `Float` | **Optional** (Mask `0x8`). |
| `pitch` | `Float` | **Optional** (Mask `0x10`). |
| `onGround` | `Boolean` | **Optional** (Mask `0x20`). |

## SetChunk (131)
**Bound:** Clientbound | **Compressed:** Yes

Sends a vertical column of world data (16x16xH).

| Field | Type | Notes |
| :--- | :--- | :--- |
| `chunkX` | `Int` | Chunk coordinate X. |
| `chunkZ` | `Int` | Chunk coordinate Z. |
| `activeSections` | `Int` | Bitmask of which vertical sections are included. |
| `data` | `Byte[]` | Zstd compressed buffer of blocks and biomes. |

## ServerSetBlock (140)
**Bound:** Clientbound

Updates a single block in the world.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `x` | `Int` | World X. |
| `y` | `Int` | World Y. |
| `z` | `Int` | World Z. |
| `blockId` | `Int` | New Block ID. |
| `filler` | `Short` | Block meta/state data. |
| `rotation` | `Byte` | Block rotation (0-3). |

## UpdateTime (146)
**Bound:** Clientbound

Synchronizes the world clock.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `nullBits` | `Byte` | Bitmask. |
| `gameTime` | `InstantData` | **Optional**. Current ticks. If null, 12 bytes of zeros are written. |

## DisplayDebug (232)
**Bound:** Clientbound

Draws a debug shape in the world for a specific duration.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `id` | `String` | Unique ID for this shape (allows overwriting). |
| `type` | `Byte` | `0`=Box, `1`=Line, `2`=Sphere, `3`=Text. |
| `pos` | `Vector3d` | World position. |
| `color` | `Int` | ARGB Color. |
| `duration` | `Float` | Seconds to remain visible. |
| `text` | `String` | **Conditional**. Text content if type is 3. |

## ClearDebugShapes (233)
**Bound:** Clientbound

Removes all debug rendering.

*Payload is empty.*