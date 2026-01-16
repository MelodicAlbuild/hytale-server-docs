---
title: Interactions
description: Entity mounting and complex interaction chains.
sidebar_position: 13
---

# Interaction Packets

Packets in the `com.hypixel.hytale.protocol.packets.interaction` package.

## NPC Mounting

### MountNPC (166)
**Bound:** Clientbound

Instructs the client to attach an entity (rider) to another entity (mount).

| Field | Type | Notes |
| :--- | :--- | :--- |
| `mountId` | `Int` | Entity ID of the vehicle/mob. |
| `riderId` | `Int` | Entity ID of the passenger. |
| `seatIndex` | `Int` | Which seat to occupy (for multi-seat vehicles). |

### DismountNPC (167)
**Bound:** Clientbound

Detaches a rider from their mount.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `riderId` | `Int` | The entity dismounting. |

## Interaction Chains

Hytale uses "Interaction Chains" for actions that take time or have multiple steps (e.g., helping a player up, opening a heavy door).

### SyncInteractionChain (170)
**Bound:** Clientbound

Synchronizes the state of an ongoing interaction.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `entityId` | `Int` | The entity performing the interaction. |
| `targetId` | `Int` | The target entity (if any). |
| `interactionId` | `String` | Registry ID of the interaction type. |
| `state` | `Byte` | `0`=Start, `1`=Update, `2`=End. |

### PlayInteractionFor (171)
**Bound:** Clientbound

Triggers a one-off visual interaction animation.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `entityId` | `Int` | The actor. |
| `targetId` | `Int` | The target. |
| `interaction` | `String` | Interaction name. |

### CancelInteractionChain (172)
**Bound:** Bidirectional

Cancels the current action (e.g., player released the key).