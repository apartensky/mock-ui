define(["ng", "./ServerStorageMixin", "./AnnotationStorage", "./DashboardStorage", "./ProjectStorage"], 
function(ng, ServerStorageMixin, AnnotationStorage, DashboardStorage, ProjectStorage){
	var module = ng.module("mui.storageMock", []);
	module.factory("AnnotationStorage", [AnnotationStorage]);
	module.factory("DatasetStorage", [AnnotationStorage]);
	module.factory("DashboardStorage", [DashboardStorage]);
	module.factory("AnalysisStorage", [DashboardStorage]);
	module.factory("ProjectStorage", ["DatasetStorage", "AnalysisStorage", "DashboardStorage", ProjectStorage]);
	return module;
});