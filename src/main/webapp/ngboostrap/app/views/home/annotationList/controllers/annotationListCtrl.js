define([], function(){
	return function($scope, $state, AnnotationSetRepository, DashboardRepository){
		console.debug("ctrl AnnotationListDirective", $scope, $state, AnnotationSetRepository, DashboardRepository);		
		$scope.vm={
			gotoDashboard: function(ann){
//					DashboardRepository.create(ann);
//					console.debug("DashboardRepository.getAll()", DashboardRepository.getAll());
				$state.go("dashboard", {id:ann.meta.getName()}, {location: true});
			},
			all: [],
			dashs: []
		};		
		AnnotationSetRepository.getAll().then(function(annotationSets){
			$scope.vm.all=annotationSets;
		});
		DashboardRepository.getAll().then(function(dashboards){
			$scope.vm.dashs=dashboards;
		});
		 
		
	};
});