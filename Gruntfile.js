module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'lib/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', 'Info screen', function () {
    grunt.log.subhead('### grunt tasks:\n');
    grunt.log.writeln('  grunt jshint');
    grunt.log.writeln('');
  });
};
