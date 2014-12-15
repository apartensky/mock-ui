define(["ng",
        "./listMenu/widgets.common.listMenu.module",
        "./sidepanel/widgets.common.sidePanel.module",
        "./sidemenu/widgets.common.sideMenu.module"],
function(ng){
	var module=ng.module("mui.widgets.common", ["mui.widgets.common.listmenu",
	                                            "mui.widgets.common.sidePanel",
	                                            "mui.widgets.common.sideMenu"])
	return module;
});