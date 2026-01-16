---
title: Inventory & UI
description: Windows, crafting, chat, and custom UI.
sidebar_position: 8
---

# Inventory & UI Packets

Packets in `inventory`, `window`, and `interface_` packages.

## ChatMessage (200)
**Bound:** Bidirectional

Sends a chat message or command.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `nullBits` | `Byte` | Bitmask. |
| `channel` | `Byte` | `0`=System, `1`=Chat, `2`=Whisper. |
| `sender` | `String` | **Optional**. Sender name. |
| `text` | `String` | **Optional**. The message content. |

## Notification (201)
**Bound:** Clientbound

Shows a UI "Toast" notification.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `title` | `String` | Header text. |
| `message` | `String` | Body text. |
| `icon` | `String` | Asset path for the icon. |

## KillFeedMessage (202)
**Bound:** Clientbound

Displays a kill message in the top-right kill feed.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `text` | `String` | The raw text to display. |
| `icon` | `String` | **Optional**. Path to an icon (e.g. weapon sprite). |

## WorldSavingStatus (203)
**Bound:** Clientbound

Shows the "Saving..." icon in the corner.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `active` | `Boolean` | True to show, False to hide. |

## UpdatePortal (204)
**Bound:** Clientbound

Updates the visual state of a portal (e.g., Adventure Mode dungeon entrance).

| Field | Type | Notes |
| :--- | :--- | :--- |
| `portalId` | `Int` | Entity ID of the portal. |
| `state` | `Byte` | `0`=Inactive, `1`=Active, `2`=Cooling Down. |
| `destination` | `String` | **Optional**. Name of the destination world. |

## UpdatePlayerInventory (205)
**Bound:** Clientbound | **Compressed:** Yes

Synchronizes the player's local inventory slots.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `nullBits` | `Byte` | Bitmask. |
| `items` | `Map<Int, ItemStack>` | **Optional**. Slot Index -> Item Data. |

## MoveItemStack (206)
**Bound:** Serverbound

Sent when the player drags and drops an item.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `sourceWindow` | `Int` | ID of source container. |
| `sourceSlot` | `Int` | Index in source. |
| `targetWindow` | `Int` | ID of target container. |
| `targetSlot` | `Int` | Index in target. |

## OpenWindow (208)
**Bound:** Clientbound

Instructs the client to open a container interface (Chest, Crafting Table).

| Field | Type | Notes |
| :--- | :--- | :--- |
| `windowId` | `Int` | Unique ID for this session. |
| `type` | `String` | Window layout type (e.g., "container_generic_9x3"). |
| `title` | `String` | Window title. |

## CloseWindow (209)
**Bound:** Bidirectional | **State:** Play

Sent when a user presses Escape to close a GUI, or by the server to force-close a window.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `windowId` | `Int` | The ID of the window to close. |

## CustomHud (220)
**Bound:** Clientbound

Loads a custom HTML/CSS UI layer defined by a script.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `id` | `String` | Unique HUD ID. |
| `html` | `String` | Raw HTML content. |
| `visible` | `Boolean` | Initial visibility. |