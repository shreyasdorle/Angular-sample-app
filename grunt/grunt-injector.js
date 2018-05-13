'use strict';
//Used the function to replace the unwanted prefix '/www/' which causes error.
//Inject library according to the prioriteis needed to the apllication.
var ext = function(filePath){
	var fileExtension = filePath.split('.');
	return fileExtension[fileExtension.length-1];
}

module.exports = function(grunt) {
	grunt.config.set('injector',{
		injector: {
			options: {
				transform: function(filePath) {
							var filePathName = filePath.replace('/www/' , '');
							var extension = ext (filePath);

							if (extension === 'js') {
								return '<script rel="javascript" src="' + filePathName + '"></script>'
							} else if (extension === 'css') {
								return '<link rel="stylesheet" href="' + filePathName +  '"/>'
							}
				}
			},
			files: {
				'www/index.html' : [
											'www/assets/js/jquery/*.js' , 
											'www/assets/js/angular-1.5.9/angular.min.js' ,
											'www/assets/js/angular-1.5.9/angular-route.min.js' ,
											'www/app/app.js',
											'www/app/**/*.js',
											'www/assets/css/main.min.css'
									   ]
			}
		}
	});
	grunt.loadNpmTasks('grunt-injector');

};