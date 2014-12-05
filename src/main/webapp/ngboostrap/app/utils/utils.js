define(["lodash"], function(_){

	function sleep(milliseconds) {
		var start = new Date().getTime();
			for (var i = 0; i < 1e7; i++) {
			if ((new Date().getTime() - start) > milliseconds){
			   break;
			}
		}
	};
	
	function walkObjectTree(obj, callback, path, limit){
		var path = path || [];

		_.transform(obj, function(acc, value, key, obj){
			if(_.isObject(value)){
				acc.push(key);
				console.debug("push:", acc.join("."));
				callback(value, acc);
				walkObjectTree(value, callback, acc);
				console.debug("pop:", acc.join("."));
				path.pop();	
				
			}else if(_.isArray(value)){
				acc.push(key);
				console.debug("push:", acc.join("."));				
				_.forEach(value, function(item){
						callback(item, acc)					
						walkObjectTree(item, callback, acc);
						console.debug("pop:", acc.join("."));
						path.pop();	
						
				});								
				acc.pop();
				console.debug("pop:", acc.join("."));
			}else if(!_.isFunction(value) && !_.isUndefined(value) && !_.isEmpty(value) && !_.isNull(value)){
				acc.push(key);
				console.debug("push:", acc.join("."));
				callback(value, acc);					
				walkObjectTree(value, callback, acc);
				console.debug("pop:", acc.join("."));
				path.pop();	
				
			}								
		}, path);
		
	};
	
	function traverse1(obj, callback, path){
		
		var path = path || [];
		//remember the current path
		path.push(obj);
		//do work
		callback(obj, path);
		
		//find child objects
		var chldren = _.filter(_.values(obj), _.isObject);
		if(chldren.length>0){	
			_.map(chldren, function(child){							
				traverse1(child, callback, path);
				path.pop();					
			});
		}else{					
			return obj;
		}
	};
	
	function traverse(obj, callback, path){						
		if(!path){
			//the very first object
			path=[];
			callback(obj, path);				
		}
		
		_.mapValues(obj, function(value, key, obj){				
			//find child objects				
			if(_.isObject(value)){					
				//remember the current path
				path.push(key);
				//do work
				callback(value, path);
				
				traverse(value, callback, path);
				path.pop();
			}				
		});
	};


	function traverseRev(obj, callback, path){
		var isRoot=false;
		if(!path){
			//the very first object
			path=[];
			isRoot=true
		}
		
		_.mapValues(obj, function(value, key, obj){				
			//find child objects				
			if(_.isObject(value)){					
				//remember the current path
				path.push(key);				
				traverseRev(value, callback, path);
				
				//do work
				callback(value, path);				
				path.pop()
			}				
		});
		
		//process the root node
		if(isRoot){
			callback(obj, path);
		}
	};
	
	function getProp(objPath){
		return _.reduce(objPath, function(result, prop){				
			return result[prop];
		}, data);
	}
	

	function urlToObj(objPath, data){		
		return _.reduce(objPath, function(result, prop){				
			return result[prop];
		}, data);
	};
	
	
	
	function urlToArray(objPath, data, fnGetId){
		fnGetId = fnGetId || function(obj){return obj.name};
		return _.reduce(objPath, function(result, prop){
			if(prop==="") return result;
			try{
				if(_.isArray(result)){
					var found = _.find(result, function(item){
						return String(fnGetId(item))===prop;
					});
//					if(!found){
//						var errContext=[result,prop];					
//						var errMsg="Error finding object in array [result, prop]: ";
//						console.error(errMsg, errContext);
////						throw new Error(errMsg+JSON.stringify(errContext));
//					}
					return found;
				}else{
					return result[prop];
				}
			}catch(e){
				errContext = [objPath, data, prop, result, e];
				errMsg = "Error mapping urlToArray from [objPath, data, result, prop, e]:";
				console.error(errMsg, errContext);
				throw new Error(errMsg+JSON.stringify(errContext));
			}
			
		}, data);
	};
	
	return {
		traverse: traverse,
		traverse1: traverse1,
		traverseRev: traverseRev,
		urlToObj: urlToObj,
		urlToArray: urlToArray,
		sleep: sleep,
		walkObjectTree: walkObjectTree
	};
	
});