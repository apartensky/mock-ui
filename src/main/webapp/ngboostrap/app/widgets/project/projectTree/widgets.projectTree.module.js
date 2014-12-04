define(["ng", "./controllers/ProjectTreeVM", "./controllers/ProjectTreeAdaptor", "./directives/projectTree.directive", "./controllers/ProjectTreeSchema"], 
function(ng, ProjectTreeVM, ProjectTreeAdaptor, ProjectTreeDirective, ProjectTreeSchema){
	var module=ng.module("mui.widgets.projecttree", []);
	module.factory("ProjectTreeSchema", ProjectTreeSchema);
	module.factory("ProjectTreeAdaptor", ProjectTreeAdaptor);
	module.controller("ProjectTreeVM", ProjectTreeVM);	
	module.directive("projectTree", ProjectTreeDirective);	
	return module;
});