define(["ng", "./directives/sidepanel.directive", "./directives/toggleSidepanel.directive","./services/sidepanelSrvc"], 
function(ng, SidepanelDirective, ToggleSidepanelDirective, SidepanelSrvc){
	var module=ng.module("mui.widgets.common.sidePanel", []);
	module.directive("sidepanel", SidepanelDirective);
	module.directive("toggleSidepanel", ToggleSidepanelDirective);
	module.service("sidepanelSrvc", SidepanelSrvc);
	return module;
});