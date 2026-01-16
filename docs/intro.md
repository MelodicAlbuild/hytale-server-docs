---
sidebar_position: 1
slug: /
title: Introduction
---

# Hytale Server Documentation

Welcome to the comprehensive documentation of the **Hytale Java Server** Protocol, Codec, Plugin, and Authentication systems.

This documentation is designed to help developers understand the internal architecture of the official Hytale server and how to interact with it.

:::info Disclaimer
This is unofficial documentation based on technical analysis of the Hytale Java Server. It is not affiliated with Hypixel Studios.
:::

:::warning
Some code in the following documentation is based around the Alloy Server Engine Project, and is written in C++, not Java.<br/>
All of the protocol, codec, packet, and plugin information should remain the same. There will be some instances where code is not identical.
There will be notes at the beginning of articles if there is any major discrepencies in that article.
:::

## Documentation Structure

* **[Connection & Auth](/connection/auth-flow)**: Details the OAuth2 Device Code Flow, Session Service API, and the handshake sequence required to connect a client to the server.
* **[Protocol System](/protocol/wire-format)**: Explains the Netty-based networking architecture, packet headers, Zstd compression, and data types.
* **[Packet Reference](/packets)**: The complete, byte-level specification for every packet in the game (IDs 0–500+).
    * **[Gameplay](/packets/packet-list/gameplay)**: Movement, Block Updates, Game Mode.
    * **[World Data](/packets/packet-list/assets)**: Registry Sync, Weather, Time.
    * **[Tools & Editor](/packets/packet-list/tools)**: Builder Tools, Asset Editor, Machinima.
* **[Codec System](/codec/architecture)**: Covers the BSON-based serialization framework, including schemas, validation, and complex data structures.
* **[Plugin System](/plugin-system/lifecycle)**: Documentation on the plugin lifecycle, event system, manifest configuration, and component registration.

## Key Technologies

The Hytale server is built using several key technologies:

* **Language**: Java 21 (Server Core & Plugins)
* **Networking**: Netty & QUIC (Alloy/Hytale Protocol)
* **Serialization**: BSON (Binary JSON) with Schema Validation
* **Compression**: Zstd (Level configurable)
* **Authentication**: OAuth2 Device Flow & JWT (Ed25519 signatures)

## Protocol Overview

The protocol is split into three distinct phases:

1.  **Handshake**: The client connects via QUIC, exchanges protocol hashes, and authenticates via OAuth2.
2.  **Loading**: The server sends the `WorldSettings`, Registry Data (Blocks/Items), and required Assets.
3.  **Play**: The client spawns into the world, receiving Chunk Data, Entity Updates, and Time Syncs.

---