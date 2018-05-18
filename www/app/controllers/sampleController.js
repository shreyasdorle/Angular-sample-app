'use strict';

app.controller('sampleController', function($scope, $http, sampleService) {
	$scope.cart = [];

	$scope.addToCart = function(id){
		var item = sampleService.getProductDetails($scope.data, id);
		if(! item.quantity){
			item.quantity = 1;
		}
		if(sampleService.isProductInCart($scope.cart, id)){
			$scope.cart = sampleService.removeFromCartUsingId($scope.cart, id);
			item.quantity++;
		}
		$scope.cart.push(item);
		
	};

	$scope.removeFromCart = function(id){
		var item = sampleService.getProductDetails($scope.data, id);
		if(!item || !item.hasOwnProperty('quantity')){
			return;
		}

		if(sampleService.isProductInCart($scope.cart, id)){
			if(item.quantity === 1){
				$scope.cart = sampleService.removeFromCartUsingId($scope.cart, id);
			}else{
				$scope.cart = sampleService.removeFromCartUsingId($scope.cart, id);
				item.quantity--;
				$scope.cart.push(item);
			}
			return $scope.cart;
		}

	};


	// Get data from API
	sampleService.getInventory()
	.then(function(result){
		$scope.data = result;
	});

});