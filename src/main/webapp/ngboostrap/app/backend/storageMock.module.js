define(["ng", "./ServerStorageMixin", "./AnnotationStorage", "./DashboardStorage"], function(ng, ServerStorageMixin, AnnotationStorage, DashboardStorage){
	var module = ng.module("mui.storageMock", []);
	module.factory("AnnotationStorage", [AnnotationStorage]);
	module.factory("DashboardStorage", [DashboardStorage]);
	return module;
});