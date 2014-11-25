define(["ng", "../dal/DataRepositoryMixin"], function(ng, DataRepositoryMixin){
	var module=ng.module("mui.domain.project", []);
	module.factory("ProjectRepository", ["$http", function($http){
		function ProjectRepository(){
			this.data=[];
		};
		DataRepositoryMixin.call(ProjectRepository.prototype, {url: "api/project", $http: $http});
		return new ProjectRepository();		
	}]);
	
	module.factory("WorkspaceRepository", ["$http", function($http){
		function WorkspaceRepository(){
			this.data=[];
		};
		DataRepositoryMixin.call(WorkspaceRepository.prototype, {url: "api/", $http: $http});
		return new WorkspaceRepository();		
	}]);
	
	return module;
})