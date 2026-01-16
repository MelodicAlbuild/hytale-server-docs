---
title: Authentication
description: Packets for the authentication and login sequence.
sidebar_position: 3
---

# Authentication Packets

Packets in the `com.hypixel.hytale.protocol.packets.auth` package.

## Status (10)
**Bound:** Clientbound | **State:** Status

Returns server information for the server list ping.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `motd` | `String` | Message of the Day. |
| `playerCount` | `Int` | Current players. |
| `maxPlayers` | `Int` | Max slots. |
| `membersOnly` | `Boolean` | If true, restricts access. |

## AuthGrant (11)
**Bound:** Clientbound | **State:** Login

Server provides the OAuth grant to the client.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `grant` | `String` | The authorization grant code (Max 4096). |
| `identity` | `String` | The server's identity JWT (Max 8192). |

## AuthToken (12)
**Bound:** Serverbound | **State:** Login

Client sends the obtained access token back to the server.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `nullBits` | `Byte` | Bitmask. |
| `accessToken` | `String` | **Optional** (Mask `0x1`). The raw access token. |
| `serverGrant` | `String` | **Optional** (Mask `0x2`). The grant code. |

## ServerAuthToken (13)
**Bound:** Clientbound | **State:** Login

Finalizes the login process.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `serverToken` | `String` | The confirmed server session token. |

## ConnectAccept (14)
**Bound:** Clientbound | **State:** Login

Used when falling back to password authentication.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `salt` | `Byte[]` | Salt for hashing the password. |
| `challenge` | `Byte[]` | Random challenge bytes. |

## PasswordResponse (15)
**Bound:** Serverbound | **State:** Login

| Field | Type | Notes |
| :--- | :--- | :--- |
| `hash` | `Byte[]` | The hashed password response. |

## PasswordAccepted (16)
**Bound:** Clientbound | **State:** Login

*Payload is empty.* Signals successful password login.

## PasswordRejected (17)
**Bound:** Clientbound | **State:** Login

| Field | Type | Notes |
| :--- | :--- | :--- |
| `attemptsLeft` | `Int` | Remaining retries allowed. |

## ClientReferral (18)
**Bound:** Serverbound | **State:** Login

| Field | Type | Notes |
| :--- | :--- | :--- |
| `source` | `HostAddress` | Hostname/IP used to join. |