define(["ng", "./projectList/widgets.projectlist.module"], 
function(ng){	
	var module = ng.module("mui.widgets.project", ["mui.widgets.projectlist"]);			
	return module;
});