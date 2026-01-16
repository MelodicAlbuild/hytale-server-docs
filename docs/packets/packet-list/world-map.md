---
title: World Map
description: In-game map data, markers, and fog of war.
sidebar_position: 12
---

# World Map Packets

Packets in the `com.hypixel.hytale.protocol.packets.worldmap` package.

## UpdateWorldMap (290)
**Bound:** Clientbound

Updates the map data (fog of war, explored areas).

| Field | Type | Notes |
| :--- | :--- | :--- |
| `action` | `Byte` | `0`=Add, `1`=Remove, `2`=Update. |
| `data` | `MapChunk[]` | List of explored map chunks. |

## UpdateWorldMapVisible (291)
**Bound:** Clientbound

Toggles map visibility (e.g., during cutscenes).

| Field | Type | Notes |
| :--- | :--- | :--- |
| `visible` | `Boolean` | Is map allowed? |

## UpdateWorldMapSettings (292)
**Bound:** Clientbound

Configures map behavior.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `showPlayers` | `Boolean` | Show other players on map. |
| `showWaypoints` | `Boolean` | Show user waypoints. |

## TeleportToWorldMapMarker (293)
**Bound:** Serverbound

Sent when admin/debug user clicks a marker to teleport.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `markerId` | `String` | ID of the target marker. |

## ClearWorldMap (295)
**Bound:** Clientbound

Resets the fog of war.