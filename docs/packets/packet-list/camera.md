---
title: Camera & Cinematics
description: Camera control, fly mode, and Machinima tools.
sidebar_position: 11
---

# Camera Packets

Packets in `com.hypixel.hytale.protocol.packets.camera` and `machinima`.

## Camera Control (280-289)

### SetServerCamera (280)
**Bound:** Clientbound

Forces the client's camera to a specific state (cutscenes).

| Field | Type | Notes |
| :--- | :--- | :--- |
| `position` | `Vector3d` | World position. |
| `rotation` | `Quaternion` | Camera orientation. |
| `fov` | `Float` | Field of view. |

### RequestFlyCameraMode (282)
**Bound:** Serverbound

Client toggling "NoClip" or "Free Cam".

| Field | Type | Notes |
| :--- | :--- | :--- |
| `enabled` | `Boolean` | Requested state. |

### SetFlyCameraMode (283)
**Bound:** Clientbound

Server granting/revoking free cam.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `enabled` | `Boolean` | New state. |
| `speed` | `Float` | Max fly speed. |

### CameraShakeEffect (281)
**Bound:** Clientbound

Triggers a screen shake.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `intensity` | `Float` | Shake magnitude. |
| `duration` | `Float` | Seconds. |
| `type` | `Byte` | `0`=Rotational, `1`=Positional. |

## Machinima (350+)

### UpdateMachinimaScene (350)
**Bound:** Clientbound

Syncs timeline data for the cinematic editor.

| Field | Type | Notes |
| :--- | :--- | :--- |
| `timelineData` | `Byte[]` | Complex BSON blobs defining keyframes. |

### RequestMachinimaActorModel (351)
**Bound:** Serverbound

Requests the model data for a specific actor in the scene.

### SetMachinimaActorModel (352)
**Bound:** Clientbound

Updates the visual model of a timeline actor.