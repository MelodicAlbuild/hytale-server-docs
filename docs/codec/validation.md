---
sidebar_position: 2
title: Validation & Schema
---

# Validation & Schema System

The codec system includes robust tools for validating data during deserialization and generating schemas for editor tools.

## Validation System

### ValidatableCodec Interface
Codecs implementing `ValidatableCodec<T>` must provide:
* `validate(T value, ExtraInfo extraInfo)`
* `validateDefaults(ExtraInfo extraInfo, Set<Codec<?>> tested)`

### Available Validators

**Null/Empty Checks:**
* `Validators.nonNull()`
* `Validators.nonEmptyString()`
* `Validators.nonEmptyArray()`

**Numeric Ranges:**
* `Validators.range(min, max)` (Inclusive)
* `Validators.min(value)`
* `Validators.max(value)`
* `Validators.insideRange(a, b)` (Exclusive)

**Collections:**
* `Validators.uniqueInArray()`
* `Validators.arraySizeRange(min, max)`

## Schema System

The system can generate schemas compatible with Hytale's editor tools.

### Schema Types
* **ObjectSchema**: Complex object definitions.
* **ArraySchema**: Lists of items.
* **StringSchema** / **NumberSchema** / **BooleanSchema**: Primitives.

### UI Metadata
You can attach metadata to codecs to influence how they appear in the editor:

* `UIEditor`: Specifies a custom editor widget.
* `UIButton`: Adds a button.
* `UIPropertyTitle`: Custom label.
* `UIEditorSectionStart`: Begins a new section group.
* `UIDisplayMode`: Toggles between `COMPACT` and expanded views.

## Polymorphic Lookup

:::info Note
There is some weirdness around using type IDs with more than 255 characters.
:::

The `ACodecMapCodec<K, T, C>` class maps a type ID string to a specific codec, allowing polymorphic data structures.

**Example:**
```json
{
    "Type": "Box",
    "Min": { "X": 0, "Y": 0, "Z": 0 },
    "Max": { "X": 1, "Y": 1, "Z": 1 }
}
```

The codec automatically looks up the `Box` codec based on the "Type" field registry.