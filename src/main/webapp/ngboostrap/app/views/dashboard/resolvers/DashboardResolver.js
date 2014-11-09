define([], function(){
	var DashboardResolver=function($stateParams, DashboardRepository){
		
		console.debug("resolving....", $stateParams, DashboardRepository);
		var dashboard = DashboardRepository.exists($stateParams.id);				
		if(!dashboard){			
			dashboard = DashboardRepository.create($stateParams.id);
		}		
		if(!dashboard){
			console.error("Cannot resolve dashboard from spec", spec);
		}
									
		console.debug("resolve", dashboard);
		return dashboard;
	};		
	
	return DashboardResolver;
});