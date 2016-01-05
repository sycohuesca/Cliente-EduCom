'use strict';

describe('Controller: AdminusuariosCtrl', function () {

  // load the controller's module
  beforeEach(module('educomApp'));

  var AdminusuariosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminusuariosCtrl = $controller('AdminusuariosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));


});
