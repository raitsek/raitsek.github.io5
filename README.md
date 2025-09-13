## Example Usage

Here's an example of how to use the `MortalSoftClient` module to interact with the MortalSoft API:

```javascript
const MortalSoftClient = require('mortalsoft-client');

// Replace 'your_base_url' and 'your_token' with the actual values
const baseUrl = 'https://api-prod.mortalsoft.online';
const token = 'your_token';

const client = new MortalSoftClient(baseUrl, token);

(async () => {
  try {
    // List all games
    const games = await client.listGames();
    console.log('List of games:', games);

    // Get the balance for a user with the identifier 'user123'
    const identifier = 'user123';
    const balance = await client.getBalance(identifier);
    console.log('Balance for', identifier, ':', balance);

    // Change the balance for the user 'user123' to 500
    const newBalance = await client.changeBalance(identifier, 500);
    console.log('Updated balance for', identifier, ':', newBalance);

    // Create a new session for the user 'user123'
    const sessionToken = await client.createSession(identifier);
    console.log('Session token for', identifier, ':', sessionToken);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();
```

## API Reference

### `new MortalSoftClient(baseUrl, token)`

Creates a new instance of the MortalSoftClient.

- `baseUrl` (string): The base URL of the MortalSoft API.
- `token` (string): The API token for authentication.

### `client.listGames(queryParams)`

Retrieves the list of games from the MortalSoft API.

- `queryParams` (object, optional): Query parameters to filter the games (e.g., `{ id: 1, name: 'Game Name' }`).

Returns an array of games.

### `client.getBalance(identifier)`

Retrieves the balance for a user with the given identifier.

- `identifier` (string): The user identifier.

Returns the balance of the user.

### `client.changeBalance(identifier, amount)`

Changes the balance for a user with the given identifier.

- `identifier` (string): The user identifier.
- `amount` (number): The new balance amount.

### `client.createSession(identifier)`

Creates a new session for a user with the given identifier.

- `identifier` (string): The user identifier.

Returns the session token.