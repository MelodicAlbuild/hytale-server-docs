---
title: Builder Tools
description: Creative mode brushes, selection, and copy/paste.
sidebar_position: 9
---

# Builder Tools Packets

Packets in `com.hypixel.hytale.protocol.packets.buildertools` (IDs 400-499).

## Tool State & Selection

### BuilderToolState (400)
**Bound:** Clientbound

Syncs the active tool's configuration to the client UI.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `toolName` | `String` | Registry name of the tool (e.g., "brush_sphere"). |
| `args` | `Map<String, ToolArg>` | Current settings (radius, mask, etc.). |

### BuilderToolSelectionUpdate (401)
**Bound:** Clientbound

Updates the blue wireframe selection box.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `visible` | `Boolean` | Should the box be rendered? |
| `pos1` | `Vector3i` | Primary selection corner. |
| `pos2` | `Vector3i` | Secondary selection corner. |
| `color` | `Int` | Wireframe color. |

## Clipboard Operations

### BuilderToolPasteClipboard (406)
**Bound:** Serverbound

Requests to paste the current clipboard at a location.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `position` | `Vector3i` | Target coordinates. |
| `rotation` | `Byte` | `0`=0, `1`=90, `2`=180, `3`=270. |
| `mirror` | `Boolean` | Flip across X axis. |

### BuilderToolRotateClipboard (407)
**Bound:** Serverbound

Rotates the preview mesh of the clipboard content.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `axis` | `Byte` | `0`=X, `1`=Y, `2`=Z. |
| `angle` | `Int` | Degrees (90, 180, -90). |

## Entity Manipulation

### BuilderToolSetEntityTransform (415)
**Bound:** Serverbound

Used by the gizmo tool to move/rotate entities precisely.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `entityId` | `Int` | The target entity. |
| `position` | `Vector3d` | New absolute position. |
| `rotation` | `Quaternion` | New absolute rotation. |
| `scale` | `Vector3f` | Scale factor. |