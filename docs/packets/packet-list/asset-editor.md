---
title: Asset Editor
description: Live hot-reloading and asset modification.
sidebar_position: 10
---

# Asset Editor Packets

Packets in `com.hypixel.hytale.protocol.packets.asseteditor` (IDs 500+).

These packets facilitate the connection between the Hytale client and the server's asset system, allowing for real-time "Hot Reloading" of models, textures, and JSON configs.

## Session Management

### AssetEditorAuthorization (500)
**Bound:** Clientbound

Grants or denies the client permission to open the editor UI.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `authorized` | `Boolean` | True if player has permission. |
| `rootDirectory` | `String` | The base path for assets. |

### AssetEditorCapabilities (501)
**Bound:** Clientbound

Tells the client which editor features are supported.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `canDelete` | `Boolean` | |
| `canRename` | `Boolean` | |
| `canImport` | `Boolean` | |

## File Operations

### AssetEditorRequestDataset (502)
**Bound:** Serverbound

Requests the full content of a specific asset (JSON + binary files).

| Field | Type | Notes |
| :--- | :--- | :--- |
| `assetUri` | `String` | e.g. "hytale/assets/textures/block/stone.png". |

### AssetEditorCreateAsset (506)
**Bound:** Serverbound

Creates a new file.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `path` | `String` | Directory path. |
| `name` | `String` | Filename. |
| `type` | `String` | Asset type (model, texture, script). |

### AssetEditorUpdateAsset (508)
**Bound:** Serverbound

Uploads modified content for an existing asset.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `assetUri` | `String` | The file being modified. |
| `content` | `Byte[]` | The new raw data (JSON text or binary). |

### AssetEditorDeleteAsset (510)
**Bound:** Serverbound

| Field | Type | Notes |
| :--- | :--- | :--- |
| `assetUri` | `String` | File to delete. |

## Undo/Redo System

The server maintains an undo stack for asset changes.

* **515**: `AssetEditorUndoChanges` (Serverbound)
* **516**: `AssetEditorRedoChanges` (Serverbound)
* **517**: `AssetEditorUndoRedoReply` (Clientbound) - Confirms the new state version.