define(["ng",        
        "nguirouter", "uibootstrap", 
        "ngmocks",
        "app/domain/domain.module",
        "app/views/views.module",
        "app/components/components.module",
        "app/backend/storageMock.module"
        ], function(ng){
	"use strict";
	return ng.module("ngbootstrap-app", ["ui.bootstrap",
	                                     "ngMockE2E",
	                                     "ui.router",	                                     
	                                     "mui.domain",
	                                     "mui.views",
	                                     "mui.components",
	                                     "mui.storageMock"
	                                     ])
	.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
				
		$urlRouterProvider.otherwise("/home");		
		$stateProvider.state("about", {
			url: "/about",
			templateUrl: "app/views/about/templates/about.tpl.html"
		})
		.state("contact", {
			url: "/contact",
			templateUrl: "app/views/contact/templates/contact.tpl.html"
		});
	}])
	.config(function($provide) {
	    $provide.decorator('$httpBackend', function($delegate) {
	        var proxy = function(method, url, data, callback, headers) {
	            var interceptor = function(status, data, headers) {
	                var _this = this,
	                    _arguments = arguments;
	                
	                //most likely returning a template, no delay
	                if(typeof data==='string' && data.charAt(0)==="<"){		                
		                callback.apply(_this, arguments);		                
	                }else{
	                	setTimeout(function() {
		                    callback.apply(_this, _arguments);
		                }, 700);	
	                }	                
	            };
	            return $delegate.call(this, method, url, data, interceptor, headers);
	        };
	        for(var key in $delegate) {
	            proxy[key] = $delegate[key];
	        }
	        return proxy;
	    });
	})	
	.run(["$rootScope", "$state", "$stateParams",
	       "$httpBackend", "AnnotationStorage", "DashboardStorage", "ProjectStorage",
	function ($rootScope, $state, $stateParams
			, $httpBackend, AnnotationStorage, DashboardStorage, ProjectStorage
			) {
		
		$httpBackend.when("GET", /app\//).passThrough();
		$httpBackend.when("GET", /vendor\//).passThrough();
		
	    $httpBackend.whenGET('api/annotations').respond(function(method, url, data) {
	        var data = AnnotationStorage.getAll();
	        return [200, data, {}];
	    });
	    
	    $httpBackend.whenGET('api/dashboard').respond(function(method, url, data) {
	    	var respnose = DashboardStorage.getAll();
	        return [200, respnose, {}];
	    });	    
	    $httpBackend.whenPUT('api/dashboard').respond(function(method, url, data) {
	        var response = DashboardStorage.put(JSON.parse(data));
	        return [200, response, {}];
	    });
	    
	    $httpBackend.whenGET('api/project').respond(function(method, url, data) {
	    	var respnose = ProjectStorage.getAll();
	        return [200, respnose, {}];
	    });	    
	    $httpBackend.whenPUT('api/project').respond(function(method, url, data) {
	        var response = ProjectStorage.put(JSON.parse(data));
	        return [200, response, {}];
	    });
	    
	    
	    $rootScope.$state = $state;
	    $rootScope.$stateParams = $stateParams;
	    
	    
	    /*
	    $httpBackend.whenGET(/\/games\/\d+/).respond(function(method, url, data) {
	        // parse the matching URL to pull out the id (/games/:id)
	        var gameid = url.split('/')[2];
	        
	        var game = ServerDataModel.findOne(gameid);

	        return [200, game, {}];
	    });

	    // this is the creation of a new resource
	    $httpBackend.whenPOST('/games').respond(function(method, url, data) {
	        var params = angular.fromJson(data);

	        var game = ServerDataModel.addOne(params);
	        
	        // get the id of the new resource to populate the Location field
	        var gameid = game.gameid;
	        
	        return [201, game, { Location: '/games/' + gameid }];
	    });

	    // this is the update of an existing resource (ngResource does not send PUT for update)
	    $httpBackend.whenPOST(/\/games\/\d+/).respond(function(method, url, data) {
	        var params = angular.fromJson(data);

	        // parse the matching URL to pull out the id (/games/:id)
	        var gameid = url.split('/')[2];
	        
	        var game = ServerDataModel.updateOne(gameid, params);
	        
	        return [201, game, { Location: '/games/' + gameid }];
	    });
	    
	    // this is the update of an existing resource (ngResource does not send PUT for update)
	    $httpBackend.whenDELETE(/\/games\/\d+/).respond(function(method, url, data) {
	        // parse the matching URL to pull out the id (/games/:id)
	        var gameid = url.split('/')[2];
	        
	        ServerDataModel.deleteOne(gameid);
	        
	        return [204, {}, {}];
	    });    
	    
	    $httpBackend.whenGET(/templates\//).passThrough();
	   */
	}]);
	
});