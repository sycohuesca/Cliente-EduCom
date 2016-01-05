'use strict';

describe('Controller: PanelgruposCtrl', function () {

  // load the controller's module
  beforeEach(module('educomApp'));

  var PanelgruposCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PanelgruposCtrl = $controller('PanelgruposCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));


});
