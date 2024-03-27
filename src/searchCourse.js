var fetch = require('node-canvas-api/src/internal/fetch');

var buildOptions = require('node-canvas-api/src/internal/util');
var getOptions = require('./internal/getOptions');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * filter courses
 * @param {Object} search the course filter option.
 * @param {Object} order an object to order the course
 * @param {Number} limit how many records would be returned
 * 
 * @return {Promise} A promise that resolves to a Course object: https://canvas.instructure.com/doc/api/courses.html#Course
*/

function searchCourse(courseTitle) {
  const options = [
    getOptions.courses.include.course_image,
    getOptions.courses.include.public_description,
    getOptions.courses.include.banner_image,
    getOptions.courses.include.sections,
    // `per_page=${limit}`,
    `search_by=name`,
    `search_term=${courseTitle}`,
    `sort=name`,
    `order=asc`
  ];

  return fetch(canvasDomain + `/accounts/1/courses?` + buildOptions(options));
}
module.exports = searchCourse;