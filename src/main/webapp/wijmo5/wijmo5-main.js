(function(){
	'use strict';
	requirejs.config({
		baseUrl: '/',

        paths: {
            'jquery': '//code.jquery.com/jquery-2.1.0.min',
            'wijmo': '//cdn.wijmo.com/5.20142.15/controls/wijmo.min',
            'ng': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular',
            'wijmo-ng': '//cdn.wijmo.com/5.20142.15/interop/angular/wijmo.angular.min',
            'ng-ui-router': '//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.11/angular-ui-router',
            'app': 'wijmo5-app'
            	
        },
        shim: {
            // Vendor libraries.
            'ng': {
            	'deps': ['jquery']
            },
            'wijmo': {
            	'deps': ['jquery']
            },
            'wijmo-ng': {
            	'deps': ['ng','wijmo']
            }
        }
	});
	
	requirejs(['ng', 'app'], function(ng, app){
		ng.element(document).ready(function(){
			ng.bootstrap(document, [app.name]);
		});
	});
}());