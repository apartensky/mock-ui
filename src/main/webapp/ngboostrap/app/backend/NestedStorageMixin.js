define(["lodash"], function(_){
	
	var NestedStorageMixin = function (){
		
		this._nextId=0;
		this._generateNextId=function(){
			return "id"+this._nextId++;
		};
			
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
			var objPath = Array.isArray(url) ? url : url.split("/");   
			
			return _.reduce(objPath, function(result, prop){				
				return result[prop];
			}, data);
		};
		
		this.get=function(url){
			var urlParts = url.split("/")
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
				
		this.get=function(url){
			var urlParts = url.split("/")
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
			var urlParts = url.split("/");
			var id = urlParts.pop();
			var collection = urlToObj(urlParts, this.data);			
			if(collection[id]){
				_.merge(collection[id], obj);				
			}else{
				collection[id]=obj;
			}		
			return _.cloneDeep(collection[id]);
		};
		this.add=function(url, obj){			
			var collection = urlToObj(url, this.data);
			obj.name = this._generateNextId();
			collection[obj.name]=obj;					
			return _.cloneDeep(obj);
		};
		this.remove=function(url){
			var urlParts = url.split("/");
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
	    	var respnose = this.data;
	        return [200, respnose, {}];
	    };
		
	};
//	console.debug("NestedStorageMixin init", NestedStorageMixin);
	return NestedStorageMixin;	
});