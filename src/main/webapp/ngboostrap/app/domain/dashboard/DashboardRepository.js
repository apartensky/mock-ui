define(["./Dashboard", "../annotations/AnnotationSet", "../annotations/AnnotationSetRepository"], 
function(Dashboard, AnnotationSet, AnnotationSetRepository){
	var DashboardRepository = function($q, $timeout, AnnotationSetRepository){
		//private
		var dashboards = [];
		
		var self=this;
		//private
		var makeapromise=function(value){
			var deferred = $q.defer();
	        deferred.resolve(value);
	        return deferred.promise;
		};
		var breakapromise=function(value){
			var deferred = $q.defer();
	        deferred.reject("dashboard not found:"+value);
	        return deferred.promise;
		};
		
		//public		
		self.create=function(dashboardName){
			var annotationSet = AnnotationSetRepository.get(dashboardName);
			console.debug("Dashbaord.create->annotationSet", annotationSet );
			var dashboard=new Dashboard($q.when({"annotationSet": annotationSet, "facets": [1, 2, 3]})); 
			self.put(dashboard);
			return makeapromise(dashboard);				        
		};
//		self.create = $timeout(create, 1000);
				
		self.get=function(name){
			var dashboard;
			Arrays.some(dashboards, function(cur){
				if(cur.name===name){
					console.debug("found dashboard", cur);
					dashboard=cur;
					return true;
				}
			});
			return makeapromise(dashbaord);
		};
		self.exists=function(name){
			console.debug("exists?", name);
			for(var i=0;i<dashboards.length;i++){
				console.debug("cur dashbaord", dashboards[i]);
				if(dashboards[i].getName()===name){
					console.debug("exists?true", name);
					return makeapromise(dashboards[i]);					
				}
			}
			console.debug("exists?false", name);
			return breakapromise(name);
		};
		self.getAll=function(){
//			console.debug("Object.keys(dashboards)", Object.keys(dashboards));
//			 return Object.keys(dashboards).map(function (key) {
//				    return dashboards[key];
//				});
			return makeapromise(dashboards);
		};
		
		self.put=function(dashboard){
			console.debug("put dashboard", dashboard);
//			console.debug("dashboard.constructor.prototype", dashboard.constructor.prototype);
//			console.debug("AnnotationSet.prototype", AnnotationSet.prototype);
//			console.debug("instanceof dashboard", dashboard instanceof AnnotationSet);
//			if(dashboard instanceof AnnotationSet){
//				self.create(dashboard);
//			}else{
			
//				dashboards[dashboard.name]=dashboard;
			dashboards.push(dashboard);			
//			}	
		};		
	};
	return DashboardRepository;
});