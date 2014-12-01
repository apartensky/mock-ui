define(["ng", "./controllers/DatasetViewVM", "./annotations/AnnotationsViewVM"], 
function(ng, DatasetViewVM, AnnotationsViewVM){
	var module=ng.module("mui.views.dataset", []);
	module.controller("DatasetViewVM", DatasetViewVM);
	module.controller("AnnotationsViewVM", AnnotationsViewVM);
	module.config(['$stateProvider', '$urlRouterProvider',
	   	     	function($stateProvider, $urlRouterProvider){	     				
	   	     		$stateProvider.state("dataset", {
	   	     			url: "/dataset/:datasetId",
//	   	     			"abstract": true,
//			   	     	params: {
//			   	     	   id: null
//			   	     	},	
//	   	     			templateUrl: "app/views/project/templates/project.tpl.html",
	   	     			template: "{{DatasetViewVM.dataset.name}} !!! <div ui-view></div>",
	   	     			controller: "DatasetViewVM",
	   	     			controllerAs: "DatasetViewVM",
	   	     			resolve:{
	   	     				dataset: ["$state", "$stateParams", "DatasetRepository", 
	   	     				function($state, $stateParams, DatasetRepository){
	   	     					console.info("***resolving dataset", $stateParams.datasetId);
//	   	     					if($stateParams.id===null){
//	   	     						return DatasetRepository.put({}).$promise.then(function(data){
//	   	     							$state.go("project", {id: data.id});
//	   	     						});
//	   	     					}else{
	   	     						var dataset=DatasetRepository.get($stateParams.datasetId);
	   	     						console.debug("Dataset view resolved: ", dataset);
//	   	     						return dataset.$promise.then(function(response){
//	   	     							return response;
//	   	     						});
	   	     						return dataset;
	   	     						
//	   	     					}
	   	     				}]
	   	     			}
	   	     		})
	   	     		.state("dataset.annotations", {
	   	     			url: "annotations/:dimension",
//	   	     			template: "<div>{{dataset.name}} - {{annotations.name}}",
	   	     			template: "<div>{{AnnotationsViewVM.dataset.name}} - {{AnnotationsViewVM.annotations.name}}</div>",
	   	     			controller: "AnnotationsViewVM",
	   	     			controllerAs: "AnnotationsViewVM",
	   	     			parent: "dataset",
	   	     			resolve: {	   	     				
	   	     				annotations: ["$stateParams", "dataset", function($stateParams, dataset){	   	     					
	   	     					var annotations= dataset.annotations[$stateParams.dimension];
	   	     					console.debug("Dataset.Annotations view resolved: ", annotations);
	   	     					return annotations;
	   	     				}]
	   	     			}
	   	     		});
	   	}]);	
	return module;
});