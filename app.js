
var app = angular.module("ajaxApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'FirstController',
    })
    .when('/results', {
        templateUrl: 'templates/results.html',
        controller: 'ResultsController'
    });
});