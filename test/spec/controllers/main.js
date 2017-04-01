'use strict';

describe('Controller: MainCtrl', function () {

  beforeEach(module('yoApplicationApp'));

  var MainCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

/*
*These tests were made to see if I can access a controller through tests.
*/
  it('should be able to access the list', function () {
    expect(MainCtrl.awesomeThings.length).toBe(3);
  });

  it('should be able to access the scope', function () {
    var scopeHello = scope.hello;
    expect(scopeHello).toBe("hello all!");
  });

});
