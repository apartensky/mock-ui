define([], function(){
	return function($scope, AnnotationSetRepository, DashboardRepository){
		console.debug("ctrl AnnotationListDirective", $scope, AnnotationSetRepository, DashboardRepository);
		$scope.vm={
				all: AnnotationSetRepository.getAll(),
				dashs: DashboardRepository.getAll(),
				addDash: function(ann){
					DashboardRepository.create(ann);
					console.debug("DashboardRepository.getAll()", DashboardRepository.getAll());
				}
		};		
	};
});