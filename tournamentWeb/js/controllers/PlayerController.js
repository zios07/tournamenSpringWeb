angular.module("players", [])

.controller('PlayerController', function(PlayerService, $scope){

    $scope.editMode = false;
    $scope.deleteMode = false;

    $scope.getAllPlayers = function() {
        PlayerService.getAllPlayers().then(function(response){
        $scope.players = response.data;
        console.log(response);
      })
    }
    // Filling the table
    $scope.getAllPlayers();

    $scope.toggleEditMode = function(){
      $scope.editMode = !$scope.editMode;
    };

    $scope.toggleDeleteMode = function(){
      $scope.deleteMode = !$scope.deleteMode;
    };

    $scope.sayHi = function(){
      alert('hi');
    };

    $scope.delete = function(playerID){
      PlayerService.deletePlayer(playerID).then(function(response){
        alert(response);
      })
      scope.getAllPlayers();
    }
})


.directive('ngConfirmClick', [
        function(){
            return {
                link: function (scope, element, attr) {
                    var msg = "You are about to delete a player ! Are you sure ?";
                    element.bind('click' , function(){
                      if(confirm(msg)) {
                        scope.$eval(attr.deleteConfirmed);
                      } else {
                        alert('Suppression canceled');
                      }
                    })
                }
            };
    }])
