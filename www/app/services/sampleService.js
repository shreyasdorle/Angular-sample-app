'use strict';

app.service('sampleService', function ($http, $q) {
    this.getInventory = function(){
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://demo7687977.mockable.io/inventory'
        })
        .success(deferred.resolve)
        .error(deferred.resolve);
        return deferred.promise;
    };
    this.getProductDetails = function(data, id){
        for (var i = 0; i < data.length; i++){
            if (data[i].id && data[i].id === id) { 
                return data[i];
            }
        }
    };

    this.isProductInCart = function(data, id){
        for (var i = 0; i < data.length; i++){
            if (data[i].id && data[i].id === id) { 
                return true;
            }
        }
        return false;
    };

    this.removeFromCartUsingId = function(data, id){
        for (var i = 0; i < data.length; i++){
            if (data[i].id && data[i].id === id) { 
                data.splice(i, 1);
                break;
            }
        }
        return data;
    };

});