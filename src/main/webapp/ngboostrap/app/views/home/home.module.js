define(["ng", "./controllers/HomeVM", "app/components/mainmenu/mainmenu.module", "./annotationList/annotationList.module"], 
function(ng, HomeVM){
	var module = ng.module("mui.views.home", ["mui.annotationList"]);
	module.config(['$stateProvider', '$urlRouterProvider',
	     	function($stateProvider, $urlRouterProvider){	     				
	     		$urlRouterProvider.otherwise("/home");		
	     		$stateProvider.state("home", {
	     			url: "/home",
	     			templateUrl: "app/views/home/templates/home.tpl.html",
	     			controller: "HomeVM",
	     			controllerAs: "HomeVM"	     				
	     		})		
	}]);
	module.controller("HomeVM", ["ProjectRepository", HomeVM]);
	return module;
});