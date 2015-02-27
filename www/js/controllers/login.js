angular.module('starter')
    .controller('LoginController', function($scope,searchMeli) {
        // searchMeli.search('macbook',function(data){
        //     $scope.data = data;
        // })
        $scope.fbLogin = function() {
            openFB.login(
                function(response) {
                    if (response.status === 'connected') {
                        console.log('Facebook login succeeded');
                        $scope.closeLogin();
                    } else {
                        alert('Facebook login failed');
                    }
                }, {
                    scope: 'email,publish_actions'
                });
        }
    });