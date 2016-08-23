/* global angular */

(function() {
  "use strict";
  angular.module("app").controller("pagesCtrl", function($scope, $http) {

    $scope.message = "Helloooooooooo!!!";

    $http.get("https://montanaflynn-fifa-world-cup.p.mashape.com/teams?mashape-key=95bCsuiQKCmshu20QJmBV42trRx9p12P1APjsneR2iJksGTGvQ").then(function(response){
      $scope.teams = response.data;
    });

    $scope.toggleAbbreviation = function(inputTeam) {
      console.log(inputTeam);
      inputTeam.showAbbreviation = !inputTeam.showAbbreviation;
    };

  });
}());