define(["ng", "./projectList/widgets.projectlist.module", "./projectLabel/widgets.projectLabel.module"], 
function(ng){	
	var module = ng.module("mui.widgets.project", ["mui.widgets.projectlist", 
	                                               "mui.widgets.projectlabel"]);			
	return module;
});