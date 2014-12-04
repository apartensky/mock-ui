define(["ng",        
        "nguirouter", "uibootstrap", "ngresource",        
        "ngmocks", "angularTreeView", "dxTree",
        "app/domain/domain.module",
        "app/views/views.module",
        "app/widgets/components.module",
        "app/backend/storageMock.module",        
        ], function(ng){
	"use strict";
	return ng.module("ngbootstrap-app", ["ui.bootstrap",
	                                     "ngMockE2E",
	                                     "ngResource",
	                                     "ui.router",
	                                     "AxelSoft",
	                                     "dotjem.angular.tree",
	                                     "mui.domain",
	                                     "mui.views",
	                                     "mui.components",
	                                     "mui.storageMock"
	                                     ])
	.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
				
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
	       "EndpointConfig", 
	function ($rootScope, $state, $stateParams
			, EndpointConfig
			) {
		
		EndpointConfig();    
	    
	    $rootScope.$state = $state;
	    $rootScope.$stateParams = $stateParams;
	    
	}]);
	
});