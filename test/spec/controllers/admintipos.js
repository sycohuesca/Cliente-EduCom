'use strict';

describe('Controller: AdmintiposCtrl', function () {

  // load the controller's module
  beforeEach(module('educomApp'));

  var AdmintiposCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdmintiposCtrl = $controller('AdmintiposCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));


});
