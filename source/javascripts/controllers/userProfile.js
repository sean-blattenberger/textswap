app
.controller('profileCtrl', function($scope, $state, $stateParams, User) {
  $scope.user = {};

  User.getUser($stateParams.username)
    .success(function(data) {
      $scope.user = data;
    })
    .catch(function(error) {
      console.log(error);
    });
});
