define([], function(){
	var RootCtrl = function(SideMenuSrv, $state, $scope, $rootScope, sidepanelSrvc){
		
		var header={
			fixed: true
		};
		var footer={
			fixed: true
		};
		var columnScroll=false;
		
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
		
		this.hideLeft=function(){
			$rootScope.$broadcast("ui:layoutColumn:toggle", {position: "left"});
			console.debug("hide left");
//			sidepanelSrvc.toggle("left");
		};
		this.isLeftClosed=function(){			
			return sidepanelSrvc.isCollapsed();
		};
		
		$scope.$on("ui:toggleColumnScroll", function(){
			console.debug("ui:toggleColumnScroll", columnScroll);
			columnScroll=!columnScroll;
		});
		this.isColumnScroll=function(){
			return columnScroll;
		}
	};	
	
	RootCtrl.$inject=["SideMenuSrv", "$state", "$scope", "$rootScope", "sidepanelSrvc"];
	RootCtrl.$name="RootCtrl";
	return RootCtrl;
});