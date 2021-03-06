app
.factory('Trade', function($rootScope, $http, urls) {
  var Trade = {};

  Trade.createTrade = function(tradeData) {
    return $http.post(urls.apiUrl + '/trades', tradeData);
  };
  Trade.getInitiatedTrades = function(activeUser) {
    return $http.get(urls.apiUrl + '/trades/initiated/' + activeUser)
  }
  Trade.getRequestedTrades = function(activeUser) {
    return $http.get(urls.apiUrl + '/trades/requested/' + activeUser)
  }
  Trade.removeTrade = function(deniedTrade) {
    return $http.patch(urls.apiUrl + '/trades/remove/' + deniedTrade._id)
  }
  Trade.acceptTrade = function(acceptedTrade) {
    return $http.patch(urls.apiUrl + '/trades/accept/' + acceptedTrade._id)
  }

  return Trade;
});
