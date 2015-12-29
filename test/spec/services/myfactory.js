'use strict';

describe('Service: myFactory', function () {

    // load the service's module
    beforeEach(module('educomApp'));

    // instantiate service
    var myFactory;
    beforeEach(inject(function (_myFactory_) {
        myFactory = _myFactory_;
    }));

    it('Guardar usuario', function () {
        myFactory.usuario = {
            idUsuario: 8,
            nombre: "armando"
        };
        expect(myFactory.usuario.nombre).toBe("armando");
    });
    it('Guardar mensajes', function () {
        myFactory.mensaje = "hola que tal";
        expect(myFactory.mensaje).toBe("hola que tal");
    });

});
