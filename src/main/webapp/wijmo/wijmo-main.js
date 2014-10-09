(function(){
	'use strict';
	requirejs.config({
		baseUrl: '/wijmo',

        paths: {
            'jquery': '//code.jquery.com/jquery-2.1.0.min',            
            'ng': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular',
            'ng-ui-router': '//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.11/angular-ui-router'            
        },
        shim: {
            // Vendor libraries.
            'ng': {
            	'deps': ['jquery'],
            	'exports': 'angular'
            },
    		'ng-ui-router' : {
    			deps: ['ng']
    		}
        }
	});
	
	requirejs(['ng', 'wijmo-app'], function(ng, app){
		ng.element(document).ready(function(){
			ng.bootstrap(document, [app.name]);
		});
	});
}());