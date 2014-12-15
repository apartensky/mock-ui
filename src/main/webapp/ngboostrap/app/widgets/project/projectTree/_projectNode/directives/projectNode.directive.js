define([], function(){
	var ProjectNodeDirective = function ProjectNodeDirective($compile){
		
		function initBootstrapTree(){
			console.debug("INITIT Bootstrap TREE");
			$('.tree > ul').attr('role', 'tree').find('ul').attr('role', 'group');
			$('.tree').find('li:has(ul)').addClass('parent_li').attr('role', 'treeitem').find(' > span').attr('title', 'Collapse this branch').on('click', function (e) {
		        var children = $(this).parent('li.parent_li').find(' > ul > li');
		        if (children.is(':visible')) {
		    		children.hide('fast');
		    		$(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
		        }
		        else {
		    		children.show('fast');
		    		$(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
		        }
		        e.stopPropagation();
		    });			
		}
		
		var templateMap = {
			Datasets: "<div>{{node.nodeName}}</div>",
//			Analysis: "<project-analysis analysis=\"node.nodeData\"></project-analysis>",
			Default: "<project-node-default node='node' ></project-node-default>"
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
			replace: true,
			template: "<span ng-click='vm.nodeclick($event)' ng-show='vm.visible' class='nodeWrapper {{node.nodenode.name || node.nodeName}}'></span>",
//			templateUrl: "app/widgets/project/projectTree/_projectNode/templates/projectNodeDefault.bootstrapTree.tpl.html",
//			templateUrl: "app/widgets/project/projectTree/_projectNode/templates/projectNodeDefault.tpl.html",			
			compile: function(elm, attr){
				link = {
                    post: function (scope, elm, attr, ctrl) {
                    	
                    	scope.vm={
                    			nodeclick: function(e){
//                    				alert(scope.node.nodeName);
                    				var nodeWrapper=$(e.target).closest('.nodeWrapper'); 
                    				var parent = nodeWrapper.parent('li.parent_li');
                			        var children = parent.find(' > ul > li');
                			        if (children.is(':visible')) {
                			    		children.hide('fast');
                			    		nodeWrapper.attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
                			        }
                			        else {
                			    		children.show('fast');
                			    		nodeWrapper	.attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
                			        }
                    			    e.stopPropagation();
                    			    			
//                    				scope.vm.visible= !scope.vm.visible;
                    			},
                    			visible: true
                    	}
                    	
                    	console.debug("Post LINK: ", scope.node);
                    	var template = templateMap[scope.node.nodeName] || templateMap.Default;
//                    	template="<i class='icon-minus-sign'></i>"+template;
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