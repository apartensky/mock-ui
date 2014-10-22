define(["ng", "./AnnotationSetMeta", "./AnnotationSetRepository"], 
function(ng, AnnotationSetMeta, AnnotationSetRepository){
	var module = ng.module("mui.annotations", []);	
	module.service("AnnotationSetRepository", ["$q", AnnotationSetRepository]);
	return module;
});