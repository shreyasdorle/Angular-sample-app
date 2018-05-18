'use strict';

var app = angular.module('app' , ['ngRoute']);

app.config (['$routeProvider', function($routeProvider) {
	$routeProvider.
		when ('/inventory', {
			templateUrl: 'app/templates/inventory.html',
			controller: 'sampleController'
			}
		).
		when ('/shoppingcart', {
			templateUrl: 'app/templates/shoppingCartManager.html',
			controller: 'sampleController'
			}
		).otherwise({ redirectTo: '/' });
}]);