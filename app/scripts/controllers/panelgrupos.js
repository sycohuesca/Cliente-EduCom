'use strict';

/**
 * @ngdoc function
 * @name educomApp.controller:PanelgruposCtrl
 * @description
 * # PanelgruposCtrl
 * Controller of the educomApp
 */
angular.module('educomApp')
    .controller('PanelgruposCtrl', function ($window, $cookies, myFactory, myService) {
        // variables
        var model = this;
        model.fdatos = {};
        model.miembro = {};
     model.preloader=true;
        myService.getGrupos($cookies.get("idUsuario")).success(function (data) {
            model.grupos = data;
            myFactory.miembrosUsuario = data;
            model.preloader=false;
        });

        // funciones
        model.modalEntrarGrupo = modalEntrarGrupo;
        model.btnEntrarGrupo = btnEntrarGrupo;

        model.modalEditarMiembros = modalEditarMiembros;
        model.guardarMiembro = guardarMiembro;

        model.modalNuevoGrupo = modalNuevoGrupo;
        model.modalEditarGrupo = modalEditarGrupo;
        model.guardarGrupo = guardarGrupo;

        model.verMensajes = verMensajes;

        function modalNuevoGrupo() {
            model.fdatos.idGrupo = "0";
            model.fdatos.nombre = "";
            model.fdatos.descripcion = "";
            model.fdatos.privado = "1";
            $('#grupoModal').openModal();
        }

        function modalEntrarGrupo() {
            myService.getGruposByCentro(myFactory.usuario.idCentro.idCentro).success(function (data) {
                model.entrar = data;
                $('#modalEntrarGrupo').openModal();
            });
        }

        function btnEntrarGrupo() {
            var option = model.grupoEntrarSelect;
            myService.getGrupo(option).success(function (data) {
                if (data.privado) {
                    var mensaje = {};
                    mensaje.autor = myFactory.usuario;
                    mensaje.idGrupo = data;
                    mensaje.texto = "El usuario " + myFactory.usuario.nombre + " quiere unirse a este grupo.";
                    mensaje.idMensaje = "0";
                    myService.createMensaje(mensaje).success(function () {
                        alert("Es un grupo privado, se ha enviado una solicitud para entrar en el grupo.");
                    });

                } else {
                    var miembro = {
                        grupo: data,
                        usuario: myFactory.usuario,
                        responsable: "0"
                    };
                    myService.setMiembro(miembro).success(function () {
                        alert("Es un grupo público y as sido añadido directamente.");
                        $('#modalEntrarGrupo').closeModal();
                        location.reload();
                    });
                }
            });
        }

        function modalEditarMiembros(grupo) {
            model.miembro.responsable = "0";
            myFactory.grupoActivo = grupo;
            myService.getUsuariosByCentro(myFactory.usuario.idCentro.idCentro).success(function (data) {
                model.usuariosSelect = data;
            });

            $('#modalEditarMiembro').openModal();
        }

        function guardarMiembro() {
            var miembro = {};
            miembro.usuario = model.miembro.usuario;
            miembro.grupo = myFactory.grupoActivo;
            miembro.responsable = model.miembro.responsable;
            myService.setMiembro(miembro).success(function () {
                alert("Usuario modificado.");
                $('#modalEditarMiembro').closeModal();
                location.reload();
            });
        }

        function modalEditarGrupo(id) {
            model.fdatos.idGrupo = id.idGrupo;
            model.fdatos.nombre = id.nombre;
            model.fdatos.descripcion = id.descripcion;
            model.fdatos.privado = id.privado;
            model.fdatos.idUsuarioSuperadministrador = id.idUsuarioSuperadministrador;
            $('#grupoModal').openModal();
        }

        function guardarGrupo() {

            if (model.fdatos.idGrupo === "0") {
                model.fdatos.idUsuarioSuperadministrador = myFactory.usuario;
                myService.newGrupo(model.fdatos).success(function () {
                    alert("Nuevo Grupo creado.");
                    $('#grupoModal').closeModal();
                    location.reload();

                });
            } else {
                myService.editGrupo(model.fdatos).success(function () {
                    alert("Grupo editado.");
                    $('#grupoModal').closeModal();
                    location.reload();
                });
            }
        }

        function verMensajes(miembro) {
            myFactory.grupoActivo = miembro.grupo;
            myFactory.responsable = miembro.responsable;
            $window.location.href = "#/mensajes";
        }
    });
