define(["lodash"], function(_){
	
	var NestedStorageMixin = function (spec){
		if(!spec) spec={};
		spec.getUrlPrefix=spec.getUrlPrefix || function(){
			return "api/";
		}
		spec.parseUrl=spec.parseUrl || function(url){
				if(url.charAt(0)==="/"){
					url=url.substring(1);
				}				
				url=url.replace(spec.getUrlPrefix(), "")
				return url.split(/[\/?]/);
			};
		
		this._nextId=0;
		this._generateNextId=function(){
			return "id"+this._nextId++;
		};
		this.setData=function(data){
			this.data=data;
		}
		this._read=function(id){
			var results = this.data.filter(function(item){
				return this.getId(item)===id;
			}.bind(this));
			return results ? results[0] : undefined;
		};
		this._write=function(obj){
			var toWrite = _.cloneDeep(obj);
			this.data.push(toWrite);
			return toWrite;
		};
		
		function urlToObj(url, data){
			var objPath = Array.isArray(url) ? url : spec.parseUrl(url);
			return _.reduce(objPath, function(result, prop){				
				return result[prop];
			}, data);
		};
		
		this.get=function(url){
			var urlParts = spec.parseUrl(url);
			if(urlParts.length % 2 === 0){
				//in our siplified world, urls with even number of parts 
				//are always for specific resources by id (ex: datasets/id)
				return _.cloneDeep(urlToObj(urlParts, this.data));
			}else{
				//in our siplified world, urls with odd number of parts 
				//are always for collection of resources (ex: datasets/dataset_id/analyses)
				var collectionObj = _.cloneDeep(urlToObj(urlParts, this.data));
				return _.values(collectionObj); 
			}
		}
		this.put=function(url, obj){
			try{
				var urlParts = spec.parseUrl(url);
				var id = urlParts.pop();
				var collection = urlToObj(urlParts, this.data);			
				if(collection[id]){
					_.merge(collection[id], obj);				
				}else{
					collection[id]=_.isObject(obj) ? obj : JSON.parse(obj);
				}		
				return _.cloneDeep(collection[id]);
			}catch(e){
				throw new Error("Error while put:" + url + "; obj: " + obj + "; cause: "+e);
			}
		};
		this.add=function(url, obj){			
			var collection = urlToObj(url, this.data);
			obj.name = this._generateNextId();
			collection[obj.name]=obj;					
			return _.cloneDeep(obj);
		};
		this.remove=function(url){
			var urlParts = spec.parseUrl(url);
			var id = urlParts.pop();
			var collection = urlToObj(urlParts, this.data);
			var target = collection[id];
			if(!target){
				throw new Error("Entry with id "+id+" does not exist at the url "+url)
			}
			
			delete collection[id];				
			return target;
		};
		this.httpRequest=function(method, url, data) {			
			switch(method){
			case "GET":
				return this.get(url);
				break;
			case "PUT":
				return this.put(url, data);
				break;
			case "DELETE":
				return this.remove(url);
				break;
			case "POST":
				return this.add(url, data);
				break;
			default:
				throw new Error("HTTP method "+method+" is not yet implemented by this mock service");
			}	    	
	    };
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
			    
	};
//	console.debug("NestedStorageMixin init", NestedStorageMixin);
	return NestedStorageMixin;	
});