define(["ng", "appjs", "app/utils/utils", "ngmocks"], function(ng, app, utils){	
	
	describe("Nested Endpoint Test", function(){
		var $httpBackend, $http, $timeout;		
		var RootStorage, Endpoint, schema;
		beforeEach(module("ngMock"));
		beforeEach(module("mui.domain"));
		beforeEach(module("mui.storageMock"));		
		
		beforeEach(inject(function(_$http_, _$timeout_, _$httpBackend_
				, _RootStorage_, _Endpoint_){
			$timeout=_$timeout_;
			$http=_$http_;
			$httpBackend=_$httpBackend_;						
			Endpoint=_Endpoint_;
			RootStorage=_RootStorage_;
			RootStorage.setData({
				datasource: [],
				dashboard: [],
				project: [],					
				annotations: []
			});
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
		
		
		it("should traverse schema object", function(){
			
			utils.traverse(schema, function(obj, path){
//					console.debug("*****", path.join("\\/\\w+\\/"));						
				});			
		});
		
		function doHttp(method, url, data){
			return $http[method](url, data).success(function(data, status, headers, config){
				console.debug("*success on: ", url, data, status);
				return data;
			}).error(function(data, status, headers, config){
				console.error("Error on " + url + ":", data, status, headers, config);
				return data;
			});			
		}
		
		it("should parse schema", function(){
			Endpoint.parseSchema(schema);
			//call each end point to make sure no errors
			var counter=0;
			var acc=[];
			
			//test the first level
			_.mapValues(schema, function(value, path, node){				
				var collectionUrl="api/"+path;
				var entityUrl=collectionUrl+"/"+counter;
				var tmp = {"id": counter};
				var childPrp = _.keys(schema[path])[0];
				if(childPrp)
					tmp[childPrp]=[];
				
				doHttp("put", entityUrl, tmp).then(function(response){
					expect(response.data).toEqual(tmp);					
					acc.push({prop: path, id: counter});
				});
				$httpBackend.flush();
				
				doHttp("get", collectionUrl).then(function(response){
					expect(response.data).toEqual([tmp]);					
				});
				$httpBackend.flush();
				counter++;
			});

			//Test second level deep
			//acc contains the id and name of each object at the first level
			//ex: acc[{prop: datasource, name: 2}]
			_.map(acc, function(obj){
				_.mapValues(schema[obj.prop], function(value, path, node){				
					var collectionUrl="api/"+obj.prop+"/"+obj.id+"/"+path;
					var entityUrl=collectionUrl+"/"+counter;
					doHttp("put", entityUrl, {id: counter}).then(function(response){
						expect(response.data).toEqual({"id":counter});									
					});
					$httpBackend.flush();
					
					doHttp("get", collectionUrl).then(function(response){
						expect(response.data).toEqual([{"id":counter}]);					
					});
					$httpBackend.flush();
					counter++;
				});
			});
			
			var entityUrl="datasource/2/dataset/"+counter;
			doHttp("put", entityUrl, {id: counter}).then(function(response){
				expect(response.data).toEqual({id: counter});
			});
			$httpBackend.flush();			
			doHttp("get", entityUrl).then(function(response){
				expect(response.data).toEqual({id: counter});
			});
			$httpBackend.flush();
			counter++;
			
			
			
		});
//		
//		it("should find annotations by id via $http", function(){
//			Endpoint.parseSchema(schema);
//			$http.get("api/annotations/name20").success(function(data, status, headers, config){
//				expect(data).toEqual({
//					meta: {
//						name: "name20",
//						description: "just a '2'",
//						numberOfSamples: 20
//					},
//					data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//				})
//			})
//			$httpBackend.flush();			
//		});		
		
	});
});