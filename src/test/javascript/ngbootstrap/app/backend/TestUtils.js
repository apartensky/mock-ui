define(["lodash", "app/utils/utils"], function(_, utils){	
	
	describe("Utils Test", function(){		
		var dummy, expectedDummy;
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
			}
		
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
		
	});
});