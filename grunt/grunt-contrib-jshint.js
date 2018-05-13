'use strict';

module.exports = function(grunt) {
	grunt.config.set('jshint', {
		// Take the values which was defined in the .jshintrc file
		// Check for all the js files in www/app folder
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
      		files: {
      			
        		src: ['www/app/**/*.js']
      		},
		}
	});

grunt.loadNpmTasks('grunt-contrib-jshint');

}