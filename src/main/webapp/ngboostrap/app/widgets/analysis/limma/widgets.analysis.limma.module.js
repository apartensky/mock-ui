define(["ng", "./directives/limmaResult/limmaResult.directive",
        "./directives/limmaTopGoResult/limmaTopGoResult.directive"], 
function(ng, LimmaResultDirective, LimmaTopGoResultDirective){
	var module = ng.module("mui.widgets.analysis.limma", []);
	module.directive("limmaResult", LimmaResultDirective);
	module.directive("limmaTopGoResult", LimmaTopGoResultDirective);
	return module;
});