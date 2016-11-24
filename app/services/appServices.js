app.factory('productService', function() {      
   var factory = {};   
   factory.product = function(a, b) { 
      return a * b  
   } 
   return factory; 
});
 

app.factory('sumService', function() {      
   var factory = {};   
   factory.sum = function(a, b, c) { 
      return a + b + c
   } 
   return factory; 
});

app.service('CalcService', function(MathService){ 
	this.square = function(a) {  
            return MathService.multiply(a,a);  
    } 
});  

app.factory('StoreService', function () {
        var storedObject;
        return {
            set: function (o) {
                this.storedObject = o;
            },
            get: function () {
                return this.storedObject;
            }
        };
});
 

/*
app.factory('postService', function($http, $log) {      
  return {
    httpPostMethod: function(methodType, url, data ) {
      return $http({
        method: methodType,
        url: url,
        data:  data
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available  
         return response;
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.  
          return response;
      });   //1. this returns promise
    }
  };  
});


app.factory('getService', function($http, $log) {      
  return {
    httpPostMethod: function(methodType, url) {
      return $http({
        method: methodType,
        url: url
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available  
         return response;
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.  
          return response;
      });   //1. this returns promise
    }
  };  
});

*/

 