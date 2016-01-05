'use strict';

describe('Controller: PanelusuarioCtrl', function () {

  // load the controller's module
  beforeEach(module('educomApp'));

  var PanelusuarioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PanelusuarioCtrl = $controller('PanelusuarioCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));


});
