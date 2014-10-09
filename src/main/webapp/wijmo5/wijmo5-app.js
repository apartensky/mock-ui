define(['ng', 'wijmo-ng', 'ng-ui-router'], function(ng){
	return ng.module('wijmo5-app', ['ui.router', 'wj', function(router, wj){
	}]).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/home');		
		$stateProvider.state('home', {
			url: '/home'			
		});
	}]);
});