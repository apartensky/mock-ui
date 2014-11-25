define(["ng", "appjs", "app/utils/utils", "ngmocks"], function(ng, app, utils){	
	
	describe("Nested Endpoint Test", function(){
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
		
		it("should traverse schema object", function(){
			var result = utils.traverse(schema, 
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
		
		
		
	});
});