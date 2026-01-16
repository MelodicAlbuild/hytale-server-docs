---
sidebar_position: 2
title: Components & Registry
---

# Components & Registry

Plugins interact with the game world primarily through registries provided by `PluginBase`.

## Key Registries

| Registry Method | Purpose |
| :--- | :--- |
| `getEventRegistry()` | Register event listeners |
| `getCommandRegistry()` | Register chat/console commands |
| `getEntityStoreRegistry()` | Register entity components (ECS) |
| `getChunkStoreRegistry()` | Register chunk components |
| `getAssetRegistry()` | Register custom assets |
| `getTaskRegistry()` | Schedule recurring tasks |

## Component Registration

### Entity Components (ECS)
To add data or behavior to entities:

```java
protected void setup() {
    // Register the data component
    getEntityStoreRegistry().registerComponent(
        MyComponent.class,
        MyComponent::new
    );

    // Register the system that acts on it
    getEntityStoreRegistry().registerSystem(
        new MyTickingSystem()
    );
}
```

## Permissions

Permissions follow a hierarchical format: `{group}.{name}`.

* **Base Permission**: Defined by the plugin (e.g., `hytale.weather`).
* **Specific Nodes**: `hytale.weather.command.rain`

## Class Loading

* **Isolation**: Each `JavaPlugin` has its own `PluginClassLoader` to prevent conflicts.
* **Bridge**: A `PluginBridgeClassLoader` allows access to classes from declared dependencies.

## Directory Structure

A standard plugin JAR file structure:

```text
plugin-name.jar
├── manifest.json (required)
├── com/example/MyPlugin.class
├── assets/ (if IncludesAssetPack=true)
└── resources/config/default.json
```