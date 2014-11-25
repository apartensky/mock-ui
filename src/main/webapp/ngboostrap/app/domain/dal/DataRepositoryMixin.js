define(["lodash"], function(_){
	
	function DataRepositoryMixin(spec){
		var $http=spec.$http;
		var url=spec.url;
		var fnGetId=spec.getId || function(){return this.name};
		var fnSetId=spec.setId || function(id){this.name=id};
				
		this.get=function(id){
			return $http.get(url+"/"+id).error(function(data){
				console.error("$http.get error", data);
			}).success(function(data, status, headers, config){
				_.remove(this.data, function(item){
					return fnGetId.call(item)===fnGetId.call(data);
				});
				this.data.push(data);
				return data;
			}.bind(this))
			.then(function(response){
				return response.data;
			});
		};
		
		this.put=function(obj){
			return $http.put(url+"/"+fnGetId.call(obj), obj).error(function(data){
				console.error("$http.put error", data);
			}).success(function(data, status, headers, config){
				_.remove(this.data, function(item){
					return fnGetId.call(item)===fnGetId.call(data);
				});
				this.data.push(data);
				return data;
			}.bind(this));
		};		
		
		this.getAll=function(){
			return $http.get(url).error(function(data){
				console.error("$http.getAll error", data);
			}).success(function(data, status, headers, config){
				while(this.data.length>0){
					this.data.pop();
				}
				data.map(function(item){
					this.data.push(item);
				}.bind(this));				
			}.bind(this))
			.then(function(response){
				return this.data;
			}.bind(this));
		};
		
	};
//	console.debug("ServerStorageMixin init", ServerStorageMixin);
		
	return DataRepositoryMixin;	
});