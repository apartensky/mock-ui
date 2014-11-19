define(["ng", 
        "./annotations/annotations.module",
        "./dashboard/dashboard.module",
        "./facet/facet.module",
        "./project/project.domain.module"], 
function(ng, annotationsMod, dashboardMod, facetMod, projectMod){
	var module = ng.module("mui.domain", [annotationsMod.name, 
	                                      dashboardMod.name,
	                                      facetMod.name, 
	                                      projectMod.name]);
	return module;
});