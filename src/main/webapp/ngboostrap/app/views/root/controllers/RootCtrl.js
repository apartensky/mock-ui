define([], function(){
	var RootCtrl = function(SideMenuSrv, $state){
		this.isShrink=function(){
			console.debug("root.isShrink", SideMenuSrv.isShrink());
			return SideMenuSrv.isShrink();
		}
		this.isSideMenu=function(){
			var result = $state.current.data && $state.current.data.sidemenuUrl ? true : false;
			console.debug("root.isSideMenu", $state.current.data, result);
			return result;
		};
	};
	RootCtrl.$inject=["SideMenuSrv", "$state"];
	return RootCtrl;
});