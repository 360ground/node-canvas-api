var fetchAll = require('node-canvas-api/src/internal/fetchAll');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Retrieves all quiz in courses.
 * @param {Number} courseId the course id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Quiz submission objects: https://canvas.instructure.com/doc/api/submissions.html
 */

function getQuizzes(courseId) {
  return fetchAll(canvasDomain + `/courses/${courseId}/quizzes`);
}
module.exports = getQuizzes;