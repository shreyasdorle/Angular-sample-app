//This is used to connect to the localhost on port 8000
'use strict';

module.exports = function(grunt) {
	grunt.config.set('connect', {
	  connect: {
	  	options: {
	  	 	base: 'www'
	  	},
	  	server: {
	  		options: {
		  		port: 8000,
		  		hostname: '0.0.0.0',
		  		useAvailablePort: false,
		  		open: true
	  		}
	  	}
	  }
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
}