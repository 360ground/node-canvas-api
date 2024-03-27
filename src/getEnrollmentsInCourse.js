var fetchAll = require('./internal/fetchAll');

var buildOptions = require('./internal/util');

var getOptions = require('./internal/getOptions');

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Retrieves all enrollments in course
 * @param {Number} courseId the course id.
 * @return {Promise} A promise that resolves to a list of Enrollment objects: https://canvas.instructure.com/doc/api/enrollments.html#method.enrollments_api.index
 */

function getEnrollmentsInCourse(courseId) {
  const options = [
    getOptions.users.enrollmentType.student
  ];

  return fetchAll(canvasDomain + `/courses/${courseId}/enrollments?` + buildOptions(options));
}
module.exports = getEnrollmentsInCourse;