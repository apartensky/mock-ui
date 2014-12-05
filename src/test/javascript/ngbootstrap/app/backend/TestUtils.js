define(["lodash", "app/utils/utils"], function(_, utils){	
	
	describe("Utils Test", function(){		
		var dummy, expectedDummy, arrayDummy;
		beforeEach(function(){
			dummy = {
				name: "root",
				node1: {
					name: "node1",
					node11: {
						name: "node11",
					},
					node12: {
						name: "node12",
					} 
				},
				node2: {
					name: "node2",
					node21: {
						name: "node21",
					},
					node22: {
						name: "node22",
					},
					node23: {
						name: "node23",
					}
				}
			};
			expectedDummy = {
				name: "rootx",
				node1: {
					name: "node1x",
					node11: {
						name: "node11x",
					},
					node12: {
						name: "node12x",
					} 
				},
				node2: {
					name: "node2x",
					node21: {
						name: "node21x",
					},
					node22: {
						name: "node22x",
					},
					node23: {
						name: "node23x",
					}
				}
			};
		
			arrayDummy={
					name: "root",
					nodes: [{
							name: "node1",
							subnodes:[{
									name: "node11",
								},
								{
									name: "node12",
								}]  
						},
						{
							name: "node2",
							subnodes: [{
									name: "node21",
								},
								{
									name: "node22",
								},
								{
									name: "node23",
								}]							
						}]										
				};
		});
				
		it("should traverse the dummy object", function(){
			var result = utils.traverse1(dummy, 
				function(obj, path){
					console.debug("*****", _.map(path, "name").join("/"));
					_.mapValues(obj, function(value, key, node){
						if(!_.isObject(value)){					
							node[key]=value+"x";
						}
					});
				});
			expect(dummy).toEqual(expectedDummy);
		});

		it("should traverse (version 2) the dummy object", function(){
			var result = utils.traverse(dummy, 
				function(obj, path){
					console.debug("*****", path.join("/"));
					_.mapValues(obj, function(value, key, node){
						if(!_.isObject(value)){					
							node[key]=value+"x";
						}
					});
				});
			expect(dummy).toEqual(expectedDummy);
		});

		it("should traverse (rev) the dummy object", function(){
			var result = utils.traverseRev(dummy, 
				function(obj, path){
					console.debug("*****", path.join("/"));
					_.mapValues(obj, function(value, key, node){
						if(!_.isObject(value)){					
							node[key]=value+"x";
						}
					});
				});
			expect(dummy).toEqual(expectedDummy);
		});
		
		it("should return only objects", function(){
			var q=_.filter(_.values(dummy), _.isObject);
			expect(q).toEqual([dummy.node1, dummy.node2]);
		});	

		
		it("should modify only the property", function(){
			expect(
					_.mapValues(dummy, function(value, key, node){
						if(!_.isObject(value)){
							value=value+"x";
							node[key]=value;
//							console.log("***", key, value);							
						}
						return value; 
					})
			).toEqual({name: "rootx", node1: dummy.node1, node2: dummy.node2});
			expect(dummy.name).toEqual("rootx");
		});
	
		it("should find object from url", function(){
			expect(utils.urlToObj("node1/node11".split("/"),  dummy)).toBe(dummy.node1.node11);
		})
		
		it("should find object inside an array property from url", function(){
			expect(utils.urlToArray("nodes/node1/subnodes/node11".split("/"),  arrayDummy)).toBe(arrayDummy.nodes[0].subnodes[0]);
		})
		
		it("should find array property from url", function(){
			expect(utils.urlToArray("nodes/node1/subnodes".split("/"),  arrayDummy)).toBe(arrayDummy.nodes[0].subnodes);
		})
		
		it("should find array property from url, and then find an object", function(){
			var subnodes = utils.urlToArray("nodes/node1/subnodes".split("/"),  arrayDummy)
			expect(subnodes).toBe(arrayDummy.nodes[0].subnodes);
			expect(utils.urlToArray(["node11"], subnodes)).toBe(arrayDummy.nodes[0].subnodes[0]);
		})
		
		it("should fail to find an item in an array property from url", function(){
			expect(utils.urlToArray("nodes/node1/subnodes/x".split("/"),  arrayDummy)).toBe(undefined);			
		})
		
		
		it("should test the lodash assign", function(){
			var obj1 = {name: "1"};
			var obj2 = {name: "2"};
			_.merge(obj1, obj2);
			expect(obj1).toEqual({name: "2"});
		});
		
		var mockDataset={
				id: 1, 
				dataset:[{
					id: 11, 
					column: {
						keys: ["A", "B", "C"]
					},
					row: {
						keys: ["1", "2", "3"]
					}
				},
				{
					id: 12,
					column: {
						keys: ["X", "Y", "Z"]
					},
					row: {
						keys: ["10", "20", "30"]
					}
				}]
			};
		it("walks the dataset tree", function(){
			utils.walkObjectTree(mockDataset, function(obj, path){
				console.info("path ", path.join("."), obj);
				return true;
			});
		});
		
		var mockDatasetTree={
				"dataset": {},
				"dataset\.[0\-9]+": {},
				"dataset\.[0\-9]+\.column": {},
				"dataset\.[0\-9]+\.column.keys": {},
				"dataset\.[0\-9]+\.row": {},
				"dataset\.[0\-9]+\.row.keys": {},
				
		}
		it("tests the regex for matching treenodes", function(){
			expect(_.isArray("dataset.0".match("dataset\.[0-9]"))).toBe(true);
			expect(_.isArray("dataset.0.column".match("dataset\.[0-9]\.column"))).toBe(true);
			expect(_.isArray("dataset.0.column".match("dataset\.[0-9]$"))).toBe(false);
		})
		it("print the dataset tree to display", function(){
			utils.walkObjectTree(mockDataset, function(obj, path){
				var nodePath=path.join(".");				
				var nodeDef = _.find(mockDatasetTree, function(value, key){
					return (nodePath.match(key+"$")!==null);	
				});
				if(nodeDef){
					console.info("path ", path.join("."), obj);
					return true;
				}
//				console.info("notp:", path.join("."), obj);
				return false;
			})
		});
		
		it("assemble the dataset node tree", function(){
			var tree={
					name: "root",
					nodes: []
			};
			var q=[];			
			var cur=tree;
			var prev;
			var newNode;
			var prevPathLength=0;
			utils.walkObjectTree(mockDataset, function(obj, path){
				var nodePath=path.join(".");				
				var nodeDef = _.find(mockDatasetTree, function(value, key){
					return (nodePath.match(key+"$")!==null);	
				});
				if(nodeDef){
					console.info("path ", path.join("."), obj);
					if(path.length>prevPathLength){
						newNode={name: path[path.length-1], nodes:[]};
						cur.nodes.push(newNode);
						prev=cur;
						cur=newNode;
						q.push(newNode);
					}else if(path.length===prevPathLength){
						newNode={name: path[path.length-1], nodes:[]};						
						prev.nodes.push(newNode);
						cur=newNode;	
						q.pop();
					}else{
						newNode={name: path[path.length-1], nodes:[]};
						for(i=0;i<=prevPathLength-path.length;i++){							
							prev=q.pop();
						}
						prev.nodes.push(newNode);						
						cur=newNode;
						
						
					}
					prevPathLength=path.length;
					return true;
				}
				
//				console.info("notp:", path.join("."), obj);
				return false;
			});
			console.debug("TREE", tree);
		});
		
	});
});