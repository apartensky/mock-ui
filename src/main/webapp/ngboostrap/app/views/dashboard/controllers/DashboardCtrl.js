define([], function(){
	return function($scope, $stateParams, dashboard){
		console.debug("DashboardCtrl $stateParams", $stateParams);		
//		console.debug("DashboardCtrl DashboardRepository", DashboardRepository);
		console.debug("DashboardCtrl dashboard", dashboard);
		console.debug("DashboardCtrl dashboard.getName()	", dashboard.getName());
		$scope.vm={
				dashboard: dashboard,
				hi: "hi"
		};
	};
});