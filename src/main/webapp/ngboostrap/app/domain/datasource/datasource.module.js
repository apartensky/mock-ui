define(["ng", "../dal/DataRepositoryMixin"], function(ng, DataRepositoryMixin){
	var module=ng.module("mui.domain.datasource", []);
	
	module.factory("DatasourceRepository", ["$http", function($http){
		function DatasourceRepository(){
			this.data=[];
		};
		DataRepositoryMixin.call(DatasourceRepository.prototype, {url: "api/datasource", $http: $http});
		return new DatasourceRepository();		
	}]);
	
	return module;
})