define(["ng",
        "./common/widgets.common.module",
        "./mainmenu/mainmenu.module", 
        "./dashboardmenu/dashboardmenu.module", 
        "./project/widgets.project.module"],
function(ng){
	var module=ng.module("mui.components", ["ui.router",
	     "mui.widgets.common",
	     "mui.components.mainmenu", 
	     "mui.components.dashboard",
	     "mui.widgets.project"]);	
	return module;
});