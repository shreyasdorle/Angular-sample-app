'use strict';

module.exports = function(grunt) {
  grunt.config.set('sass', {
   sass: {
		options: {
			sourceMap: true
		},
		files: {
			"www/assets/css/main.min.css" : "**/assets/scss/main.scss"
		}
   }

  });

  grunt.loadNpmTasks('grunt-sass');
};
