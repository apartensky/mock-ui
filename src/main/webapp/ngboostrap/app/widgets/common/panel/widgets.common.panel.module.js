define(["ng", "./directives/panel.directive", "./controllers/PanelVM", "./services/panelSrvc"], 
function(ng, SidemenuDirective, PanelVM, PanelSrvc){
	var module=ng.module("mui.widgets.common.panel", []);
	module.directive("panel", SidemenuDirective);	
	module.controller("PanelVM", PanelVM);	
	module.service("PanelSrv", PanelSrvc);
	return module;
});