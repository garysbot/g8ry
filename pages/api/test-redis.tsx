// // pages/api/test-redis.tsx
// import { createClient } from 'redis';

// export default async function handler(req, res) {
//   // Create a new Redis client using the provided credentials
//   const client = createClient({
//     url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
//     password: process.env.REDIS_PASSWORD,
//   });

//   // Listen for the "error" event to log any errors
//   client.on('error', (err) => console.log('Redis Client Error', err));

//   try {
//     // Connect to the Redis server
//     await client.connect();

//     // Set a test key-value pair
//     await client.set('testKey', 'testValue');

//     // Retrieve the value for the test key
//     const value = await client.get('testKey');

//     // Disconnect the client
//     await client.quit();

//     // Send back a JSON response with the retrieved value
//     res.status(200).json({ testKey: value });
//   } catch (error) {
//     // If an error occurs, log it and send back a server error response
//     console.error('Redis Handler Error', error);
//     res.status(500).json({ error: 'Error connecting to Redis', details: error.message });
//   }
// }
