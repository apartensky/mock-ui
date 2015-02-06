define(["ng", "./directives/hclResult/hclResult.directive", "./directives/hclParameters/hclParameters.directive"], 
function(ng, HclResultDirective, HclParametersDirective){
	var module = ng.module("mui.widgets.analysis.hcl", []);
	module.directive("hclResult", HclResultDirective);
	module.directive("hclParameters", HclResultDirective);
	return module;
});