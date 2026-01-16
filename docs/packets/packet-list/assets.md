---
title: Registry & Assets
description: Packets for synchronizing game data (Blocks, Items, Weather).
sidebar_position: 5
---

# Registry & Asset Packets

Packets in the `com.hypixel.hytale.protocol.packets.assets` package.

:::info Compression
All packets in this section are **Compressed (Zstd)**.
:::

## UpdateBlockTypes (40)
**Bound:** Clientbound

Synchronizes the Block Registry. Defines properties for every block in the game.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `nullBits` | `Byte` | Bitmask. |
| `type` | `Byte` | Update Type: `0`=Full, `1`=Partial. |
| `maxId` | `Int` | The highest Block ID. |
| `flags` | `Byte` | Packed booleans (Textures, Models, Geometry). |
| `blockTypes` | `Map<Int, BlockType>` | **Optional** (Mask `0x1`). Mapping of ID to Block Definition. |

## UpdateItems (54)
**Bound:** Clientbound

Synchronizes the Item Registry.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `nullBits` | `Byte` | Bitmask. |
| `items` | `Map<Int, Item>` | **Optional** (Mask `0x1`). Mapping of ID to Item Definition. |

## UpdateRecipes (69)
**Bound:** Clientbound

Synchronizes crafting and forging recipes.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `nullBits` | `Byte` | Bitmask. |
| `recipes` | `Map<Int, Recipe>` | **Optional** (Mask `0x1`). ID to Recipe definition. |

## UpdateWeathers (47)
**Bound:** Clientbound

Defines available weather states (Sunny, Rain, Foggy).

| Field | Type | Notes |
| :--- | :--- | :--- |
| `nullBits` | `Byte` | Bitmask. |
| `weathers` | `Map<Int, Weather>` | **Optional** (Mask `0x1`). |

## UpdateTranslations (70)
**Bound:** Clientbound

Sends the localization table (Language keys).

| Field | Type | Notes |
| :--- | :--- | :--- |
| `nullBits` | `Byte` | Bitmask. |
| `translations` | `Map<String, String>` | **Optional** (Mask `0x1`). Key (e.g., `item.sword.name`) -> Value. |

## UpdateTagPatterns (84)
**Bound:** Clientbound

Defines regex-like patterns for tagging groups of items/blocks.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `nullBits` | `Byte` | Bitmask. |
| `patterns` | `Map<String, String>` | **Optional**. Tag Name -> Pattern string. |

## Generic Registry Updates
The following packets follow the standard "Map Update" pattern: `[NullBits] [Map<Int, Definition>]`.

* **41**: `UpdateBlockHitboxes` (Collision boxes)
* **42**: `UpdateBlockSoundSets` (Step/Break sounds)
* **51**: `UpdateEntityEffects` (Status effects)
* **53**: `UpdateModelvfxs` (Visual effects attached to models)
* **65**: `UpdateSoundEvents` (One-shot sound configs)
* **83**: `UpdateFluids` (Water/Lava definitions)