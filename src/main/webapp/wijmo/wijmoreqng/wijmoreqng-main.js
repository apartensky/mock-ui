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
//	    "jquery.mousewheel": createWijmoCdnPath("jquery.mousewheel.min"),
		"jquery.mousewheel": "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.11/jquery.mousewheel",
	    "globalize": createWijmoCdnPath("globalize.min"),
//	    "ng": ""
	};
	var addWijmoRef = createWijmoAmdRef.bind(paths);
	
	addWijmoRef("wijmo.wijgrid");
	addWijmoRef("wijmo.widget");
	addWijmoRef("wijmo.wijutil");
	addWijmoRef("wijmo.data");
	addWijmoRef("wijmo.wijpager");
	addWijmoRef("wijmo.wijinputdate");
	addWijmoRef("wijmo.wijinputnumber");
	addWijmoRef("wijmo.wijsuperpanel");
	addWijmoRef("wijmo.wijinputtext");
	addWijmoRef("wijmo.wijlist");
	addWijmoRef("wijmo.wijtouchutil");
	addWijmoRef("wijmo.wijinputcore");
	addWijmoRef("wijmo.wijstringinfo");
	addWijmoRef("wijmo.wijinputnumberformat");
	addWijmoRef("wijmo.wijinputdateformat");
	addWijmoRef("wijmo.wijcalendar");
	addWijmoRef("wijmo.wijtabs");
	addWijmoRef("wijmo.wijinputdateroller");
	addWijmoRef("wijmo.wijinpututility");
	addWijmoRef("wijmo.wijpopup");
	addWijmoRef("wijmo.wijcharex");
	addWijmoRef("wijmo.wijinputtextformat");
	addWijmoRef("wijmo.wijtooltip");	
        
	requirejs.config({
            paths: paths
    });
	
	requirejs(["wijmo.wijgrid"], function () {
	    
	    $(document).ready(function () {
	        $("#demo-grid").wijgrid({
	            allowSorting: true,
	            allowPaging: true,
	            pageSize: 3,
	            data: [
	                [27, 'Canada', 'Adams, Craig', 'RW'],
	                [43, 'Canada', 'Boucher, Philippe', 'D', 'R'],
	                [24, 'Canada', 'Cooke, Matt', 'LW', 'L'],
	                [87, 'Canada', 'Crosby, Sidney (C)', 'C', 'L'],
	                [1, 'United States', 'Curry, John', 'G', 'L'],
	            ],
	            columns: [
	                {headerText: "Number"},
	                {headerText: "Nationality"},
	                {headerText: "Player"},
	                {headerText: "Position"}
	            ]
	        });
	    });
		
		
	  });
	
}());