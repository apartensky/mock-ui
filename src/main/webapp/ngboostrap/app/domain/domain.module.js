define(["ng", 
        "./annotations/annotations.module",
        "./dashboard/dashboard.module",
        "./facet/facet.module"], 
function(ng, annotationsMod, dashboardMod, facetMod){
	var module = ng.module("mui.domain", [annotationsMod.name, 
	                                      dashboardMod.name,
	                                      facetMod.name]);
	return module;
});