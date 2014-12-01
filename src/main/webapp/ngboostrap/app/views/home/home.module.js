define(["ng", "./controllers/HomeVM", "app/widgets/mainmenu/mainmenu.module", "./annotationList/annotationList.module"], 
function(ng, HomeVM){
	var module = ng.module("mui.views.home", ["mui.annotationList"]);
	module.config(['$stateProvider', '$urlRouterProvider',
	     	function($stateProvider, $urlRouterProvider){	     				
	     		$urlRouterProvider.otherwise("/home");		
	     		$stateProvider.state("home", {
	     			url: "/home",
	     			templateUrl: "app/views/home/templates/workspace.v2.tpl.html",
	     			controller: "HomeVM",
	     			controllerAs: "HomeVM",
//	     			resolve: {
//	     				projects: ["ProjectRepository", function(ProjectRepository){
//	     					return ProjectRepository.getAll().$promise;
//	     				}] 
//	     			}
	     		})		
	}]);
	module.controller("HomeVM", ["ProjectRepository", HomeVM]);
	return module;
});