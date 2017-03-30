'use strict';

/**
 * @ngdoc function
 * @name yoApplicationApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoApplicationApp
 */
angular.module('yoApplicationApp')
  .controller('GameCtrl', function ($rootScope, $scope, playerService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.playerList = playerService.allPlayers();

    $scope.inGame = false;
    $scope.noPlayerSelected=true;

    $scope.difficulty = "easy";

    $scope.difficulties = ["easy", "medium", "hard"];

    $scope.playerInfoSelected = function(){
      $scope.playerList.forEach(function(e, i) {
        if(e.email === $scope.selectedPlayerEmail)
           $scope.selectedPlayer = e;
      })
    }

    $scope.numberToGuess = 0;

    $scope.randomNumber = function(maxSize)
    {
      return Math.floor(Math.random() * (maxSize-1) + 1);
    }

    $scope.setDifficulty = function(diff)
    {
      if(diff !== undefined && diff.length > 0)
      {
        $scope.difficulty = diff;
      }
      else {
        diff="easy";
      }
    }

    $scope.start = function()
    {
      $scope.playerInfoSelected();
      if($scope.difficulty === "easy")
      {
        $scope.numberToGuess = $scope.randomNumber(50);
        $scope.youAreGuessing = "You are guessing a number between 1 and 50";
      }
      else if($scope.difficulty === "medium")
      {
        $scope.numberToGuess = $scope.randomNumber(100);
        $scope.youAreGuessing = "You are guessing a number between 1 and 100";
      }
      else if($scope.difficulty === "hard"){
        $scope.numberToGuess = $scope.randomNumber(500);
        $scope.youAreGuessing = "You are guessing a number between 1 and 500";
      }
      $scope.inGame = true;
      $scope.amountOfGuesses=0;
      $scope.guessMessage = "";
    }

    $scope.guess = function()
    {
      if($scope.inGame && $scope.guessingNumber !== undefined && $scope.guessingNumber>0)
      {
        $scope.amountOfGuesses=$scope.amountOfGuesses+1;

        if($scope.guessingNumber > $scope.numberToGuess)
        {
          $scope.guessMessage = $scope.guessingNumber + " was too high.";
        }
        else if($scope.guessingNumber < $scope.numberToGuess)
        {
          $scope.guessMessage = $scope.guessingNumber + " was too low.";
        }
        else {
          $scope.guessMessage = $scope.guessingNumber + " was correct!";
          $scope.endGame();
        }
        $scope.guessingNumber = "";
      }
    }

    $scope.endGame = function()
    {
      playerService.addScore($scope.selectedPlayer,
        {difficulty: $scope.difficulty,
           amountOfGuesses: $scope.amountOfGuesses,
           numberToGuess: $scope.numberToGuess});
      $scope.inGame = false;
    }

    $scope.playerInfoSelected = function()
    {
      $scope.playerList.forEach(function(e, i) {
        if(e.email === $scope.selectedPlayerEmail)
        {
          $scope.selectedPlayer = e;
         }
      })
    }

  });
