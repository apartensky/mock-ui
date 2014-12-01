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
			this.importDataset=function(datasource, dataset){
				$state.go("import", {datasourceId: datasource.id, datasetId: dataset.id});
			}
			this.goHome=function(){
				$state.go("home");
			}
			this.openDataset=function(){
//				$state.go
			}
			this.openAnnotations=function(dataset, dimension){
				$state.go("dataset.annotations", {datasetId: dataset.id, dimension: dimension});
			}
		}
		return new Navigator();
	}]);
	return module;
});