'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('yoApplicationApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should check if awesomethings is 3 long', function () {
    expect(MainCtrl.awesomeThings.length).toBe(3);
  });

  it('should be able to access the scope', function () {
    var scopeHello = scope.hello;
    expect(scopeHello).toBe("hello all!");
  });

});
