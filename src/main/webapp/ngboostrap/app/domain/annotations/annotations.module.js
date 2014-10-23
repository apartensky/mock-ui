define(["ng", "./AnnotationSetRepository"], 
function(ng, AnnotationSetRepository){
	var module = ng.module("mui.annotations", []);	
	module.service("AnnotationSetRepository", ["$q", AnnotationSetRepository]);
	return module;
});