'use strict';

app.service('sampleService', function ($http, $q) {
    this.getCustomers = function () {
        return customers;
    };

    this.getCustomerFromApi = function(){
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://jsonplaceholder.typicode.com/posts'
        })
        .success(deferred.resolve)
        .error(deferred.resolve);
        return deferred.promise;
    };

    this.postCustomer = function(data){
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: 'http://jsonplaceholder.typicode.com/posts',
            data: {
                'id': data.custId,
                'title': data.custTitle
            }
        })
        .success(deferred.resolve)
        .error(deferred.resolve);
        return deferred.promise;
    };

    var customers = [
    	{
    		'id': 1,
    		'name': 'Shreyas'
    	},
    	{
    		'id': 2,
    		'name': 'Champ'
    	}
    ];

});