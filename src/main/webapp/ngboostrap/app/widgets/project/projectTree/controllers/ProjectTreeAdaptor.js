define(["lodash", "app/utils/utils"], function(_,utils){
	var ProjectTreeAdaptor = function ProjectTreeAdaptor(ProjectTreeSchema){
		
		return function(project){
			var tree={name: project.name, nodes:[]};				
			
			
			function createContainer(key, acc){
				var newNode = {name: key, nodes: []};
				acc.nodes.push(newNode);
				console.debug("node: "+key);				
				return newNode;
			}
			
			function createItemNode(item){
				return {name: item.name, nodes: []};
			}
			
			function traverseObject(node, acc){
				_.mapValues(node, function(value, key, obj){
					if(key==="name" || key==="values" || key==="column" || key==="row"){
//						console.debug("name", node.name);
					}else if(_.isArray(value)){
						var containerNode = createContainer(key, acc);						
						_.map(value, function(item, index){
							var itemNode = createItemNode(item);
							containerNode.nodes.push(itemNode);
							traverse(item, itemNode);
						});
					}
				});	
			};
			function traverse(node, acc){
				if(_.isArray(node)){
					_.map(node, function(item){
						traverseObject(node, acc);
					});
				}else if(_.isObject(node)){					
					traverseObject(node, acc);							
				}
			}
			
			traverse(project, tree);			
			console.debug("Tree", tree);	
			return tree;
		};
	}
	
	ProjectTreeAdaptor.$inject=["ProjectTreeSchema"];
	return ProjectTreeAdaptor;
});