'use strict';

describe('Controller: AdmincentroCtrl', function () {

    // load the controller's module
    beforeEach(module('educomApp'));

    var AdmincentroCtrl, myFactory,
        scope;
    myFactory = {};
    myFactory.usuario = {
        idCentro: {
            nombre: "Los Enlaces",
            descripcion: "Instituto",
            direccion: "av Goya 10"
        }
    };

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        AdmincentroCtrl = $controller('AdmincentroCtrl', {
            $scope: scope,
            myFactory: myFactory

            // place here mocked dependencies
        });
    }));
    it('Comprobar que se carga el nombre del centro', function () {
        expect(AdmincentroCtrl.nombre).toBe("Los Enlaces");
    });
    it('Comprobar que se carga la direccion del centro', function () {
        expect(AdmincentroCtrl.direccion).toBe("av Goya 10");
    });
    it('Comprobar que se carga la descripcion del centro', function () {
        expect(AdmincentroCtrl.descripcion).toBe("Instituto");
    });

});
