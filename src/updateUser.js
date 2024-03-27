var putRequest = require('node-canvas-api/src/internal/put');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Create a new user user.
 * @param {Number} body is the post data
 * @return {Promise} An object
 */

function updateUser(user_id,body) {
    return putRequest(canvasDomain + `/users/${user_id}`, body);
}
module.exports = updateUser;