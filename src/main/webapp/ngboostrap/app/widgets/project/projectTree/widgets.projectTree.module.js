define(["ng", "./controllers/ProjectTreeVM", "./controllers/ProjectTreeAdaptor", "./directives/projectTree.directive", "./controllers/ProjectTreeSchema",
        "./_projectNode/directives/projectNode.directive",
        "./_projectNode/directives/projectNodeDefault.directive"],		
function(ng, ProjectTreeVM, ProjectTreeAdaptor, ProjectTreeDirective, ProjectTreeSchema, 
		ProjectNodeDirective, 
		projectNodeDefaultDirective){
	var module=ng.module("mui.widgets.projecttree", []);
	
	module.factory("ProjectTreeSchema", ProjectTreeSchema);
	module.factory("ProjectTreeAdaptor", ProjectTreeAdaptor);
	module.controller("ProjectTreeVM", ProjectTreeVM);	
	module.directive("projectTree", ProjectTreeDirective);	
	module.directive("projectNode", ProjectNodeDirective);
	module.directive("projectNodeDefault", projectNodeDefaultDirective);
	
	return module;
});