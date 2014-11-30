define(["ng"], function(ng){
	return function ProjectViewVM($scope, $stateParams, project){
		var project=project;
		this.getProjectName=function(){
			return project.name;
		};
		this.getProject=function(){
			return project;
		};
	};
});