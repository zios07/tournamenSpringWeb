
angular.module('app', [])

.controller('loginController', function($window, LoginService){

  this.LogIn = function(){

    if(angular.isDefined(this.user)){
      LoginService.LogIn(this.user).then(function(response){
        if(response.data=="Admin"){
          $window.location.href = "/ihm/home.html";
        }
      })

    }

  }
})
.config(function($locationProvider){

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
})
