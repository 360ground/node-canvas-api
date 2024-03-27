var fetchAll = require('node-canvas-api/src/internal/fetchAll');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Retrieves all courses in a deptId
 * @param {Number} courseId the course id.
 * @return {Promise} A promise that resolves to a Course object: https://canvas.instructure.com/doc/api/courses.html#Course
*/

function getCoursesBulkProgress(courseId) {
  return fetchAll(canvasDomain + `/courses/${courseId}/bulk_user_progress`);
}
module.exports = getCoursesBulkProgress;