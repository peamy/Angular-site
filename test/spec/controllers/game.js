'use strict';

describe('Controller: GameCtrl', function () {

  beforeEach(module('yoApplicationApp'));
  var GameCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameCtrl = $controller('GameCtrl', {
      $scope: scope
    });
  }));

  it('should check if awesomethings is 3 long', function () {
    expect(GameCtrl.awesomeThings.length).toBe(3);
  });

  it('should check if the difficulties are all loaded', function () {
    expect(scope.difficulties.length).toBe(3);
  });

  //since we get a value between 1 and 1 it should be 1
  it('Should see if randomNumber gives a random number', function() {
    var number = scope.randomNumber(1);
    expect(number).toBe(1);
  });

  it('Should see if randomNumber gives a random number within range', function() {
      var number = scope.randomNumber(100);
      expect(number).toBeLessThan(101);
      expect(number).toBeGreaterThan(0);
  });

  it('should see the difficulty', function () {
    expect(scope.difficulty).toBe("easy");
  });

  it('should change the difficulty', function () {
    //scope.setDifficulty("hard");
    scope.difficulty="hard";
    expect(scope.difficulty).toBe("hard");
  });

  it('should be inGame after start() is called', function () {
    expect(scope.inGame).toBe(false);
    scope.start();
    expect(scope.inGame).toBe(true);
  });

  it('should change the numberToGuess after starting a game', function () {
    expect(scope.numberToGuess).toBe(0);
    //scope.setDifficulty("easy");
    scope.difficulty="easy";
    scope.start();
    expect(scope.numberToGuess).toBeLessThan(51);
    expect(scope.numberToGuess).toBeGreaterThan(0);
  });

});
