'use strict';

/**
 * @ngdoc overview
 * @name educomApp
 * @description
 * # educomApp
 *
 * Main module of the application.
 */
angular
    .module('educomApp', [
    'ngCookies',
    'ngRoute',
    'ui.materialize'
  ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'views/panelgrupos.html',
                controller: 'PanelgruposCtrl',
                controllerAs: 'grupos'
            })
            .when('/mensajes', {
                templateUrl: 'views/panelmensajes.html',
                controller: 'PanelmensajesCtrl',
                controllerAs: 'mensajes'
            })
            .when('/centro', {
                templateUrl: 'views/admincentro.html',
                controller: 'AdmincentroCtrl',
                controllerAs: 'centro'
            })
            .when('/grupos', {
                templateUrl: 'views/admingrupos.html',
                controller: 'AdmingruposCtrl',
                controllerAs: 'adminGrupos'
            })
            .when('/tipos', {
                templateUrl: 'views/admintipos.html',
                controller: 'AdmintiposCtrl',
                controllerAs: 'tipos'
            })
            .when('/usuarios', {
                templateUrl: 'views/adminusuarios.html',
                controller: 'AdminusuariosCtrl',
                controllerAs: 'usuarios'
            })
            .when('/administrar', {
                templateUrl: 'views/panelusuario.html',
                controller: 'PanelusuarioCtrl',
                controllerAs: 'usuario'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
