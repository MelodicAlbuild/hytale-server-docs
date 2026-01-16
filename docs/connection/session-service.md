---
sidebar_position: 2
title: Session Service
---

# Session Service API

The Session Service manages the active game sessions and validates server identities.

## API Endpoints

### Create Game Session

**Request:**
```http
POST [https://sessions.hytale.com/game-session/new](https://sessions.hytale.com/game-session/new)
Content-Type: application/json
Authorization: Bearer <access_token>

{
    "uuid": "<selected_profile_uuid>"
}
```

**Response:**
```json
{
    "sessionToken": "...",
    "identityToken": "<JWT>",
    "expiresAt": "2024-01-01T00:00:00Z"
}
```

### Terminate Game Session

:::danger Critical Requirement
You **MUST** call this endpoint on server shutdown. There is a strict limit of **100 concurrent sessions** per account. Failing to terminate sessions may lock you out of creating new ones.
:::

**Request:**
```http
DELETE [https://sessions.hytale.com/game-session](https://sessions.hytale.com/game-session)
Authorization: Bearer <sessionToken>
```

### Request Authorization Grant

Used when a client connects to verify their identity.

**Request:**
```http
POST [https://sessions.hytale.com/server-join/auth-grant](https://sessions.hytale.com/server-join/auth-grant)
Content-Type: application/json
Authorization: Bearer <sessionToken>

{
    "identityToken": "<client_identity_token>",
    "aud": "<server_session_id>"
}
```

**Response:**
```json
{
    "authorizationGrant": "..."
}
```

## JWT Structure

Tokens use the **EdDSA (Ed25519)** algorithm. The format follows standard JWT `<header>.<payload>.<signature>`.

### Identity Token Claims

```json
{
    "iss": "[https://sessions.hytale.com](https://sessions.hytale.com)",
    "sub": "session-uuid",
    "aud": "hytale-server",
    "exp": 1234567890,
    "iat": 1234567890,
    "nbf": 1234567890,
    "username": "player_name",
    "scope": "openid offline auth:server"
}
```

### Access Token Claims

```json
{
    "iss": "[https://sessions.hytale.com](https://sessions.hytale.com)",
    "aud": "expected-audience",
    "sub": "player-uuid",
    "username": "player_name",
    "ipAddress": "1.2.3.4",
    "iat": 1234567890,
    "exp": 1234567890,
    "cnf": {
        "x5t#S256": "<cert_fingerprint>"
    }
}
```

### JWKS Endpoint

Public keys for verifying JWT signatures can be fetched from:
`GET https://sessions.hytale.com/.well-known/jwks.json`