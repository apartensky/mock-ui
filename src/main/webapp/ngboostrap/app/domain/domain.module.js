define(["ng", 
        "./annotations/annotations.module",
        "./dashboard/dashboard.module",
        "./facet/facet.module",
        "./project/project.domain.module",
        "./navigator/domain.navigator.module"], 
function(ng, annotationsMod, dashboardMod, facetMod, projectMod, navigatorMod){
	var module = ng.module("mui.domain", [annotationsMod.name, 
	                                      dashboardMod.name,
	                                      facetMod.name, 
	                                      projectMod.name,
	                                      navigatorMod.name]);
	return module;
});