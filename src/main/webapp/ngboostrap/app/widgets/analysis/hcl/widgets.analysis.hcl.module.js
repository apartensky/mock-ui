define(["ng", "./directives/hclResult/hclResult.directive"], 
function(ng, HclResultDirective){
	var module = ng.module("mui.widgets.analysis.hcl", []);
	module.directive("hclResult", HclResultDirective);
	return module;
});