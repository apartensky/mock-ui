define([], function(){
	var DashboardResolver=function($stateParams, DashboardRepository){
		
		console.debug("resolving....", $stateParams, DashboardRepository);
		var dashboard;
		if($stateParams.spec.annotationSet){
			dashboard = DashboardRepository.exists($stateParams.spec.annotationSet.meta.getName());
			if(!dashboard){
				dashboard = DashboardRepository.create($stateParams.spec.annotationSet);
			}
		}else if($stateParams.spec.dashboardName){
			dashboard = DashboardRepository.exists($stateParams.spec.dashboardName);
		}
		
		if(!dashboard){
			console.error("Cannot resolve dashboard from spec", spec);
		}
									
		console.debug("resolve", dashboard);
		return dashboard;
	};		
	
	return DashboardResolver;
});