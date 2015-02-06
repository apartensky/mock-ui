define(["ng", "lodash"], function(ng, _){
	var module = ng.module("mui.views.project.analysis", []);
	module.config(["$stateProvider", function($stateProvider){
		$stateProvider		
		.state("root.project.analysis", {			
			url: "analysis/{analysisId:int}/{analysisType}",
			parent: "root.project",
//			template: "<div>" +
//						"<project-analysis-parameters parameters=\"ProjectAnalysisVM.analysis.params\"></project-analysis-parameters>" +
//						"<ui-view></ui-view>" +
//					"</div>",
			templateProvider: ["$stateParams", "$http", function($stateParams, $http){
				console.debug("root.project.analysis templateProvider ", $stateParams.analysisType);
				var mapTemplateAnalysisType = {
						"Hierarchical Clustering": "hcl", 
						"LIMMA Differential Expression Analysis": "limma"
				};
				var analysisType = mapTemplateAnalysisType[$stateParams.analysisType];
				var templateUrl="app/views/project/analysis/"+analysisType+"/analysis."+analysisType+".tpl.html";
				console.debug("analysis templateUrl:", templateUrl);
   	     		return $http.get(templateUrl).then(function(response){
   	     			console.debug("analysis templateProvider response:", templateUrl, response);
   	     			return response.data;
   	     		});
			}],
			controller: ["$stateParams", "analysis", function($stateParams, analysis){
				this.analysisId=$stateParams.analysisId;
				this.analysis=analysis;
				
			}],
			controllerAs: "ProjectAnalysisVM",
			resolve: {
				analysis: ["$stateParams", "project", function($stateParams, project){
					console.debug("root.project.analysis resolve", $stateParams, project);
					var analysis = _.find(project.analysis, function(analysis){ return analysis.id===$stateParams.analysisId; });					
					console.debug("root.project.analysis resolve analyis", analysis);
					return analysis;
				}]
			}
		})				
		.state("root.project.analysis.result", {			
			url: "result/:resultId",
			parent: "root.project.analysis",
			template: "<div>Result: {{AnalysisResultVM.resultId}}" +
						"<ui-view></ui-view>" +
					  "</div>",
			controller: ["$stateParams", function($stateParams){
				this.resultId=$stateParams.resultId;
			}],
			controllerAs: "AnalysisResultVM"				
		});
	}]);
	
	module.directive("mevAnalysis", ["$compile", function($compile){
		return {
			restrict: "AE",
			scope: {
				analysis: "=mevAnalysis",				
			},
			template: "<div></div>",			
			controller: function(){},			
			controllerAs: "MevAnalysisVM",
			link: function(scope, elm, attr, ctrl){
				
			}
		};
	}]);
	
	return module;
});