---
title: Connection
description: Basic connectivity, keep-alive, and disconnection.
sidebar_position: 2
---

# Connection Packets

Packets in the `com.hypixel.hytale.protocol.packets.connection` package.

## Connect (0)
**Bound:** Serverbound | **State:** Handshake | **Compressed:** No

The very first packet sent by the client to initiate the session.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `nullBits` | `Byte` | Bitmask for optional fields. |
| `protocolHash` | `String (64)` | Fixed-length hash of the protocol version. |
| `clientType` | `Byte` | `0` = Game, `1` = Editor. |
| `uuid` | `UUID` | The player's unique ID. |
| `language` | `String` | **Optional** (Mask `0x1`). Language code (e.g., "en-US"). |
| `identityToken` | `String` | **Optional** (Mask `0x2`). JWT for authentication (Max 8192 chars). |
| `username` | `String` | **Optional** (Mask `0x4`). Player username (Max 16 chars). |
| `referralData` | `Byte[]` | **Optional** (Mask `0x8`). Binary referral blob. |
| `referralSource` | `HostAddress` | **Optional** (Mask `0x10`). Where the user clicked "Connect" from. |

## Disconnect (1)
**Bound:** Clientbound | **State:** Any

Sent by the server to close the connection with a reason.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `reason` | `String` | The kick message displayed to the user. |

## Ping (2)
**Bound:** Bidirectional | **State:** Any

Keep-alive packet.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `time` | `InstantData` | Current system time. |

## Pong (3)
**Bound:** Bidirectional | **State:** Any

Response to a Ping packet.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `time` | `InstantData` | The time received in the Ping packet. |
| `metrics` | `Short` | **Optional**. Queue size/metrics (Serverbound only). |