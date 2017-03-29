'use strict';

/**
 * @ngdoc overview
 * @name yoApplicationApp
 * @description
 * # yoApplicationApp
 *
 * Main module of the application.
 */
angular
  .module('yoApplicationApp', [
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/game', {
        templateUrl: 'views/game.html',
        controller: 'GameCtrl',
        controllerAs: 'game'
      })
      .when('/goals', {
        templateUrl: 'views/goals.html',
        controller: 'GoalsCtrl',
        controllerAs: 'goals'
      })
      .when('/players', {
        templateUrl: 'views/players.html',
        controller: 'PlayersCtrl',
        controllerAs: 'players'
      })
      .when('/player/:playerEmail', {
        templateUrl: 'views/player.html',
        controller: 'PlayerCtrl',
        controllerAs: 'player'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
