define(["ng"], function(ng){
	var module = ng.module("mui.views.project.analysis", []);
	module.config(["$stateProvider", function($stateProvider){
		$stateProvider.state("root.project.analysis", {
			parent: "root.project",
			url: "analysis/:analysisId/",
			template: "<div>Analysis: {{ProjectAnalysisVM.analysisId}}<ui-view></ui-view></div>",
			controller: ["$stateParams", function($stateParams){
				this.analysisId=$stateParams.analysisId;
			}],
			controllerAs: "ProjectAnalysisVM"				
		})
		.state("root.project.analysis.result", {
			parent: "root.project.analysis",
			url: "result/:resultId",
			template: "<div>Result: {{AnalysisResultVM.resultId}}<ui-view></ui-view></div>",
			controller: ["$stateParams", function($stateParams){
				this.resultId=$stateParams.resultId;
			}],
			controllerAs: "AnalysisResultVM"				
		});
	}]);
	return module;
});