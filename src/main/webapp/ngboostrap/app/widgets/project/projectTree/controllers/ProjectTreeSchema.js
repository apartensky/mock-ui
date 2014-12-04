define([], function(){
	var ProjectTreeSchema=function ProjectTreeSchema(){
		return {
			dataset: {				
				
			},
			analysis: {
				label: "Analyses",
				type: "Analysis"
			},
			dashboard: {
				label: "Dashboards",
				type: "Dashboard"
			},
			history: {
				label: "History",
				type: "History"
			}
		}
	}
	
	return ProjectTreeSchema;
	ProjectTreeSchema.$inject=[];
});