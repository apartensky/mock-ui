requirejs.config({
	paths : {
		jquery : '//code.jquery.com/jquery-2.1.1' ,
		ng : '//ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular' ,
		'ng-ui-router' :  '//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.11/angular-ui-router' 
	},
	shim : {
		ng : {
			exports : 'angular',
			deps : [ 'jquery' ]
		},
		'ng-ui-router' : {
			deps: ['ng']
		}
		
	}
});

requirejs([ 'ng', 'uirouter-app' ], function(ng, app) {
	
	// Angular bootstrapping
	ng.element(document).ready(function() {
		ng.bootstrap(document, [ app.name ]);
	});
});
