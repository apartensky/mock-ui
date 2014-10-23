define(["ng", "./DashboardRepository"], function(ng, DashboardRepository){
	"use strict";
	var module = ng.module("mui.dashboard", []);
	module.service("DashboardRepository", ["$q", DashboardRepository]);
	return module;
});