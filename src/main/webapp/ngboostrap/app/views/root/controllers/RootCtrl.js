define([], function(){
	var RootCtrl = function(SideMenuSrv, $state, $scope){
		
		var header={
			fixed: false
		};
		var footer={
			fixed: false
		};
		
		
		this.isSideMenuCollapse=function(){
			console.debug("root.isShrink", SideMenuSrv.isShrink());
			return SideMenuSrv.isShrink();
		}
		this.isSideMenu=function(){
			var result = $state.current.data && $state.current.data.sidemenuUrl ? true : false;
			console.debug("root.isSideMenu", $state.current.data, result);
			return result;
		};
		
		this.isHeaderFixed=function(){
			return header.fixed;
		};		
		$scope.$on("ui:toggleFixedHeader", function(){
			console.debug("ui:toggleFixedHeader", header.fixed);
			header.fixed=!header.fixed;
		});

		this.isFooterFixed=function(){
			return footer.fixed;
		};		
		$scope.$on("ui:toggleFixedFooter", function(){
			console.debug("ui:toggleFixedFooter", footer.fixed);
			footer.fixed=!footer.fixed;
		});
		
	};	
	
	RootCtrl.$inject=["SideMenuSrv", "$state", "$scope"];
	RootCtrl.$name="RootCtrl";
	return RootCtrl;
});