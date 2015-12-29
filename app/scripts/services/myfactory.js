'use strict';

/**
 * @ngdoc service
 * @name educomApp.myFactory
 * @description
 * # myFactory
 * Factory in the educomApp.
 */
angular.module('educomApp')
    .factory('myFactory', function () {

        return {
            usuario: "",
            miembrosUsuario: "",
            miembros: "",
            grupoActivo: "",
            mensaje: "",
            tipo: "",
            responsable: ""
        };
    });
