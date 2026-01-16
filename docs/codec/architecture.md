---
sidebar_position: 1
title: Architecture
---

# Codec Architecture

The Hytale codec system is a sophisticated, type-safe serialization/deserialization framework built around **BSON (Binary JSON)** encoding. It supports encoding and decoding complex data structures while maintaining inheritance hierarchies, validation, and schema generation.

## Core Interfaces

### Codec&lt;T&gt;
The core marker interface for all codecs.

* `encode(T, ExtraInfo): BsonValue` - Encode object to BSON.
* `decode(BsonValue, ExtraInfo): T` - Decode BSON to object.
* `decodeJson()` - JSON decoding support.
* `toSchema()` - Schema generation.

### Wrapped & Inherit Codecs

* **WrappedCodec&lt;T&gt;**: Decorator pattern; uses `getChildCodec()` to access the underlying codec.
* **InheritCodec&lt;T&gt;**: Allows configuration inheritance using `decodeAndInherit`.

## KeyedCodec

Wraps a codec with a JSON field key name, making it essential for object mapping.

```java
KeyedCodec<Float> YAW = new KeyedCodec<>("Yaw", Codec.FLOAT);

// Usage
Float yaw = YAW.getNow(document, extraInfo);        // Throws if missing
Optional<Float> yaw = YAW.get(document, extraInfo); // Returns Optional
Float yaw = YAW.getOrDefault(document, extraInfo, 0.0f);
```

## Builder-Based Codecs

The primary pattern for defining complex objects is the `BuilderCodec`.

```java
BuilderCodec<Direction> DIRECTION = BuilderCodec.builder(Direction.class, Direction::new)
    .appendInherited(new KeyedCodec<>("Yaw", Codec.FLOAT),
        (o, v) -> o.yaw = v.floatValue(),
        o -> Float.valueOf(o.yaw),
        (o, p) -> o.yaw = p.yaw)
    .addValidator(Validators.nonNull())
    .documentation("Direction with yaw, pitch, and roll angles")
    .build();
```

**Builder Methods:**
* `append(KeyedCodec, setter, getter)`: Add a standard field.
* `appendInherited(...)`: Add a field that inherits values from a parent config.
* `metadata()`: Add UI/Schema metadata (e.g., `UIDisplayMode`).

## Common Protocol Codecs

The system includes pre-built codecs for common game types:

* **Geometry**: `Vector3f`, `Vector3d`, `Direction` (Yaw/Pitch/Roll).
* **Ranges**: `Range` (Int), `Rangef` (Float).
* **Appearance**: `ColorCodec` (RGB), `ColorAlphaCodec` (RGBA).
* **Shapes**: `Box`, `Ellipsoid`, `Cylinder`.