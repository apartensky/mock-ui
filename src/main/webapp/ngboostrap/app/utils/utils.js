define([], function(){

	function sleep(milliseconds) {
		var start = new Date().getTime();
			for (var i = 0; i < 1e7; i++) {
			if ((new Date().getTime() - start) > milliseconds){
			   break;
			}
		}
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

	return {
		traverse: traverse,
		traverse1: traverse1,
		sleep: sleep
		
	};
});