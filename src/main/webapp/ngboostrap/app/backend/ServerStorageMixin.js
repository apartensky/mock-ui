define(["underscore"], function(_){
	
	var ServerStorageMixin = function (fnGetId, fnSetId){
		
		this.getId=function(obj){
			var fn = fnGetId || function(){return this.id;};
			return fn.call(obj);
		};
		this.setId=function(obj, id){
			var fn = fnSetId || function(id){this.id=id;};
			return fn.call(obj, id);
		};
		this.getData=function(){
			return this.data;
		};		
		this.setData=function(data){
			this.data=data;
		};
		this.findById=function(id){
			var results = this.data.filter(function(item){
				return this.getId(item)===id;
			}.bind(this));
			return results ? results[0] : undefined;
		};
		this.getAll=function(){
			return this.getData();
		};
		this.newId=function(){
			var maxItem = _.max(this.data, function(item){
				return this.getId(item);
			}.bind(this));
			return this.getId(maxItem)+1;
		};
		this.add=function(obj, id){
			if(id){
				this.setId(obj, id);				
			}else{
				this.setId(obj, this.newId());
			}
			this.data.push(obj);
			return obj;
		};
		this.put=function(obj){
			var target=this.findById(this.getId(obj));
			if(!target){
				this.data.push(obj);
				return obj;
			}else{
				_.extend(target, obj);
			}
			return target;			
		};
		this.deleteById=function(id){
			var toBeDeleted = this.findById(id);
			if(toBeDeleted){
				this.data.splice(this.data.indexOf(toBeDeleted), 1);
			}			
			return toBeDeleted; 
		};
	};
//	console.debug("ServerStorageMixin init", ServerStorageMixin);
	return ServerStorageMixin;	
});