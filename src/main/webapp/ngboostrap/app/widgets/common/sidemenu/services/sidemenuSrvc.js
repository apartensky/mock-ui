define(["ng"], function(ng){
	var SideMenuSrvc = function SideMenuSrvc(){		
			var sideMenuShrink=true;
			function toggle(){			
				sideMenuShrink=!sideMenuShrink;
				console.debug("sidemenu toggled to " + sideMenuShrink);
			}
			function isShrink(){
				return sideMenuShrink;
			}		
			
			this.toggle=toggle;
			this.isShrink=isShrink;
	};
	SideMenuSrvc.$inject=[];
	return SideMenuSrvc;
});
