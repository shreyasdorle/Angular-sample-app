'use strict';

module.exports = function(grunt) {
	grunt.config.set('watch', {
		// Watch all the js , html and css files
		scripts: {
			files: ['www/app/**/*.js'],
			tasks: ['jshint' , 'injector', 'notify:build' ],
			options: {
				spawn: false
			}
		},
		template: {
			files: ['www/*.html', 'www/app/templates/*.html'],
			tasks: [],
			options: {
				spawn: false
			}
		},
		css: {
			files: ['www/assets/scss/*.scss'],
			tasks: ['sass' , 'injector', 'notify:css'],
			options: {
				spawn: false
			}
		}		
	})
	
	grunt.loadNpmTasks('grunt-contrib-watch');
};
