angular.module("players")

.factory("PlayerService", function($http){

  var url = "http://localhost:8080/players";

  var service = {

    getAllPlayers : function(){
      return $http.get(url);
    },

    deletePlayer : function(playerID){
      return $http.delete(url+"/delete/"+playerID);
    }
  }
  return service;
})
