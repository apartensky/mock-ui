(function(){
	
	var mixin = function (spec){
		var x=spec.x;
	    this.getX=function getX(){
	        return x;
	    }
	    
	};
		
	function Obj(a){
	    function getA(){
	        return a;
	    };
	    return {
	    	getA: getA
	    }
	}
	
	function Obj2(b){
		this.getB=function(){
			return b;
		};
	}
	
	
	
	console.log("obj", new Obj(1));
	console.log("obj2", new Obj2(2));
	
	
	mixin.call(Obj.prototype, {x: 3});
	
	var inst = new Obj(1);
//	mixin.call(inst, {x: 3});
	console.log("Obj", Obj);
	console.log("Obj.prototype", Obj.prototype);
	console.log("inst", inst);
	console.log(inst.getA());
	console.log(inst.getX());
	
	var instTwo = new Obj(2);
	mixin.call(instTwo, {x:4});
	console.log("instTwo", instTwo);
	console.log(instTwo.getA());
	console.log(instTwo.getX());
	
	mixin.call(Obj.prototype, {x:5});
	var instThree = new Obj(2);	
	console.log("instThree", instThree);
	console.log(instThree.getA());
	console.log(instThree.getX());
	
	console.log("inst", inst);
	console.log(inst.getA());
	console.log(inst.getX())
	
})();