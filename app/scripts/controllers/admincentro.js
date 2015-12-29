'use strict';

/**
 * @ngdoc function
 * @name educomApp.controller:AdmincentroCtrl
 * @description
 * # AdmincentroCtrl
 * Controller of the educomApp
 */
angular.module('educomApp')
    .controller('AdmincentroCtrl', function (myFactory, myService) {
        var model = this;
        var centro = myFactory.usuario.idCentro;
        // Variables
        model.nombre = centro.nombre;
        model.direccion = centro.direccion;
        model.descripcion = centro.descripcion;

        model.guardar = guardar;

        function guardar() {
            myFactory.usuario.idCentro.nombre = model.nombre;
            myFactory.usuario.idCentro.direccion = model.direccion;
            myFactory.usuario.idCentro.descripcion = model.descripcion;
            myService.setCentro(myFactory.usuario.idCentro).success(function () {
                alert("Centro modificado.")
                location.reload();
            });


        }
    });
