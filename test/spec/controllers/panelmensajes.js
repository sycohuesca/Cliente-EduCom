'use strict';

describe('Controller: PanelmensajesCtrl', function () {

  // load the controller's module
  beforeEach(module('educomApp'));

  var PanelmensajesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PanelmensajesCtrl = $controller('PanelmensajesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
