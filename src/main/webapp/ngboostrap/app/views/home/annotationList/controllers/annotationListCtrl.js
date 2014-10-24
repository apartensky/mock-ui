define([], function(){
	return function($scope, $state, AnnotationSetRepository, DashboardRepository){
		console.debug("ctrl AnnotationListDirective", $scope, $state, AnnotationSetRepository, DashboardRepository);
		$scope.vm={
				all: AnnotationSetRepository.getAll(),
				dashs: DashboardRepository.getAll(),
				gotoDashboard: function(ann){
//					DashboardRepository.create(ann);
//					console.debug("DashboardRepository.getAll()", DashboardRepository.getAll());
					$state.go("dashboard", {spec:{annotationSet: ann}}, {location: true});
				}
		};		
	};
});