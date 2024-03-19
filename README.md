


# Pokedex API

An API to manage your pokemons like pokedex

## Base URL

```
http://localhost:3000/
```

## Authentication

Describe the authentication mechanism here (e.g., OAuth2, API key, JWT).

## Endpoints

### `GET /pokemons`

Description of what this endpoint does.
>  ℹ️ The note content.

#### Request Example

```http
GET /api/v1/pokemons/
Host: http://localhost:3000
```

#### Response

```json
{
  "key": "value"
}
```

#### Response Codes

- `200 OK`: Request successful.
- `400 Bad Request`: Invalid request parameters.
- `401 Unauthorized`: Authentication failure.
- `404 Not Found`: Resource not found.

### `POST /endpoint`

Description of what this endpoint does.

#### Parameters

- `param1`: Description of parameter 1.
- `param2`: Description of parameter 2.

#### Request Example

```http
POST /endpoint HTTP/1.1
Host: api.example.com
Content-Type: application/json

{
  "key": "value"
}
```

#### Response

```json
{
  "key": "value"
}
```

#### Response Codes

- `201 Created`: Resource created successfully.
- `400 Bad Request`: Invalid request parameters.
- `401 Unauthorized`: Authentication failure.
- `403 Forbidden`: User doesn't have permission.
- `500 Internal Server Error`: Server error.

### `DELETE /endpoint`

Description of what this endpoint does.

#### Parameters

- `param1`: Description of parameter 1.
- `param2`: Description of parameter 2.

#### Request Example

```http
POST /endpoint HTTP/1.1
Host: api.example.com
Content-Type: application/json

{
  "key": "value"
}
```

#### Response

```json
{
  "key": "value"
}
```

#### Response Codes

- `201 Created`: Resource created successfully.
- `400 Bad Request`: Invalid request parameters.
- `401 Unauthorized`: Authentication failure.
- `403 Forbidden`: User doesn't have permission.
- `500 Internal Server Error`: Server error.

## Error Handling

Describe common error responses and how to handle them.


## Versioning

Explain how versioning is handled, if applicable.

## Additional Notes

Any additional notes or information can be provided here.

