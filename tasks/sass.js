var sass = require("node-sass");

/**
 * The task for transpiling Sass to CSS.
 * Refer to https://github.com/sindresorhus/grunt-sass
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-sass");

  var config = {
    options: {
      implementation: sass,
      sourceMap: true,
    },
    build: {
      files: [
        {
          src: "<%= srcPath %>/general.sass",
          dest: "<%= distPath %>/general.css",
        },
        {
          src: "<%= srcPath %>/daily.sass",
          dest: "<%= distPath %>/daily.css",
        },
        {
          src: "<%= srcPath %>/repo.sass",
          dest: "<%= distPath %>/repo.css",
        },
        {
          src: "<%= srcPath %>/meeting.sass",
          dest: "<%= distPath %>/meeting.css",
        },
        {
          src: "<%= srcPath %>/vocab.sass",
          dest: "<%= distPath %>/vocab.css",
        },
        {
          src: "<%= srcPath %>/components.sass",
          dest: "<%= distPath %>/components.css",
        },
      ],
    },
  };

  grunt.config("sass", config);
};
