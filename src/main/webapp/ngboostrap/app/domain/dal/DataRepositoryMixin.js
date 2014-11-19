define(["lodash"], function(_){
	
	function DataRepositoryMixin(spec){
		var $http=spec.$http;		
		var url=spec.url;		
		
		this.get=function(id){
			return $http.get(url+"/:id", {id: id}).error(function(data){
				console.error("$http.get error", data);
			}).success(function(data, status, headers, config){
				this.data.push(data);
				return data;
			}.bind(this));
		};
		
		this.put=function(obj){
			return $http.put(url, obj).error(function(data){
				console.error("$http.put error", data);
			}).success(function(data, status, headers, config){
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
				});				
			}.bind(this))
			.then(function(response){
				return this.data;
			}.bind(this));
		};
		
	};
//	console.debug("ServerStorageMixin init", ServerStorageMixin);
		
	return DataRepositoryMixin;	
});