var putRequest = require('node-canvas-api/src/internal/put');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Create a new user user.
 * @param {Number} body is the post data
 * @return {Promise} An object
 */

function updateLogin(account_id,login_id,body) {
    return putRequest(canvasDomain + `/accounts/${account_id}/logins/${login_id}`, body);
}
module.exports = updateLogin;