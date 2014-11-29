define(["ng"],function(ng){
	var module=ng.module("mui.domain.navigator", []);
	module.factory("Navigator", ["$state", function($state){
		function Navigator(){
			this.openProject=function(project){
				$state.go("project", {id:project.id});
			}
			this.newProject=function(){
				$state.go("project");
			}
		}
		return new Navigator();
	}]);
	return module;
});