define(["ng", "./ServerStorageMixin", "./AnnotationStorage", "./DashboardStorage", "./ProjectStorage", "./RootStorage", "./RootStorageSchema", "./EndpointConfig", "./NestedEndpointConfig", "./Endpoint"], 
function(ng, ServerStorageMixin, AnnotationStorage, DashboardStorage, ProjectStorage, RootStorage, RootStorageSchema, EndpointConfig, NestedEndpointConfig, Endpoint){
	var module = ng.module("mui.storageMock", []);
//	module.factory("AnnotationStorage", [AnnotationStorage]);
	module.factory("DatasetStorage", [AnnotationStorage]);
//	module.factory("DashboardStorage", [DashboardStorage]);
	module.factory("AnalysisStorage", [DashboardStorage]);
	module.factory("RootStorage", ["RootStorageSchema", RootStorage]);	
//	module.factory("ProjectStorage", ["DatasetStorage", "AnalysisStorage", "DashboardStorage", ProjectStorage]);
//	module.factory("EndpointConfig", ["$httpBackend", "AnnotationStorage", "DashboardStorage", "ProjectStorage", EndpointConfig]);
	module.service("Endpoint", ["$httpBackend", "RootStorage", Endpoint]);
	module.factory("EndpointConfig", ["$httpBackend", "RootStorage", "Endpoint", NestedEndpointConfig]);
	module.value("RootStorageSchema", RootStorageSchema);
	return module;
});