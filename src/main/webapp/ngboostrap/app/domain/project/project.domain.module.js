define(["ng", "../dal/DataRepositoryMixin"], function(ng, DataRepositoryMixin){
	var module=ng.module("mui.domain.project", []);
	module.factory("ProjectRepository", ["$http", function($http){
		function ProjectRepository(){
			this.data=[];
		};
		DataRepositoryMixin.call(ProjectRepository.prototype, {url: "api/project", $http: $http});
		return new ProjectRepository();		
	}]);
		
	return module;
})