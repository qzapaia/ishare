angular.module('subModule', [])
	.factory('searchMeli', function($http) {
	   return {
	   		search:function(value,cb){
		   		$http.get('https://api.mercadolibre.com/sites/MLA/search?q='+value).then(function(res){
		            cb(res.data);
		        })
	   		}
	   }
	});