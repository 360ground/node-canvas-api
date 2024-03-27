var fetch = require('node-canvas-api/src/internal/fetch');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Retrieves a user by the user ID
 * @param {Number} userId user ID.
 * @return {Promise} A promise that resolves to a User object: https://canvas.instructure.com/doc/api/users.html#User
 */

function getUserLogin(userId) {
  return fetch(canvasDomain + `/users/${userId}/logins`);
}
module.exports = getUserLogin;