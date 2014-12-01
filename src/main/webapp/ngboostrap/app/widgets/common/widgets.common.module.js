define(["ng",
        "./listMenu/widgets.common.listMenu.module"],
function(ng){
	var module=ng.module("mui.widgets.common", ["mui.widgets.common.listmenu"])
	return module;
});