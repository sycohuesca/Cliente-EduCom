'use strict';

/**
 * @ngdoc function
 * @name educomApp.controller:AdminusuariosCtrl
 * @description
 * # AdminusuariosCtrl
 * Controller of the educomApp
 */
angular.module('educomApp')
  .controller('AdminusuariosCtrl', function (myFactory, myService) {
   var model = this;
    // Variables
    model.nombre = "";
    model.user = "";

    myService.getUsuariosByCentro(myFactory.usuario.idCentro.idCentro).success(function (data) {
        model.usuariosSelect = data;
    });


    // Funciones

    model.buscarLogin = buscarLogin;
    model.reset = reset;
    model.nuevo = nuevo;

    function buscarLogin() {
        myService.getLogin(model.usuarioReset).success(function (data) {
            model.nombre = data.idUsuario.nombre;
            model.user = data.user;

        });
    }
    function reset() {
        myService.resetPassword(model.usuarioReset).success(function () {
            alert("Contraseña reseteada y enviado un nuevo correo al usuario");
        });
   }
    ;
    function nuevo() {
        var newUsuario = {nombre: model.nombre, idCentro: myFactory.usuario.idCentro};
        var newLogin = {idUsuario: newUsuario, user: model.user};
        myService.newUsuario(newUsuario).success(function () {
            myService.newLogin(newLogin).success(function () {
                alert("El usuario ha sido creado y enviado un email a su correo con el password de acceso.");
               location.reload();
            });
        });
    }
  });
