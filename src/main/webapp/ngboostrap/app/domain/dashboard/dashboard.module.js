define(["ng", "./DashboardRepository"], function(ng, DashboardRepository){
	"use strict";
	var module = ng.module("mui.dashboard", []);
	module.service("DashboardRepository", ["$q", "$timeout", "AnnotationSetRepository", DashboardRepository]);
	return module;
});