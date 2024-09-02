// socket.js
import io from 'socket.io-client';

// Create a singleton socket instance
//const URL = 'http://localhost:3001'; // Adjust as needed
const URL = 'https://tic-tac-toe-multiplayer-pied.vercel.app'; // Adjust as needed
const socket = io(URL);

export default socket;
