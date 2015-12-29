'use strict';

/**
 * @ngdoc function
 * @name educomApp.controller:MenulateralCtrl
 * @description
 * # MenulateralCtrl
 * Controller of the educomApp
 */
angular.module('educomApp')
    .controller('MenulateralCtrl', function ($cookies, $window, myService, myFactory) {
        var model = this;
        model.nombre = "";
        model.centro = "";


        model.salir = salir;
        model.cerrar = function () {
            $('.button-collapse').sideNav('hide');
        }
        model.tipoAdmin = function () {

            if (myFactory.tipo === 1) {
                return true;
            } else {
                return false;
            }
        };

        function salir() {
            $cookies.remove("idUsuario");
            alert("Asta luego " + myFactory.usuario.nombre + ".");
            $window.location.href = "login.html";
        }
        //      $cookies.put("idUsuario",9);
        if ($cookies.get("idUsuario")) {
            var idUsuario = $cookies.get("idUsuario");
            myService.getUsuario(idUsuario).success(function (data) {
                myFactory.usuario = data;
                model.nombre = data.nombre;
                model.centro = data.idCentro.nombre;
                myService.getTiposByUsuario($cookies.get("idUsuario")).success(function (data) {
                    if ($.isEmptyObject(data)) {
                        myFactory.tipo = "4";
                        model.tipo = 4;
                        $window.location.href = "#/home ";
                    } else {
                        model.tipo = data[0].tipoUsuario.idTipoUsuario;
                        myFactory.tipo = data[0].tipoUsuario.idTipoUsuario;
                        $window.location.href = "#/home ";
                    }
                });
            });
        } else {
            $window.location.href = "login.html";
        }
    });
