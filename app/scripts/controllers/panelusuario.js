'use strict';

/**
 * @ngdoc function
 * @name educomApp.controller:PanelusuarioCtrl
 * @description
 * # PanelusuarioCtrl
 * Controller of the educomApp
 */
angular.module('educomApp')
  .controller('PanelusuarioCtrl', function (myFactory, myService) {
   var model = this;
    // variables
    model.nombre = myFactory.usuario.nombre;
    model.tipo="";
    myService.getLogin(myFactory.usuario.idUsuario).success(function (data) {
        model.email = data.user;
    });
    myService.getTiposByUsuario(myFactory.usuario.idUsuario).success(function (data) {
        model.tipos = data;
    });
    model.centro = myFactory.usuario.idCentro.nombre;
    model.direccion = myFactory.usuario.idCentro.direccion;
    model.descripcion = myFactory.usuario.idCentro.descripcion;
    var miembros = myFactory.miembrosUsuario;
    model.inscrito = [];
    model.responsable = [];
    $.each(miembros, function (value) {
        if (miembros[value].responsable) {
            model.responsable.push(miembros[value].grupo);
        }
        else {
            model.inscrito.push(miembros[value].grupo);
        }
    });
    model.passwordViejo = "";
    model.passwordNuevo = "";
    model.passwordNuevo2 = "";


    // funciones
    model.cambiarPassword = cambiarPassword;
    model.guardarCambios = guardarCambios;
    model.guardarPassword = guardarPassword;

    function cambiarPassword() {
        $("#modal2").openModal();
    }
    function guardarCambios() {
        myFactory.usuario.nombre = model.nombre;
        myService.setUsuario(myFactory.usuario).success(function () {
            alert("Usuario modificado.");
            location.reload();
        });
    }
    function guardarPassword() {
        if (model.passwordNuevo !== model.passwordNuevo2) {
            alert("Los nuevos password no son idénticos.");
        }
        else {
            myService.setPassword(myFactory.usuario.idUsuario,model.passwordViejo,model.passwordNuevo).success(function (data) {
                console.log(data);
                if ($.isEmptyObject(data)) {
                    alert("Password no cambiado.");
                }
                else {
                    alert("Password cambiado.");
                    $('#modal2').closeModal();
                    location.reload();
                }
            });
        }
    }

  });
