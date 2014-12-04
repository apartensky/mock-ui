define(["ng", "lodash", "ng", "ngmocks", "ngresource", "appjs"], function(ng, _){
	describe("Play with $resource", function(){
		var $http, $resource, $httpBackend, $timeout;
		beforeEach(module("ngMock"));
		beforeEach(module("ngResource"));
		beforeEach(module("mui.domain"));
		beforeEach(module("mui.storageMock"));		
		
		
		var mockBabyJson;
		function Baby(raw){
			ng.extend(this, raw);
			this.sleep=function(){
				return "can't cry, sleeping";
			};
		}
		Baby.prototype.cry=function(){
			if(this.hungry)
				return "weh";
			else
				return "meh";
		};
		Baby.build=function(data){
			return new Baby(data);
		};
		
		beforeEach(inject(function($injector, _$http_, _$resource_, _$httpBackend_, _$timeout_){
			console.debug("beforeEach inject");
			$http=_$http_;
			$resource=_$resource_;
			$httpBackend=_$httpBackend_;
			$timeout=_$timeout_;
			
			//register mock http handlers
			$httpBackend.whenGET("/api/mock").respond(function(){
				return [200, mockBabyJson];
			});
			$httpBackend.whenPOST("/api/mock").respond(function(method, url, data){
				console.debug("POST: ", data)
				return [200, JSON.parse(data)];
			});
			
			mockBabyJson={ id: 1, name: "Olivia", hungry: true};
			
		}));
		beforeEach(function(){
			this.addMatchers({
			      toEqualData: function(expected) {
			        return ng.equals(this.actual, expected);
			      }
			    });
		});
		afterEach(function() {
	     $httpBackend.verifyNoOutstandingExpectation();
	     $httpBackend.verifyNoOutstandingRequest();
	   });
		function success(){
			console.debug("Olivia is a success", response);
			return response.data;			
		}
		function failure(){
			console.error("Olivia will try again", response);
			return response.data;			
		}
		it("gets the note via $http (smoke test)", function(){
			var promise = $http.get("/api/mock", success, failure);
			
			promise.then(function(response){
				console.debug("Olivia is here", response.data);
				expect(response.data).toEqual(mockBabyJson);
				expect(response.data.name).toBe("Olivia");				
			});
			
			$httpBackend.expectGET("/api/mock");
			$httpBackend.flush();
		});
		
		it("gets the note via $resource (smoke test)", function(){
			//use BabyModel instead of Baby (name Baby is taken by the $http model version)
			var BabyModel = $resource("/api/mock", {}, success, failure);
			var olivia = BabyModel.get({});
			olivia.$promise.then(function(response){
				console.debug("Olivia is here", response);
				expect(response).toEqualData(mockBabyJson);
				expect(response.name).toBe("Olivia");				
			});
			$httpBackend.expectGET("/api/mock");
			$httpBackend.flush();
			//double check
			console.debug("Olivia is here, again", olivia);
			expect(olivia).toEqualData(mockBabyJson);
			expect(olivia.name).toBe("Olivia");		
			
			//we have $save method available, so test drive it
//			olivia.name = "Katya";
//			olivia.$save().then(function(response){
//				console.debug("Olivia is here, going by Katya now", response);
//				expect(response).toEqualData(olivia);
//				expect(response.name).toBe("Katya");
//			});
//			$httpBackend.expectPOST("/api/mock");
//			$httpBackend.flush();
			
		});
		
		
		//pros
		//- returns objects of typ "Baby" not some "Resource"
		//- the Baby model is a nice construction function, not a mixin
		//- the Baby model is created independently of any ng services (i.e. $resource)
		//- returns a promise
		//cons
		//- must code $save, $delete, $query, $remove 
		//  (although this can be done once in a superclass for default values)
		//- returns a promise
		//- the $http service dictates the continuation function signature: function(response.data, response.headers, etc)
		//  instead of just returning the object (this can also be solved by creating and resolving our own promise
		it("creates a rich model using $http and transformResponse()", function(){
			var promise = $http.get("/api/mock", {transformResponse: Baby.build}, success, failure).success(function(response){
				return response.data;
			});
			promise.then(function(response){				
				console.debug("A crying baby:", response);
				expect(response.data).toEqualData(mockBabyJson);
				expect(response.data.cry()).toBe("weh");
				expect(response.data.sleep()).toBe("can't cry, sleeping");				
				expect(response.data instanceof Baby).toBe(true);
			});
			$httpBackend.flush();
		});
		
		
		//pros
		//$save, $delete, $query are available out of the box
		//cons
		//$save uses POST method, the put must be code manually in something like the $update method
		//mixin model, instead of constructor function
		//models come back as instanceof Resource 
		it("creates a rich model using $resource and prototype decoration", function(){
			
			var BabyModel = $resource("/api/mock", {}, success, failure);
			//In this case, Baby is used as a mixin (or trait) to add intelligence to the model			
			ng.extend(BabyModel.prototype, Baby.prototype);
			
			var olivia = BabyModel.get({});
			olivia.$promise.then(function(response){				
				console.debug("A resourcefylly crying baby:", response);
				expect(response.cry()).toBe("weh");
				expect(response).toEqualData(mockBabyJson);
				expect(response.name).toBe("Olivia");
				expect(response.data instanceof BabyModel).toBe(false);
				console.debug("Typeof ", BabyModel.prototype.constructor.name);
				//throws an error
				//expect(response.data instanceof BabyModel.prototype).toBe(false);
				//this is the only way to check the type, and it's not useful to know that it'a Resource 
				console.debug("Typeof ", BabyModel.prototype.constructor.name);
				expect(BabyModel.prototype.constructor.name).toBe("Resource");
			});
			$httpBackend.expectGET("/api/mock");
			$httpBackend.flush();
			
			//double check
			console.debug("Olivia is here, again", olivia);
			expect(olivia).toEqualData(mockBabyJson);
			expect(olivia.name).toBe("Olivia");	
			
			//we have $save method available, so test drive it
			olivia.name = "Katya";
			olivia.$save().then(function(response){
				console.debug("Olivia is here, going by Katya now", response);
				expect(response).toEqualData(olivia);
				expect(response.name).toBe("Katya");
			});
			$httpBackend.expectPOST("/api/mock");
			$httpBackend.flush();
			
		});
		
		it("creates a rich model using $resource and transformResponse", function(){
			
			var BabyModel = $resource("/api/mock", {}, {get:{transformResponse: Baby.build}}, success, failure);
			//In this case, Baby is used as a mixin (or trait) to add intelligence to the model
//			Baby.call(BabyModel.prototype);
			
			var olivia = BabyModel.get({});
			olivia.$promise.then(function(response){
				console.debug("Olivia transforms into a crying baby", response);
				//cry is defined in the Baby.prototype, so it is not avaiable with the "transformResposne" approach
				expect(function(){response.cry();}).toThrow("undefined is not a function");
				//sleep is defined on the Baby instance (using 'this'), 
				//so it gets copied to the resulting Resource object and is available to us
				//(although slower than it's prototype counterpart
				expect(response.sleep()).toBe("can't cry, sleeping");				
				expect(response).toEqualData(mockBabyJson);
				expect(response.name).toBe("Olivia");
				expect(response.data instanceof BabyModel).toBe(false);
				console.debug("Typeof ", BabyModel.prototype.constructor.name);
				//this is the only way to check the type, and it's not useful to know that it'a Resource 
				console.debug("Typeof ", BabyModel.prototype.constructor.name);
				expect(BabyModel.prototype.constructor.name).toBe("Resource");
			});
			$httpBackend.expectGET("/api/mock");
			$httpBackend.flush();
			
			//double check
			console.debug("Olivia is here, again", olivia);
			expect(olivia).toEqualData(mockBabyJson);
			expect(olivia.name).toBe("Olivia");	
			
			//we have $save method available, so test drive it
//			olivia.name = "Katya";
//			olivia.$save().then(function(response){
//				console.debug("Olivia is here, going by Katya now", response);
//				expect(response).toEqualData(olivia);
//				expect(response.name).toBe("Katya");
//			});
//			$httpBackend.expectPOST("/api/mock");
//			$httpBackend.flush();
			
		});
	
		
	});
});