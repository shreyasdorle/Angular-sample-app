'use strict';

var app = angular.module('app' , ['ngRoute']);

app.config (['$routeProvider', function($routeProvider) {
	$routeProvider.
		when ('/view1', {
			templateUrl: 'app/templates/view1.html',
			controller: 'sampleController'
			}
		).
		when ('/view2', {
			templateUrl: 'app/templates/view2.html',
			controller: 'sampleController'
			}
		).otherwise({ redirectTo: '/view1' });
}]);