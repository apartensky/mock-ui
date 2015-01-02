define(["ng"], function(ng){
	var LayoutSrvc = function LayoutSrvc(){		
			var layoutShrink=true;
			function toggle(direction){			
				layoutShrink=!layoutShrink;
				console.debug("layout toggled to " + layoutShrink);
			}
			function isShrink(){
				return layoutShrink;
			}		
			
			this.toggle=toggle;
			this.isShrink=isShrink;
	};
	LayoutSrvc.$inject=[];
	return LayoutSrvc;
});
