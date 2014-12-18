define([], function(){
	var ToggleSidepanelVM = function ToggleSidepanelVM(sidepanelSrvc){
		this.toggleSidepanel=function(direction){
			console.debug("CLIK CTRL!!! toggle 1");
			sidepanelSrvc.toggle(direction);
		};
	};
	ToggleSidepanelVM.$inject=["sidepanelSrvc"];
	return ToggleSidepanelVM;
});