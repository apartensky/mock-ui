define(["ng", "./controllers/HomeVM", "app/widgets/mainmenu/mainmenu.module", "./annotationList/annotationList.module"], 
function(ng, HomeVM){
	var module = ng.module("mui.views.home", ["mui.annotationList"]);
	module.config(['$stateProvider', '$urlRouterProvider',
	     	function($stateProvider, $urlRouterProvider){	     				
//	     		$urlRouterProvider.otherwise("/home");		
	     		$stateProvider.state("home", {
	     			url: "/home",
	     			templateUrl: "app/views/home/templates/workspace.v2.tpl.html",
	     			controller: "HomeVM",
	     			controllerAs: "HomeVM"	     			
	     		})
//	     		.state("home.datasource.tcga", {
////	     			url: "/home/datasource/tcga",
//	     			templateUrl: "app/views/home/_datasource/templates/datasource.import.tpl.html",
////	     			controller: "HomeVM",
////	     			controllerAs: "HomeVM"
//	     		})
	}]);
	module.controller("HomeVM", ["ProjectRepository", "DatasourceRepository", "Navigator", HomeVM]);
	return module;
});
