define([], function(){
	return function($scope, $stateParams, DashboardRepository, dashboard){
		console.debug("DashboardCtrl $stateParams", $stateParams);		
		console.debug("DashboardCtrl DashboardRepository", DashboardRepository);
		console.debug("DashboardCtrl dashboard", dashboard);
		$scope.vm={
				dashboard: dashboard,
				hi: "hi"
		};
	};
});