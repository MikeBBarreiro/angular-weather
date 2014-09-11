(function(){
  'use strict';

  angular.module('weather', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/conditions', {templateUrl:'/views/conditions/conditions.html', controller:'ConditionsController'})
    .when('/webcams', {templateUrl:'/views/webcams/webcams.html', controller:'WebcamsController'})
    .when('/forcast', {templateUrl:'/views/forcast/forcast.html', controller:'ForcastController'})
    .otherwise({redirectTo:'/conditions'});
  }])
  .controller('MainController', ['$scope', function($scope){
  }]);
})();

