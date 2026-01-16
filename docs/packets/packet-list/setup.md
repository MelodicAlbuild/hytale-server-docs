---
title: Setup & Loading
description: World initialization, asset downloading, and player configuration.
sidebar_position: 4
---

# Setup Packets

Packets in the `com.hypixel.hytale.protocol.packets.setup` package (IDs 20-34).

## WorldSettings (20)
**Bound:** Clientbound | **Compressed:** Yes

Configures the game world constraints and required assets.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `nullBits` | `Byte` | Bitmask. |
| `worldHeight` | `Int` | Vertical map height. |
| `requiredAssets` | `List<Asset>` | **Optional** (Mask `0x1`). List of assets client must have. |

## WorldLoadProgress (21)
**Bound:** Clientbound

Updates the loading bar on the client.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `progress` | `Float` | 0.0 to 1.0. |
| `message` | `String` | Loading status text (e.g., "Loading Chunks"). |

## WorldLoadFinished (22)
**Bound:** Clientbound

*Payload is empty.* Tells the client to hide the loading screen.

## RequestAssets (23)
**Bound:** Serverbound | **Compressed:** Yes

Client asking for asset data it is missing.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `assets` | `List<String>` | List of Asset hashes/names requested. |

## AssetInitialize (24)
**Bound:** Clientbound

Header for an incoming asset file transfer.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `name` | `String` | Asset name. |
| `size` | `Int` | Total size in bytes. |
| `checksum` | `Int` | CRC/Hash of the file. |

## AssetPart (25)
**Bound:** Clientbound | **Compressed:** Yes

A chunk of binary data for the file currently being transferred.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `data` | `Byte[]` | The binary payload. |

## AssetFinalize (26)
**Bound:** Clientbound

*Payload is empty.* Marks the end of the current asset transfer.

## RemoveAssets (27)
**Bound:** Clientbound

Instructs the client to remove specific assets from its cache.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `assetNames` | `List<String>` | The list of asset names to delete. |

## RequestCommonAssetsRebuild (28)
**Bound:** Serverbound

*Debug Packet.* Requests the server to rebuild common assets.

## SetUpdateRate (29)
**Bound:** Clientbound

Sets the client's logic tick rate.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `rate` | `Int` | Ticks per second (usually 20). |

## SetTimeDilation (30)
**Bound:** Clientbound

Controls the speed of the game simulation (slow motion or speed up).

| Field | Type | Notes |
| :--- | :--- | :--- |
| `dilation` | `Double` | 1.0 is normal speed. |

## UpdateFeatures (31)
**Bound:** Clientbound

Enables or disables client-side features (UI elements, controls).

| Field | Type | Notes |
| :--- | :--- | :--- |
| `features` | `Map<String, Boolean>` | Map of feature IDs to enabled state. |

## ViewRadius (32)
**Bound:** Serverbound

Sent by the client when the user changes their render distance settings.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `radius` | `Int` | The new view radius in chunks. |

## PlayerOptions (33)
**Bound:** Serverbound

Syncs client settings to the server.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `viewDistance` | `Int` | Render distance. |
| `skin` | `String` | Player skin texture ID. |
| `leftHanded` | `Boolean` | Main hand preference. |

## ServerTags (34)
**Bound:** Clientbound | **Compressed:** Yes

Synchronizes registry tags (groups of items/blocks).

| Field | Type | Notes |
| :--- | :--- | :--- |
| `tags` | `Map<String, List<String>>` | Map of Tag Names (e.g. `#logs`) to entry lists. |