define([], function(){
	var ProjectNodeDirective = function ProjectNodeDirective($compile){
		
		var templateMap = {
			Datasets: "<div>{{node.nodeName}} (datasets)</div>",
			Default: "<project-node-default node='node'></project-node-default>"
		};
		
		return {
			restrict: "AE",
			scope: {
				name: "&",
				data: "=",
				config: "&",
				children: "=",
				node: "="
			},
//			template: "<div>node: {{node.name || node.nodeData.name }}</div>",
			templateUrl: "app/widgets/project/projectTree/_projectNode/templates/projectNode.tpl.html",			
			compile: function(elm, attr){
				link = {
                    post: function (scope, elm, attr, ctrl) {
                    	console.debug("Post LINK: ", scope.node);
                    	var template = templateMap[scope.node.nodeName] || templateMap.Default;
                    	elm.html(template);
                        $compile(elm.contents())(scope);
                    }
				};
				return link;
			}
			
		};
	};
	ProjectNodeDirective.$inject=["$compile"];
	return ProjectNodeDirective;
});