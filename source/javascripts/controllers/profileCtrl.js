app
.controller('profileCtrl', function($scope, $rootScope, $state, $stateParams, User, Book) {
  $scope.user = {};
  $scope.userBooks = {};

  User.getUser($stateParams.username)
    .success(function(data) {
      $scope.user = data;
    })
    .catch(function(error) {
      console.log(error);
    });

  Book.getUsersBooks($stateParams.username)
    .success(function(data) {
      $scope.userBooks = data;
    })
    .catch(function(error) {
      console.log(error);
    });
  $scope.deleteBook = function (book) {
    Book.deleteBook(book)
    .success(function(data) {
      console.log("book deleted");
    }).catch(function(error) {
      console.log(error);
    });
  }
});