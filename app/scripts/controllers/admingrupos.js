'use strict';

/**
 * @ngdoc function
 * @name educomApp.controller:AdmingruposCtrl
 * @description
 * # AdmingruposCtrl
 * Controller of the educomApp
 */
angular.module('educomApp')
    .controller('AdmingruposCtrl', function (myService, myFactory) {
        var model = this;

        // Variables
        model.grupoActivo = "";
        model.nombre = "";
        model.descripcion = "";
        model.privado = "0";
        myService.getGruposByCentro(myFactory.usuario.idCentro.idCentro).success(function (data) {
            model.gruposSelect = data;
        });
        myService.getUsuariosByCentro(myFactory.usuario.idCentro.idCentro).success(function (data) {
            model.usuariosSelect = data;
        });

        // Funciones
        model.guardar = guardar;
        model.editGrupo = editGrupo;
        model.activar = activar;

        function guardar() {
            model.grupoActivo.nombre = model.nombre;
            model.grupoActivo.descripcion = model.descripcion;
            model.grupoActivo.privado = model.privado;
            var miembro = {
                grupo: model.grupoActivo,
                usuario: "",
                responsable: "0"
            };
            if (model.usuariosActivos) {
                $.each(model.usuariosActivos, function (index) {
                    miembro.usuario = model.usuariosActivos[index];
                    myService.setMiembro(miembro).error(function () {
                        alert("error");
                    });
                });
            }
            myService.editGrupo(model.grupoActivo).success(function () {
                alert("Grupo Modificado y añadido sus miembros.");
            });
        };

        function editGrupo() {
            model.nombre = model.grupoActivo.nombre;
            model.descripcion = model.grupoActivo.descripcion;
            model.privado = model.grupoActivo.privado;



        };

        function activar() {
            if (model.nombre) {
                return "active";
            } else {
                return "";
            }
        };
    });
