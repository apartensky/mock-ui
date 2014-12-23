define(["ng"], function(ng){
	var PanelSrvc = function PanelSrvc(){		
			var sideMenuShrink=true;
			function toggle(direction){			
				sideMenuShrink=!sideMenuShrink;
				console.debug("panel toggled to " + sideMenuShrink);
			}
			function isShrink(){
				return sideMenuShrink;
			}		
			
			this.toggle=toggle;
			this.isShrink=isShrink;
	};
	PanelSrvc.$inject=[];
	return PanelSrvc;
});
