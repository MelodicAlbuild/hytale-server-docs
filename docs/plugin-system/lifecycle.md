---
sidebar_position: 1
title: Lifecycle & Events
---

# Plugin Lifecycle & Events

## Loading Order

Plugins are loaded in a specific sequence to ensure dependencies are met:

1.  **Early Plugins**: Loaded via `EarlyPluginLoader` (in `earlyplugins/`). Can perform class transformation.
2.  **Core Plugins**: Built-in system plugins.
3.  **Builtin Directory**: Plugins in `builtin/`.
4.  **Classpath Plugins**: Discovered via `manifest.json` on the classpath.
5.  **Mod Directory**: User-installed plugins in `mods/`.

## Plugin States

```java
public enum PluginState {
    NONE,      // Initial state
    SETUP,     // Being configured (registering systems)
    START,     // Active logic starts
    ENABLED,   // Running normally
    SHUTDOWN,  // Cleanup
    DISABLED   // Failed or turned off
}
```

## Event System

The event bus supports both synchronous (`IEvent`) and asynchronous (`IAsyncEvent`) events.

### Registration Example

```java
public class ExamplePlugin extends JavaPlugin {
    @Override
    protected void setup() {
        getEventRegistry().register(
            PlayerConnectEvent.class,
            this::onPlayerConnect
        );
    }

    private void onPlayerConnect(PlayerConnectEvent event) {
        getLogger().info("Player connected: " + event.getPlayer().getName());
    }
}
```

### Event Priority
Priorities determine the order in which handlers receive events:
`EARLIEST` -> `EARLY` -> `DEFAULT` -> `LATE` -> `LATEST`

## Plugin Manifest (`manifest.json`)

Every plugin requires a `manifest.json` file in its root.

```json
{
    "Group": "MyCompany",
    "Name": "MyPlugin",
    "Version": "1.0.0",
    "Main": "com.example.MyPluginMain",
    "ServerVersion": "^1.0.0",
    "Dependencies": {
        "Hytale:Core": "^1.0.0"
    }
}
```