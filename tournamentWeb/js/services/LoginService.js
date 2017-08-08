angular.module("app")

.factory("LoginService", function($http){

  var url = "http://localhost:8080/user?login=";

  var service = {

    LogIn : function(user){
      return $http.get(url+user.login);
    }

  }
  return service;
})
