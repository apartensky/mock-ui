define(["ng", "./directives/annotationList.directive", "app/domain/annotations/annotations.module"], function(ng, AnnotationListDirective){
	var module = ng.module("mui.annotationList", ["mui.annotations"]);
	module.directive("annotationList", AnnotationListDirective);
	return module;
});