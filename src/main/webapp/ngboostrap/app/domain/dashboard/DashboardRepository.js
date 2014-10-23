define(["q", "./Dashboard", "../annotations/AnnotationSet"], 
function(q, Dashboard, AnnotationSet){
	var DashboardRepository = function($q){
		//private
		var dashboards = [];
		
		var self=this;
		//public		
		self.create=function(annotationSet){
			self.put(new Dashboard($q.when({"annotationSet": annotationSet, "facets": [1, 2, 3]})));
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
		self.get=function(name){
			return dashboards[name];
		};
		self.getAll=function(){
//			console.debug("Object.keys(dashboards)", Object.keys(dashboards));
//			 return Object.keys(dashboards).map(function (key) {
//				    return dashboards[key];
//				});
			return dashboards;
		};
	};
	return DashboardRepository;
});