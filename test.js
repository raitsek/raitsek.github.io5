const MortalSoftClient = require('./index');

const baseUrl = 'https://api-prod.mortalsoft.online';
const token = 'your_token';

const client = new MortalSoftClient(baseUrl, token);

// Example usage
(async () => {
  try {
    // Example 1: List Games
    const responseGames = await client.listGames();
    console.log('List of Games:', responseGames);

    // Example 2: Get Balance
    const identifier = 'user123'; // Replace 'user123' with the actual user identifier
    const responseBalance = await client.getBalance(identifier);
    console.log('User Balance:', responseBalance);

    // Example 3: Change Balance
    const amount = 50.00; // Replace 50.00 with the desired amount
    const responseChangeBalance = await client.changeBalance(identifier, amount);
    console.log('Balance changed successfully:', responseChangeBalance);

    // Example 4: Create Session
    const responseCreateSession = await client.createSession(identifier);
    console.log('User session created. JWT Token:', responseCreateSession.token);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();