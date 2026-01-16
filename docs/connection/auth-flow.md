---
sidebar_position: 1
title: OAuth2 Flow
---

# OAuth2 & Device Authentication

The Hytale authentication system uses **OAuth2 Device Code Flow** combined with a Session Service for server authentication. 

:::note
The following code snippets are taken from the Alloy Server Engine, not from the official Java source.<br/>
All data, structures, and responses should remain the same from language to language.
:::

## Authentication Methods

1.  **Method A (External Session)**: Using pre-obtained tokens via CLI or environment variables.
2.  **Method B (Device Code Flow)**: Interactive OAuth where the user authenticates via a browser code.
3.  **Method C (Session Re-use)**: Loading saved credentials from disk.

## OAuth2 Endpoints

| Endpoint | URL |
| :--- | :--- |
| **Device Auth** | `https://oauth.accounts.hytale.com/oauth2/device/auth` |
| **Token** | `https://oauth.accounts.hytale.com/oauth2/token` |
| **Sessions** | `https://sessions.hytale.com` |
| **Account Data** | `https://account-data.hytale.com` |

**Client Configuration:**
* **Client ID**: `hytale-server`
* **Scopes**: `openid offline auth:server`

## Data Structures

### OAuthTokens

```cpp
struct OAuthTokens {
    std::string accessToken;
    std::string refreshToken;
    std::chrono::system_clock::time_point expiresAt;

    bool isExpired() const;
    bool needsRefresh() const;  // 5 min before expiry
};
```

### GameSession

```cpp
struct GameSession {
    std::string sessionToken;     // Bearer token for session management
    std::string identityToken;    // JWT identifying the server
    std::string sessionId;        // Extracted from JWT 'sub' claim
    std::chrono::system_clock::time_point expiresAt;
};
```

## Device Code Flow

### 1. Initiate Device Code

**Request:**

```http
POST [https://oauth.accounts.hytale.com/oauth2/device/auth](https://oauth.accounts.hytale.com/oauth2/device/auth)
Content-Type: application/x-www-form-urlencoded

client_id=hytale-server&scope=openid+offline+auth:server
```

**Response:**

```json
{
    "device_code": "...",
    "user_code": "ABCD-1234",
    "verification_uri": "[https://hytale.com/device](https://hytale.com/device)",
    "verification_uri_complete": "[https://hytale.com/device?code=ABCD-1234](https://hytale.com/device?code=ABCD-1234)",
    "expires_in": 600,
    "interval": 5
}
```

### 2. Poll for Token

The client must poll the token endpoint every `interval` seconds (default: 5s).

**Request:**

```http
POST [https://oauth.accounts.hytale.com/oauth2/token](https://oauth.accounts.hytale.com/oauth2/token)
Content-Type: application/x-www-form-urlencoded

client_id=hytale-server&grant_type=urn:ietf:params:oauth:grant-type:device_code&device_code=<code>
```

**Polling States:**

| Response | Action |
| :--- | :--- |
| `authorization_pending` | Continue polling |
| `slow_down` | Increase interval by 5s |
| `expired_token` | Device code expired |
| `access_denied` | User denied |
| **Success** | Parse token response |

**Success Response:**

```json
{
    "access_token": "...",
    "refresh_token": "...",
    "expires_in": 3600
}
```