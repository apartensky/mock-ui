define(["ng", "./projectList/widgets.projectlist.module", 
        "./projectLabel/widgets.projectLabel.module",
        "./projectMenuList/widgets.projectMenuList.module",
        "./projectTree/widgets.projectTree.module"], 
function(ng){	
	var module = ng.module("mui.widgets.project", ["mui.widgets.projectlist", 
	                                               "mui.widgets.projectlabel",
	                                               "mui.widgets.projecttree"
//	                                               , "mui.widgets.projectMenuList"
	                                               ]);			
	return module;
});