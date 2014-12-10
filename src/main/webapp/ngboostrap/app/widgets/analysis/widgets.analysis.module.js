define(["ng", "./limma/widgets.analysis.limma.module", "./hcl/widgets.analysis.hcl.module"], 
function(ng, LimmaResultTableDirective){
	var module = ng.module("mui.widgets.analysis", ["mui.widgets.analysis.limma",
	                                                "mui.widgets.analysis.hcl"]);	
	return module;
});