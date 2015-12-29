'use strict';

describe('Controller: AdmincentroCtrl', function () {

    // load the controller's module
    beforeEach(module('educomApp'));

    var AdmincentroCtrl,
        scope, miFactory;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        AdmincentroCtrl = $controller('AdmincentroCtrl', {
            $scope: scope,
            miFactory: {
                usuario: {
                    idCentro: {
                        idCentro: 1,
                        nombre: "Los enlaces",
                        descripcion: "Instituto",
                        direccion: "av goya"
                    }
                }
            }


        });
    }));
    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.nombre).toBe("Los enlaces");
    });

});
