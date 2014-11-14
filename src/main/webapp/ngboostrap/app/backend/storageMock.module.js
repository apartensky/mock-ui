define(["ng", "./AnnotationStorage"], function(ng, AnnotationStorage){
	var module = ng.module("mui.storageMock", []);
	module.factory("AnnotationStorage", [AnnotationStorage]);
	return module;
});