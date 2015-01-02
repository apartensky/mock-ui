define(["ng"], function(ng){
	var LayoutVM = function($scope){
		var isOpen
		$scope.layout={				
				helloCtrl: "heyyyyy"
		};
	};
	LayoutVM.$injcet=["$scope"];
	return LayoutVM;
});