var putRequest = require('node-canvas-api/src/internal/put');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Change user password.
 * @param {Number} accountId is user account id
 * @param {Number} loginId is user login id
 * @param {Object} body is the post data
 * @return {Promise} An object
 */

function changepassword(accountId, loginId, body) {
    return putRequest(canvasDomain + `/accounts/${accountId}/logins/${loginId}`, body);
}

module.exports = changepassword;