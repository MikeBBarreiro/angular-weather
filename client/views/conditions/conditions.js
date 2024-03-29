/* jshint camelcase:false */

(function(){
  'use strict';

  angular.module('weather')
  .controller('ConditionsController', ['$scope', 'wu', function($scope, wu){
    $scope.title = 'Conditions';

    $scope.getConditions = function(){
      wu.getConditions($scope.zip).then(function(response){
        $scope.conditions = response.data.current_observation;
//this is the same but a less commpressed code
       //$scope.city = response.data.display_location.full;
      });
    };
  }]);
})();

