(function(){	
	"use strict";
//	requirejs.config({
////	    baseUrl: "/wijmo/wijmoreq/",
//		baseUrl: wijmoBaseUrl,
//	    paths: {
//	        "jquery": "jquery-1.9.1.min",
//	        "jquery-ui": "jquery-ui-1.10.1.custom.min",
//	        "jquery.ui": "jquery-ui",
//	        "jquery.mousewheel": "jquery.mousewheel.min",
//	        "globalize": "globalize.min"
//	    }
//	});
	
	function createWijmoCdnPath(wijmolib){
		return 'http://cdn.wijmo.com/amd-js/3.20142.45/'+wijmolib;
	}
	function createWijmoAmdRef(wijmolib){
		this[wijmolib] = createWijmoCdnPath(wijmolib);
	}	
	var paths = {
//		"jquery": createWijmoCdnPath("jquery-1.11.1.min"),
		"jquery": "//code.jquery.com/jquery-2.1.1",			
//		"jquery.cookie": createWijmoCdnPath("jquery.cookie"),
		"jquery.cookie": "//cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie",
//	    "jquery-ui": createWijmoCdnPath("jquery-ui-1.11.0.custom.min"),
//	    "jquery.ui": createWijmoCdnPath("jquery-ui"),
		"jquery-ui": createWijmoCdnPath("jquery-ui-1.11.0.custom.min"),
		"jquery.ui": "//ajax.googleapis.com/ajax/libs/jqueryui/1.11.0/jquery-ui",
		"jquery.bgiframe": createWijmoCdnPath("jquery.bgiframe"),
//	    "jquery.mousewheel": createWijmoCdnPath("jquery.mousewheel.min"),
		"jquery.mousewheel": "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.11/jquery.mousewheel",
	    "globalize": createWijmoCdnPath("globalize.min"),
	    "ng": "//ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular",
	    "ng-ui-router" :  "//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.11/angular-ui-router",
	    "wijmo-ng": "//cdn.wijmo.com/interop/angular.wijmo.3.20142.45",
	    "app": "wijmoreqng-app"
	    	
	};
	
	var wijmoRefs = ["wijmo.wijgrid","wijmo.wijmenu","wijmo.wijtree","wijmo.wijsplitter","wijmo.widget","wijmo.wijutil","wijmo.data","wijmo.wijpager","wijmo.wijinputdate","wijmo.wijinputnumber","wijmo.wijsuperpanel","wijmo.wijinputtext","wijmo.wijlist","wijmo.wijtouchutil","wijmo.wijinputcore","wijmo.wijstringinfo","wijmo.wijinputnumberformat","wijmo.wijinputdateformat","wijmo.wijcalendar","wijmo.wijtabs","wijmo.wijinputdateroller","wijmo.wijinpututility","wijmo.wijpopup","wijmo.wijcharex","wijmo.wijinputtextformat","wijmo.wijtooltip", "wijmo.wijtextbox"];
	var addWijmoRef = createWijmoAmdRef.bind(paths);
	for(var i=0;i<wijmoRefs.length;i++){
		addWijmoRef(wijmoRefs[i]);
	}    
	
	requirejs.config({
			baseUrl: "/wijmo/wijmoreqng",
            paths: paths,
            shim: {
            	ng: {
            		deps: ["jquery"],
            		exports: "angular"
            	},
            	"ng-ui-router": {
            		deps: ["ng"]
            	},
            	"wijmo-ng": {
            		deps: ["ng"].concat(wijmoRefs)
            	}
            },
            packages: [{
            		name: "home",
            		location: "home/",
            		main: "home.module"	
            }]
    });
	
	requirejs(["ng", "app", "home"], function (ng, app) {
		
		ng.element(document).ready(function(){
			console.debug("app", app);
			ng.bootstrap(document, [app.name]);
		});
		
	  });
	
}());