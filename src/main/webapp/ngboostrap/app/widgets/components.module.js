define(["ng", "./mainmenu/mainmenu.module", 
        "./dashboardmenu/dashboardmenu.module", 
        "./project/widgets.project.module"], 
function(ng){
	var module=ng.module("mui.components", ["ui.router", 
	     "mui.components.mainmenu", 
	     "mui.components.dashboard",
	     "mui.widgets.project"]);	
	return module;
});