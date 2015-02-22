var pagesRouting = angular.module('pagesRouting', ['ngRoute']);

pagesRouting.config(
	function($routeProvider){

		$routeProvider
		.when('/inicio', {
			templateUrl : 'pages/inicio.html',
			controller : 'mainController'
		})
		.when('/acerca', {
			templateUrl : 'pages/acerca.html',
			controller : 'mainController'
		})
		.when('/contactar', {
			templateUrl : 'pages/contacto.html',
			controller : 'mainController'
		})
		.when('/terminos', {
			templateUrl : 'pages/terminos.html',
			controller : 'mainController'
		})
		.otherwise({
			redirectTo: '/inicio'
		})
	});
// OPCIONAL
pagesRouting.controller('mainController', function($scope){});
