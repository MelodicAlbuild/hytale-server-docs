---
title: Entities
description: Entity spawning, movement, and animation.
sidebar_position: 7
---

# Entity Packets

Packets in the `com.hypixel.hytale.protocol.packets.entities` package.

## EntityUpdates (161)
**Bound:** Clientbound | **Compressed:** Yes

The primary packet for entity management. Batches multiple updates into one frame.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `nullBits` | `Byte` | Bitmask. |
| `removed` | `Int[]` | **Optional** (Mask `0x1`). List of Entity IDs to despawn. |
| `updates` | `EntityUpdate[]` | **Optional** (Mask `0x2`). List of creation/movement data. |

## PlayAnimation (162)
**Bound:** Clientbound

Triggers a skeletal animation on an entity.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `entityId` | `Int` | The target entity. |
| `animation` | `String` | Animation name (e.g., "attack_melee"). |
| `speed` | `Float` | Playback speed multiplier. |

## ApplyKnockback (163)
**Bound:** Clientbound

Applies an instantaneous force impulse to an entity.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `entityId` | `Int` | Target entity. |
| `force` | `Vector3f` | Direction and magnitude of the punch. |

## ChangeVelocity (164)
**Bound:** Clientbound | **State:** Play

Sets the velocity of an entity (e.g., explosions, jump pads).

| Field | Type | Notes |
| :--- | :--- | :--- |
| `entityId` | `Int` | The target entity. |
| `velocity` | `Vector3f` | Motion vector (X, Y, Z). |

## SpawnModelParticles (165)
**Bound:** Clientbound

Spawns particles based on an entity model (e.g., blood when hit, crumbs when eating).

| Field | Type | Notes |
| :--- | :--- | :--- |
| `entityId` | `Int` | Source entity. |
| `effect` | `String` | Particle effect name. |