define([], function(){
	return function DashboardMenuCtrl($scope, $state, DashboardRepository){
		console.log("DashboardMenuCtrl - init", $state.$current.name, $state.includes('dashboard'));
		$scope.vm={dashboards: DashboardRepository.getAll()};
		$scope.$state=$state;
		
	};
});