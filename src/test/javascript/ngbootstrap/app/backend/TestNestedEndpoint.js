define(["ng", "appjs", "ngmocks"], function(ng, app){	
	function sleep(milliseconds) {
		  var start = new Date().getTime();
		  for (var i = 0; i < 1e7; i++) {
		    if ((new Date().getTime() - start) > milliseconds){
		      break;
		    }
		  }
		}
	
	describe("Endpoint Test", function(){
		var $httpBackend, $http, $timeout;		
		var schema;
		beforeEach(module("ngMock"));
		beforeEach(module("mui.domain"));
		beforeEach(module("mui.storageMock"));		
		
		beforeEach(inject(function(_$http_, _$timeout_, _$httpBackend_
				, _RootStorage_, _EndpointConfig_){
			$timeout=_$timeout_;
			$http=_$http_;
			$httpBackend=_$httpBackend_;			
			_EndpointConfig_();
			
			schema={
				annotations: {},
				dashboard: {},
				datasource: {
					dataset: {}
				},
				project:{
					analysis: {
						result: {}
					}			
				}				
			};
			
//			Endpoint.registerRoute("annotations/:name", {});				
		}));
		
		
		it("should find annotations by id via $http", function(){
			$http.get("api/annotations/name20").success(function(data, status, headers, config){
				expect(data).toEqual({
					meta: {
						name: "name20",
						description: "just a '2'",
						numberOfSamples: 20
					},
					data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
				})
			})
			$httpBackend.flush();			
		});
		
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
		
		})
				
		function traverse(obj, callback, path){
						
			var path = path || [];
			//remember the current path
			path.push(obj);
			//do work
			callback(obj, path);
			
			//find child objects
			var chldren = _.filter(_.values(obj), _.isObject);
			if(chldren.length>0){	
				_.map(chldren, function(child){							
					traverse(child, callback, path);
					path.pop();					
				});
			}else{					
				return obj;
			}
		};
		
		it("should traverse schema object", function(){
			var result = _.mapValues(dummy, function(node){							
							return node.x="x";
						});	
//			expect(result).toEqual(expectedDummy);
		});
		
		it("should traverse the dummy object", function(){
			var result = traverse(dummy, 
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