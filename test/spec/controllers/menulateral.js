'use strict';

describe('Controller: MenulateralCtrl', function () {

  // load the controller's module
  beforeEach(module('educomApp'));

  var MenulateralCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenulateralCtrl = $controller('MenulateralCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));


});
