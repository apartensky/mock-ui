define(["ng", "lodash", "appjs", "app/utils/utils", "ngmocks", "ngresource"], function(ng, _){
	describe("Test DatasetResource", function(){
		var $http, $httpBackend, $timeout, DatasetResourceRepository;
		
		beforeEach(module("ngMock"));
		beforeEach(module("ngResource"));
		beforeEach(module("mui.domain"));
		beforeEach(module("mui.storageMock"));		
				
		beforeEach(inject(function(_$http_, _$httpBackend_, _EndpointConfig_
				, _RootStorage_, _DatasetRepository_ , _$timeout_){
			
			_EndpointConfig_();
			
			$http=_$http_;
			$httpBackend=_$httpBackend_;								
			$timeout=_$timeout_;
			DatasetRepository=_DatasetRepository_;
		}));
		
		it("gets dataset values", function(){
			
			$http.get("api/dataset/1/values").then(function(resposne){
				console.debug("values:", resposne.data);
				expect(_.isArray(resposne.data)).toBe(true);
			});				
			$httpBackend.flush();
		});
	});
});