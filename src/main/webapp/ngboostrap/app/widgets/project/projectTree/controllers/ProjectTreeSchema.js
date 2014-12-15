define([], function(){
	var ProjectTreeSchema=function ProjectTreeSchema(){
		return {
			
			"dataset": {label: "Datasets"},
			"dataset\.[0\-9]+": {label: "Dataset"},
			"dataset\.[0\-9]+\.dataref": {label: ""},
			"dataset\.[0\-9]+\.dataref\.column": {label: "columns"},
//			"dataset\.[0\-9]+\.dataref\.column\.keys": {label: "keys"},
			"dataset\.[0\-9]+\.dataref\.row": {label: "rows"},
//			"dataset\.[0\-9]+\.dataref\.row\.keys": {label: "keys"},
			
			"analysis": {label: "Analyses"},
			"analysis\.[0\-9]+": {label: "Analysis"},
//			"analysis\.[0\-9]+\.name": {label: "name"},
			"analysis\.[0\-9]+\.type": {label: "type"},
			"analysis\.[0\-9]+\.params": {label: "parameters"},
			"analysis\.[0\-9]+\.params\.dataref": {label: "data"},
			"analysis\.[0\-9]+\.result": {label: "Results"},
			"analysis\.[0\-9]+\.result\.[0\-9]+": {label: "result"},
//			"analysis\.[0\-9]+\.result\.[0\-9]+\.type": {label: "type"},
			
			"dashboards": {label: "Dashboards"},
			"dashboards\.[0\-9]+": {label: "dashboard"},
			
			"history": {label: "History"},
			
			
			
			
		};
	}
	
	return ProjectTreeSchema;
	ProjectTreeSchema.$inject=[];
});