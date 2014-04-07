module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'lib/*.js',
        '<%= nodeunit.test %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    nodeunit: {
      options: {
        reporter: 'verbose'
      },
      test: ['test/*_test.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('travis', ['jshint', 'nodeunit']);

  grunt.registerTask('default', 'Info screen', function () {
    grunt.log.subhead('### grunt tasks:\n');
    grunt.log.writeln('  grunt jshint         js linting');
    grunt.log.writeln('  grunt nodeunit       run test suite');
    grunt.log.writeln('');
    grunt.log.writeln('  grunt travis         runs jshint and nodeunit tasks');
    grunt.log.writeln('');
  });
};
