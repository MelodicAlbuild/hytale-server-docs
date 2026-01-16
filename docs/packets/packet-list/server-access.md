---
title: Server Access
description: Managing server passwords and access control.
sidebar_position: 10
---

# Server Access Packets

Packets in the `com.hypixel.hytale.protocol.packets.serveraccess` package.

## RequestServerAccess (250)
**Bound:** Serverbound

Sent by the client to request access (e.g., submitting a password).

| Field | Type | Notes |
| :--- | :--- | :--- |
| `password` | `String` | The password string entered by the user. |

## UpdateServerAccess (251)
**Bound:** Clientbound

Updates the server's access configuration (public/private).

| Field | Type | Notes |
| :--- | :--- | :--- |
| `isPrivate` | `Boolean` | If true, requires password/whitelist. |
| `hasPassword` | `Boolean` | If true, prompts client for password. |

## SetServerAccess (252)
**Bound:** Clientbound

Admin packet to change the server's access settings at runtime.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `password` | `String` | New password (or empty to remove). |
| `isPrivate` | `Boolean` | Toggle privacy mode. |