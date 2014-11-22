define(["ng", "./ServerStorageMixin", "./AnnotationStorage", "./DashboardStorage", "./ProjectStorage", "./EndpointConfig"], 
function(ng, ServerStorageMixin, AnnotationStorage, DashboardStorage, ProjectStorage, EndpointConfig){
	var module = ng.module("mui.storageMock", []);
	module.factory("AnnotationStorage", [AnnotationStorage]);
	module.factory("DatasetStorage", [AnnotationStorage]);
	module.factory("DashboardStorage", [DashboardStorage]);
	module.factory("AnalysisStorage", [DashboardStorage]);
	module.factory("ProjectStorage", ["DatasetStorage", "AnalysisStorage", "DashboardStorage", ProjectStorage]);
	module.factory("EndpointConfig", ["$httpBackend", "AnnotationStorage", "DashboardStorage", "ProjectStorage", EndpointConfig])
	return module;
});