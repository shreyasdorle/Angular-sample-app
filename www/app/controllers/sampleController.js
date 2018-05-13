'use strict';

app.controller('sampleController', function($scope, $http, sampleService) {
	$scope.text = "Hello World!!!!";

	$scope.customers = sampleService.getCustomers();

	$scope.postCustomer = function(){
		sampleService.postCustomer($scope).then(function(result){
			console.log('POSTED', result);
			$scope.data.push(result);
		});
	};
	// Get data from API
	sampleService.getCustomerFromApi()
	.then(function(result){
		$scope.data = result;
	});
});