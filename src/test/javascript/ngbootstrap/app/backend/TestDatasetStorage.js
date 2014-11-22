define(["ng", "appjs", "ngmocks"], function(ng, app){	
	function sleep(milliseconds) {
		  var start = new Date().getTime();
		  for (var i = 0; i < 1e7; i++) {
		    if ((new Date().getTime() - start) > milliseconds){
		      break;
		    }
		  }
		}
	
	describe("ProjectStorage Test", function(){
		var $httpBackend, $http, $timeout;
		var datasetStorage, projectStorage, 
			AnnotationSetRepository, EndpointConfig;
		
		beforeEach(module("ngMock"));
		beforeEach(module("mui.domain"));
		beforeEach(module("mui.storageMock"));		
		
		beforeEach(inject(function(_$http_, _$timeout_, _$httpBackend_,
				_EndpointConfig_, _DatasetStorage_, _AnnotationSetRepository_){
			$timeout=_$timeout_;
			$http=_$http_;
			$httpBackend=_$httpBackend_;
			
			datasetStorage=_DatasetStorage_;
			AnnotationSetRepository=_AnnotationSetRepository_;
			_EndpointConfig_();
			
		}));
		it("should find dataset by id in the backend", function(){
			expect(datasetStorage.findById("name20").meta.name).toEqual("name20");			
		});
		
		it("should find dataset by id via repository", function(){
			var value=null;
			
			AnnotationSetRepository.get("name20").then(function(data){				
				expect(data.meta.name).toEqual("name20");
			});
			
			$httpBackend.flush();
			
		});
	});
});