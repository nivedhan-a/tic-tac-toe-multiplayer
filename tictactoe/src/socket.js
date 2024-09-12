// socket.js
import io from 'socket.io-client';

// Create a singleton socket instance
//const URL = 'http://localhost:3001';
const URL = 'https://tic-tac-toe-multiplayer-api.vercel.app';
const socket = io(URL);

export default socket;
