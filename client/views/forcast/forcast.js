/* jshint camelcase:false */

(function(){
  'use strict';

  angular.module('weather')
  .controller('ForcastController', ['$scope', 'wu', function($scope, wu){
    $scope.title = '10 Day Forcast';

    $scope.getForcast = function(){
      wu.getForcast($scope.zip).then(function(response){
        $scope.forecasts.simpleforcast.forecastday
    };

  }]);
})();
