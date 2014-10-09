define([ 'ng', 'ng-ui-router' ], function(ng) {
	'use strict';
	return ng.module('wijmo-app', [ 'ui.router', function() {
	} ])
	.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');

		$stateProvider.state('home', {
			url : '/home',
			templateUrl : '/wijmo/home/templates/menu.tpl.html'
		});
	} ]);
});