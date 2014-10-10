define(['ng', 'ng-ui-router', 'wijmo-ng'], function(ng){
	var appRoot="/wijmo/wijmoreqng";
	return ng.module('wijmoreqng-app', ['ui.router', 'wijmo', function(){}])
	.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("/home");
		$stateProvider.state("home", {
			url: "/home",
			templateUrl: appRoot+"/home/templates/home.tpl.html",
			controller: 'HomeController'
		});
	}]);
});