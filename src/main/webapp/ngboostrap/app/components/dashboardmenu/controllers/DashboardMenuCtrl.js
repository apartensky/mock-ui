define([], function(){
	return function DashboardMenuCtrl($scope, DashboardRepository){
		console.log("DashboardMenuCtrl - init");
		$scope.vm={dashboards: DashboardRepository.getAll()};
	};
});