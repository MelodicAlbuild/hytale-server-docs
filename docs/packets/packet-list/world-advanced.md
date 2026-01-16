---
title: Advanced World Data
description: Sleep, Fluids, and Partial Chunk Updates.
sidebar_position: 14
---

# Advanced World Packets

Packets in `com.hypixel.hytale.protocol.packets.world`.

## Sleep System

### UpdateSleepState (180)
**Bound:** Clientbound

Updates the visual sleeping state of a player.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `playerId` | `Int` | Entity ID of the player. |
| `sleeping` | `Boolean` | True if asleep. |
| `pos` | `Vector3d` | Bed position. |

### SleepClock (181)
**Bound:** Clientbound

Syncs the time-skipping animation when all players sleep.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `active` | `Boolean` | Is the clock fast-forwarding? |
| `rate` | `Float` | Speed multiplier. |

### SleepMultiplayer (182)
**Bound:** Clientbound

Shows the "X/Y players sleeping" UI.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `sleeping` | `Int` | Count of sleepers. |
| `required` | `Int` | Count required to skip night. |

## Fluid Management

### ServerSetFluid (145)
**Bound:** Clientbound

Updates a single fluid block (water/lava level).

| Field | Type | Notes |
| :--- | :--- | :--- |
| `x` | `Int` | World X. |
| `y` | `Int` | World Y. |
| `z` | `Int` | World Z. |
| `fluidId` | `Int` | Fluid Registry ID. |
| `level` | `Byte` | Fluid height/level (0-15). |

### SetFluids (146)
**Bound:** Clientbound | **Compressed:** Yes

Bulk update for fluid blocks (similar to `ServerSetBlocks`).

| Field | Type | Notes |
| :--- | :--- | :--- |
| `nullBits` | `Byte` | Bitmask. |
| `chunkX` | `Int` | Chunk X. |
| `chunkZ` | `Int` | Chunk Z. |
| `updates` | `FluidChange[]` | List of fluid updates. |

## Chunk Partial Updates

These packets update specific layers of a chunk without resending the entire geometry.

### SetChunkHeightmap (133)
**Bound:** Clientbound | **Compressed:** Yes

Updates the heightmap (used for rain collision and map rendering).

| Field | Type | Notes |
| :--- | :--- | :--- |
| `chunkX` | `Int` | |
| `chunkZ` | `Int` | |
| `heightmap` | `Byte[]` | Compressed height array. |

### SetChunkTintmap (134)
**Bound:** Clientbound | **Compressed:** Yes

Updates the biome color map (grass/foliage colors).

| Field | Type | Notes |
| :--- | :--- | :--- |
| `chunkX` | `Int` | |
| `chunkZ` | `Int` | |
| `colors` | `Int[]` | Array of ARGB colors. |

### SetChunkEnvironments (135)
**Bound:** Clientbound | **Compressed:** Yes

Updates the biome registry IDs for a chunk (changing the biome type).

| Field | Type | Notes |
| :--- | :--- | :--- |
| `chunkX` | `Int` | |
| `chunkZ` | `Int` | |
| `biomes` | `Short[]` | Array of Biome IDs. |