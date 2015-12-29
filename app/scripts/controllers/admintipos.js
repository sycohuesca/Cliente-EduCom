'use strict';

/**
 * @ngdoc function
 * @name educomApp.controller:AdmintiposCtrl
 * @description
 * # AdmintiposCtrl
 * Controller of the educomApp
 */
angular.module('educomApp')
  .controller('AdmintiposCtrl', function (myService, myFactory) {
   var model = this;

    // Variables
    model.nombre = "";
    myService.getTipos().success(function (data){
        model.tipos=data;
    });
    myService.getUsuariosByCentro(myFactory.usuario.idCentro.idCentro).success(function (data) {
       model.usuarios = data;
    });
    model.tipoSelect =[];
    model.usuariosSelect = [];

    // Funciones

    model.nuevoTipo = nuevoTipo;
    model.guardar = guardar;


    function nuevoTipo() {
        var tipo={nombre:model.nombre};
myService.newTipo(tipo).success(function (){
    alert("Tipo nuevo de usuario creado.");
    location.reload();
});
    }
    function guardar() {

      $.each(model.usuariosSelect, function (a) {

        myService.editTipos(model.usuariosSelect[a], model.tipoSelect.idTipoUsuario).success(function (){
       console.log("Usuario añadido.");

       });

      });

alert("Usuarios añadidos al tipo "+model.tipoSelect.nombre);
 location.reload();
    }
  });
