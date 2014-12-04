define([], function(){
	return function ProjectTree(){
		return {
			scope: {
				project: '=',
				nodeType: '@'
			},
			transclude: true,
			restrict: "AE",
			templateUrl: "app/widgets/project/projectTree/templates/projectTree.tpl.html",			
//			templateUrl: "app/widgets/project/projectTree/templates/projectTree.dxTree.tpl.html",	
//			controller: "ProjectTreeVM",
//			controllerAs: "ProjectTreeVM"
			
		}
	}
});