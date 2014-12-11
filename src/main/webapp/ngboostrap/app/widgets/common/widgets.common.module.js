define(["ng",
        "./listMenu/widgets.common.listMenu.module",
        "./sidepanel/widgets.common.sidePanel.module"],
function(ng){
	var module=ng.module("mui.widgets.common", ["mui.widgets.common.listmenu",
	                                            "mui.widgets.common.sidePanel"])
	return module;
});