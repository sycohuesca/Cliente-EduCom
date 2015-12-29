'use strict';

/**
 * @ngdoc function
 * @name educomApp.controller:PanelmensajesCtrl
 * @description
 * # PanelmensajesCtrl
 * Controller of the educomApp
 */
angular.module('educomApp')
  .controller('PanelmensajesCtrl', function ($window, myService, myFactory) {
 // Variables
    var model = this;
    $('textarea.materialize-textarea').characterCounter();
    myService.getMensajes(myFactory.grupoActivo.idGrupo).success(function (data) {
        model.mensajes = data;
    });
    model.responsable=myFactory.responsable;

    // Funciones.
    model.nuevoMensaje = nuevoMensaje;
    model.editarMensaje = editarMensaje;
    model.guardarMensaje = guardarMensaje;
    model.borrarMensaje = borrarMensaje;
    model.borrarMensajeBtn = borrarMensajeBtn;

    model.salirGrupo = salirGrupo;
    model.salirGrupoBtn = salirGrupoBtn;

    model.formatearFecha = formatearFecha;

    function nuevoMensaje() {
        model.fdatos = {};
        model.fdatos.autor = myFactory.usuario;
        model.fdatos.idGrupo = myFactory.grupoActivo;
        model.fdatos.texto = "";
        model.fdatos.idMensaje = "0";
        $('#modalMensaje').openModal();
    }
    function editarMensaje(mensaje) {
        model.fdatos = mensaje;
        model.fdatos.estado = "Modificado por " + myFactory.usuario.nombre;
        $('#modalMensaje').openModal();
    }
    function borrarMensaje(id) {
        myFactory.mensaje = id;
        $('#modalBorrar').openModal();

    }
    function borrarMensajeBtn() {
        myService.deleteMensaje(myFactory.mensaje).success(function () {
            alert("Mensaje borrado.");
            $('#modalBorrar').closeModal();

            $window.location.href = "#/home";
        });
    }
    function guardarMensaje() {
        if (model.fdatos.idMensaje == "0") {
            myService.createMensaje(model.fdatos).success(function () {
                alert("Mensaje enviado.");
                $('#modalMensaje').closeModal();
                $window.location.href = "#/home";
            });
        }
        else {
            myService.editMensaje(model.fdatos).success(function () {
                alert("Mensaje editado");
                $('#modalMensaje').closeModal();
                $window.location.href = "#/home";
            });
        }
    }

    function salirGrupo() {
        $('#modalSalir').openModal();
    }
    function salirGrupoBtn() {
        $('#modalSalir').closeModal();
        myService.exitGrupo(myFactory.usuario.idUsuario, myFactory.grupoActivo.idGrupo).success(function () {
            alert("Has salido del Grupo.");
            $window.location.href = "#/home";
        });

    }

    function formatearFecha(fecha) {
        var anio = fecha.substring(0, 4);
        var mes = fecha.substring(5, 7);
        var dia = fecha.substring(8, 10);
        var hora = fecha.substring(11, 19);
        return "El " + dia + "/" + mes + "/" + anio + " a las " + hora + ".";
    }
  });
