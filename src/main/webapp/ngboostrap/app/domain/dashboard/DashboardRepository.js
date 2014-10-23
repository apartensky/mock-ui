define(["q", "./Dashboard", "../annotations/AnnotationSet"], 
function(q, Dashboard, AnnotationSet){
	var DashboardRepository = function($q){
		//private
		var dashboards = [];
		
		var self=this;
		//public		
		self.create=function(annotationSet){
			var dashboard=new Dashboard($q.when({"annotationSet": annotationSet, "facets": [1, 2, 3]})); 
			self.put(dashboard);
			return dashboard;
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
			var dashboard;
			Arrays.some(dashboards, function(cur){
				if(cur.name===name){
					console.debug("found dashboard", cur);
					dashboard=cur;
					return true;
				}
			});
			return dashboard;
		};
		self.exists=function(name){
			console.debug("exists?", name);
			for(var i=0;i<=dashbaords.length;i++){
				console.debug("cur dashbaord", dashboard[i]);
				if(dashbaord[i].name===name){
					console.debug("exists?true", name);
					return true;
				}
			}
			console.debug("exists?false", name);
			return false;
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