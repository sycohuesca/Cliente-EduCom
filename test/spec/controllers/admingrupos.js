'use strict';

describe('Controller: AdmingruposCtrl', function () {

  // load the controller's module
  beforeEach(module('educomApp'));

  var AdmingruposCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdmingruposCtrl = $controller('AdmingruposCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));


});
