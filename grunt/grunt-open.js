'use strict';

module.exports = function(grunt) {
	grunt.config.set('open', {
		dev: {
			url: 'http://localhost:<%= connect.connect.server.options.port %>',
			app: 'Google Chrome'
		}
	});

	grunt.loadNpmTasks('grunt-open');
}