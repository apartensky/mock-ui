define(["ng", "./RecursiveTreeMixin"], 
function(ng, RecursiveTreeMixin) {
	var ProjectTreeVM = function ProjectLabelVM(Navigator, ProjectTreeAdaptor, $modal, $scope, $elem, $attr) {		
//		RecursiveTreeMixin.call(this);		
		$scope.delete = function(data) {
	        data.nodes = [];
	    };
	    $scope.add = function(data, nodeSubType) {
	        var post = data.nodes.length + 1;
	        var newName = data.name + '-' + post;
	        data.nodes.push({name: newName+"-"+nodeSubType,nodes: []});
	    };
	    
//	    $scope.tree = [{name: "prefix", nodes: []}, {name: $scope.nodeType, nodes: [{name: "Item 1"}, {name: "Item 2"}]}];
//	    var thepromise = $scope.project.$promise || $scope.project;
//	    thepromise.then(
//	    		function(response){
//	    			console.debug("project view response:", response);
//	    			$scope.tree=[ProjectTreeAdaptor(response)];
//	    		})
//	    $scope.rootNode={name: "root", dataset:[{name: "node1", result:[{name: "result1.1"}, {name: "result1.2"}]}, {name: "node2", dataset: [{name: "node2.1"}]}]};
	    $scope.tree=ProjectTreeAdaptor($scope.project).nodes;
	    $scope.script_id="tree_item_renderer.html";
//	    $scope.script_id=$scope.nodeType+".html";
	}	
	
	ProjectTreeVM.$inject=["Navigator", "ProjectTreeAdaptor", "$modal", "$scope", "$element", "$attrs"];
	return ProjectTreeVM;
});