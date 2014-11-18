define(["lodash"], function(_){
	
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
			return _.cloneDeep(this.data);
		};		
		this.setData=function(data){
			this.data=data;
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
		
		this.findById=function(id){
			return _.cloneDeep(this._read.call(this, id));
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
			return this._write(obj);					
		};
		this.put=function(obj){
			var target=this._read(this.getId(obj));
			if(!target){				
				return this._write(obj);
			}else{
				_.merge(target, obj);
				return _.cloneDeep(target);
			}
		};
		this.deleteById=function(id){
			var toBeDeleted = this._read(id);
			if(toBeDeleted){
				this.data.splice(this.data.indexOf(toBeDeleted), 1);
			}			
			return _.cloneDeep(toBeDeleted); 
		};
	};
//	console.debug("ServerStorageMixin init", ServerStorageMixin);
	return ServerStorageMixin;	
});