define([], function(){
	return function Endpoint($httpBackend){
		
		this.registerRoute=function(routeTemplate, processRequest, $httpBackend){
	    	var position=0;
	    		    	
	    	var urlPrefex = spec.getUrlPrefix();
	    	if(urlPrefex.charAt(urlPrefex.length-1)==="/")
	    		urlPrefex=urlPrefex.substring(0, urlPrefex.length-1);
	    	
	    	var urlRegexPrefix="^"+urlPrefex.replace(/\//g, "\\/");
	    	var regexGetUrl=new RegExp(urlRegexPrefix);
	    	
	    	return _.transform(spec.parseUrl(routeTemplate), function(result, urlStep){
	    		console.debug("***urlstep". urlStep, regexGetUrl);
	    		if(++position % 2 === 0){
	    			//single resource	    			
	    		}else{
	    			//collection	    			
	    			regexGetUrl=new RegExp(regexGetUrl.source+"\\/"+urlStep);
	    		    var regexCollectionUrl = new RegExp(regexGetUrl.source+"(/)?$");
	    		    var regexEntityUrl = new RegExp(regexGetUrl.source+"\\/\\w+");
	    		    if($httpBackend){
		    		    $httpBackend.whenGET(regexCollectionUrl).respond(processRequest.bind(this));
		    		    $httpBackend.whenPOST(regexCollectionUrl).respond(processRequest.bind(this));		    		    
	    		        $httpBackend.whenGET(regexEntityUrl).respond(processRequest.bind(this));
		    		    $httpBackend.whenPUT(regexEntityUrl).respond(processRequest.bind(this));
		    		    $httpBackend.whenDELETE(regexEntityUrl).respond(processRequest.bind(this));
	    		    }
	    		    regexGetUrl=regexEntityUrl;
	    		    return result.push({
	    		    		collection: regexCollectionUrl.source,
	    		    		entity: regexEntityUrl.source
	    		    });
	    		}
	    			
	    	}, []);
	    };
	    
	    this.parseSchema=function(schema){
	    	var position=0;
	    		    	
	    	var urlPrefex = spec.getUrlPrefix();
	    	if(urlPrefex.charAt(urlPrefex.length-1)==="/")
	    		urlPrefex=urlPrefex.substring(0, urlPrefex.length-1);
	    	
	    	var urlRegexPrefix="^"+urlPrefex.replace(/\//g, "\\/");
	    	var regexGetUrl=new RegExp(urlRegexPrefix);
	    	
	    	return _.transform(spec.parseUrl(routeTemplate), function(result, urlStep){
	    		console.debug("***urlstep". urlStep, regexGetUrl);
	    		if(++position % 2 === 0){
	    			//single resource	    			
	    		}else{
	    			//collection	    			
	    			regexGetUrl=new RegExp(regexGetUrl.source+"\\/"+urlStep);
	    		    var regexCollectionUrl = new RegExp(regexGetUrl.source+"(/)?$");
	    		    var regexEntityUrl = new RegExp(regexGetUrl.source+"\\/\\w+");
	    		    if($httpBackend){
		    		    $httpBackend.whenGET(regexCollectionUrl).respond(processRequest.bind(this));
		    		    $httpBackend.whenPOST(regexCollectionUrl).respond(processRequest.bind(this));		    		    
	    		        $httpBackend.whenGET(regexEntityUrl).respond(processRequest.bind(this));
		    		    $httpBackend.whenPUT(regexEntityUrl).respond(processRequest.bind(this));
		    		    $httpBackend.whenDELETE(regexEntityUrl).respond(processRequest.bind(this));
	    		    }
	    		    regexGetUrl=regexEntityUrl;
	    		    return result.push({
	    		    		collection: regexCollectionUrl.source,
	    		    		entity: regexEntityUrl.source
	    		    });
	    		}
	    			
	    	}, []);
	    };
	};
});