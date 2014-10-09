define(['ng', 'ng-ui-router'], function(ng){
	var appRoot="/wijmoreqng"
	return ng.module('wijmoreqng-app', ['ui.router', function(){}])
	.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		$stateProvider.state("home", {
			url: "/home",
			templateUrl: appRoot+"/home/templates/home.tpl.html"
		});
	}]);
});