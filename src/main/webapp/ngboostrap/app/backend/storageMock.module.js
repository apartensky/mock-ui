define(["ng", "./ServerStorageMixin", "./AnnotationStorage", "./DashboardStorage", "./ProjectStorage"], 
function(ng, ServerStorageMixin, AnnotationStorage, DashboardStorage, ProjectStorage){
	var module = ng.module("mui.storageMock", []);
	module.factory("AnnotationStorage", [AnnotationStorage]);
	module.factory("DashboardStorage", [DashboardStorage]);
	module.factory("ProjectStorage", [ProjectStorage]);
	return module;
});