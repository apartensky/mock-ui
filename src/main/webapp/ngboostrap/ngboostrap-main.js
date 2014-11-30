(function(){
	
	requirejs.config({
		basePath: "/ngboostrap",
		paths: {
			jquery : ["//code.jquery.com/jquery-2.1.1", "vendor/jquery/jquery-2.1.1"],
			ng : ["//ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular" , "vendor/angularjs/angular"],
			uibootstrap: ["vendor/uibootstrap/ui-bootstrap-0.11.2.custom"],
			nguirouter :  ["vendor/uirouter/angular-ui-router", "//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.12/angular-ui-router"],
			ngresource: ["vendor/angularjs/angular-resource"],
			appjs: ["app/ngbootstrap-app"],
			q: ["vendor/q/q.hack"],
			ngmocks: ["vendor/angularjs/angular-mocks"],
			underscore: ["vendor/underscore/underscore"],
			lodash: ["vendor/lodash/lodash"],
			classjs: ["vendor/classjs/Class"],
		},
		shim: {
			ng: {
				deps: ["jquery"],
				exports: "angular"
			},
			ngmocks: {
				deps: ["ng"]
			},
			uibootstrap: {
				deps: ["ng"]
			},
			nguirouter: {
				deps: ["ng"]
			},
			q: {
				deps: ["ng"],
				exports: "q"
			},
			ngresource: {
				deps: ["ng"]
			}
			
		}
	});
	
	requirejs(["ng", "appjs"], function(ng, app){
		ng.element(document).ready(function(){
			ng.bootstrap(document, [app.name]);
		});
	});
	
}());