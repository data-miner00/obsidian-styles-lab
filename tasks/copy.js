/**
 * The task for copying files.
 * Refer to https://github.com/gruntjs/grunt-contrib-copy
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-copy");

  var config = {
    artifacts: {
      files: [
        {
          cwd: "<%= distPath %>",
          src: ["*.css"],
          dest: "<%= obsPath %>/",
          filter: "isFile",
          expand: true,
        },
      ],
    },
  };

  grunt.config("copy", config);
};
