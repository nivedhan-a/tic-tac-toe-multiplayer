// socket.js
/*import io from 'socket.io-client';

// Create a singleton socket instance
//const URL = 'http://localhost:3001';
const URL = 'https://universal-checker-hourglass.glitch.me';
const socket = io(URL);
// socket.js
*/

import io from 'socket.io-client';

// Create a singleton socket instance
//const URL = 'http://localhost:3001';
const URL = 'https://universal-checker-hourglass.glitch.me';
const socket = io(URL, {
  extraHeaders: {
    "User-Agent": "Custom Client"
  }
});

export default socket;
export default socket;
