define(["ng", "./ServerStorageMixin", "./AnnotationStorage", "./DashboardStorage", "./ProjectStorage", "./RootStorage", "./EndpointConfig", "./NestedEndpointConfig"], 
function(ng, ServerStorageMixin, AnnotationStorage, DashboardStorage, ProjectStorage, RootStorage, EndpointConfig, NestedEndpointConfig){
	var module = ng.module("mui.storageMock", []);
	module.factory("AnnotationStorage", [AnnotationStorage]);
	module.factory("DatasetStorage", [AnnotationStorage]);
	module.factory("DashboardStorage", [DashboardStorage]);
	module.factory("AnalysisStorage", [DashboardStorage]);
	module.factory("RootStorage", [RootStorage]);	
	module.factory("ProjectStorage", ["DatasetStorage", "AnalysisStorage", "DashboardStorage", ProjectStorage]);
//	module.factory("EndpointConfig", ["$httpBackend", "AnnotationStorage", "DashboardStorage", "ProjectStorage", EndpointConfig])
	module.factory("EndpointConfig", ["$httpBackend", "RootStorage", NestedEndpointConfig])	
	return module;
});