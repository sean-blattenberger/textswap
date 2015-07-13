app.controller('tradeCtrl', function($scope, $rootScope, $state, $stateParams, Book, User, Trade) {
  if (!$rootScope.currentUser || !$rootScope.currentUserData) {
    $state.go('home');
  }
  $scope.requestedBook = {};
  $scope.currentUserBooks = [];
  $scope.showBookList = true;

  Book.getBook($stateParams.bookId)
    .success(function(data) {
      $scope.requestedBook = data;
    })
    .catch(function(error) {
      console.log(error);
    })
  Book.getUsersBooks($rootScope.currentUserData.twitter.username)
    .success(function(data) {
      $scope.currentUserBooks = data;
    })
    .catch(function(error) {
      console.log(error);
    });
  $scope.targetBook = function (book) {
    $scope.targetedBook = book;
    $scope.showBookList = false;
  }
  $scope.createTrade = function() {
    console.log("Starting trade");
    if (!$scope.showBookList) {
      $scope.tradeData = {
        tradeInitiator: $rootScope.currentUserData.twitter.username,
        tradeReceiver: $scope.requestedBook.ownerUsername,
        initiatorBookID: $scope.targetedBook._id,
        initiatorBookTitle: $scope.targetedBook.title,
        receiverBookID: $scope.requestedBook._id,
        receiverBookTitle: $scope.requestedBook.title
      };
      Trade.createTrade($scope.tradeData)
      .success(function(data) {
        console.log(data)
        console.log($rootScope.currentUserData.twitter.username);
        $state.go('showUser', {username: $rootScope.currentUserData.twitter.username});
      })
      .catch(function(error) {
        console.log(error);
      })
    }
  };
});
