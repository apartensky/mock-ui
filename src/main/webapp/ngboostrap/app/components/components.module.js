define(["ng", "./mainmenu/mainmenu.module", "./dashboardmenu/dashboardmenu.module"], function(ng){
	var module=ng.module("mui.components", ["ui.router", "mui.components.mainmenu", "mui.components.dashboard"]);	
	return module;
});