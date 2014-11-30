define(["ng", "./controllers/ProjectViewVM"], 
function(ng, ProjectviewVM){
	var module=ng.module("mui.views.project", []);
	module.controller("ProjectViewVM", ["$scope", "$stateParams", "project", ProjectviewVM]);
	module.config(['$stateProvider', '$urlRouterProvider',
	   	     	function($stateProvider, $urlRouterProvider){	     				
	   	     		$stateProvider.state("project", {
	   	     			url: "/project/:id/",
			   	     	params: {
			   	     	   id: null
			   	     	},
	   	     			templateUrl: "app/views/project/templates/project.tpl.html",
	   	     			controller: "ProjectViewVM",
	   	     			controllerAs: "ProjectViewVM",
	   	     			resolve:{
	   	     				project: ["$state", "$stateParams", "ProjectRepository", 
	   	     				function($state, $stateParams, ProjectRepository){
	   	     					console.info("***resolving project", $stateParams.id);
	   	     					if($stateParams.id===null){
	   	     						return ProjectRepository.put({}).$promise.then(function(data){
	   	     							$state.go("project", {id: data.id});
	   	     						});
	   	     					}else{
	   	     						return ProjectRepository.get($stateParams.id);
	   	     					}
	   	     				}]
	   	     			}
	   	     		})		
	   	}]);	
	return module;
});