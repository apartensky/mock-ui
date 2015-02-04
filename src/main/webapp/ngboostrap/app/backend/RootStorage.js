define(["lodash", "./NestedArrayStorageMixin"], function(_, NestedStorageMixin){
	return (function(){
		function CreateDummy(prefix, i, customFields){
			var dummy= {
				id: i,
				name: prefix+" "+i,
				description: "this item is "+i*10				
			};
			if(customFields)
				_.merge(dummy, customFields);
			return dummy;
		};
		function CreateDummyCollection(prefix, customFields){
			var dummys=[];
			for(var i=0;i<10;i++){
				var dummy=CreateDummy(prefix, i)
				dummys.push(dummy);
			}
			return dummys;
		};
		function AttachDummyCollection(parent, collectionName, customFields){
			_.map(parent, function(cur){
				cur[collectionName]=CreateDummyCollection(cur.name);
			});
			
		};
		
		return function(RootStorageSchema){
	
			var data={
					datasource: [
									{
										id: 1,
										name: "TCGA",
										description: "1",
										dataset: []
									},
									{
										id: 2,
										name: "Geods",
										description: '2',
										dataset: []
									},				
									{
										id: 3,
										name: "Google Drive",
										description: '3',
										dataset: []
									}
								],
								dashboard: [{
									annotationSet: {
										meta: {
											id: 1,
											name: "name1",
											description: "just a '1'",
											numberOfSamples: 1
										},
										data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
									}
								}],
								project: [{
									id: 1,
									name: "project1",
									dataset: [{
												id: 1,
												name: "dataset 1",
												dataref: {
													url: "api/dataset/1/values",
													row: {
														"keys": [	
															"CREB3L1",
															"ELMO2",
															"ERCC5",
															"MMP2",
															"PNMA1",
															"RPS11",
															"RPS11X"],
														"selections": [{
																name: "selection 1",
																dimension: "row",
																dataref: {
																	row: {
																		keys: ["CREB3L1",
																				"ELMO2",
																				"PNMA1",
																				"RPS11",
																				"RPS11X"]
																	}
																}																
															},
															{
																name: "selection 2",
																dimension: "row",
																dataref: {
																	row: {
																		keys: ["ERCC5",
																				"MMP2"]
																	}
																}																
															}]
													},
													column: {
														"keys": [
															"TCGA-CS-4944-01A-01R-1470-07",
															"TCGA-E1-5311-01A-01R-1470-07",
															"TCGA-DB-5270-01A-02R-1470-07",
															"TCGA-E1-5303-01A-01R-1470-07",
															"TCGA-DH-5143-01A-01R-1470-07"
														]
													}
												},												
												values: [{
															"row": "CREB3L1",
															"column": "TCGA-CS-4944-01A-01R-1470-07",
															"value": -0.990166666666667
														},
														{
															"row": "CREB3L1",
															"column": "TCGA-E1-5311-01A-01R-1470-07",
															"value": -1.70383333333333
														},
														{
															"row": "CREB3L1",
															"column": "TCGA-DB-5270-01A-02R-1470-07",
															"value": -0.1735
														},
														{
															"row": "CREB3L1",
															"column": "TCGA-E1-5303-01A-01R-1470-07",
															"value": 0.262
														},
														{
															"row": "CREB3L1",
															"column": "TCGA-DH-5143-01A-01R-1470-07",
															"value": -1.5475
														},
														{
															"row": "ELMO2",
															"column": "TCGA-CS-4944-01A-01R-1470-07",
															"value": 1.880125
														},
														{
															"row": "ELMO2",
															"column": "TCGA-E1-5311-01A-01R-1470-07",
															"value": 2.5738125
														},
														{
															"row": "ELMO2",
															"column": "TCGA-DB-5270-01A-02R-1470-07",
															"value": 1.3080625
														},
														{
															"row": "ELMO2",
															"column": "TCGA-E1-5303-01A-01R-1470-07",
															"value": 0.8185
														},
														{
															"row": "ELMO2",
															"column": "TCGA-DH-5143-01A-01R-1470-07",
															"value": 1.3643125
														},
														{
															"row": "ERCC5",
															"column": "TCGA-CS-4944-01A-01R-1470-07",
															"value": 0.2414
														},
														{
															"row": "ERCC5",
															"column": "TCGA-E1-5311-01A-01R-1470-07",
															"value": 0.2394
														},
														{
															"row": "ERCC5",
															"column": "TCGA-DB-5270-01A-02R-1470-07",
															"value": -0.2134
														},
														{
															"row": "ERCC5",
															"column": "TCGA-E1-5303-01A-01R-1470-07",
															"value": 0.3646
														},
														{
															"row": "ERCC5",
															"column": "TCGA-DH-5143-01A-01R-1470-07",
															"value": 0.5866
														},
														{
															"row": "MMP2",
															"column": "TCGA-CS-4944-01A-01R-1470-07",
															"value": -1.36525
														},
														{
															"row": "MMP2",
															"column": "TCGA-E1-5311-01A-01R-1470-07",
															"value": -1.066875
														},
														{
															"row": "MMP2",
															"column": "TCGA-DB-5270-01A-02R-1470-07",
															"value": -1.31625
														},
														{
															"row": "MMP2",
															"column": "TCGA-E1-5303-01A-01R-1470-07",
															"value": -1.469625
														},
														{
															"row": "MMP2",
															"column": "TCGA-DH-5143-01A-01R-1470-07",
															"value": -0.54525
														},
														{
															"row": "PNMA1",
															"column": "TCGA-CS-4944-01A-01R-1470-07",
															"value": 3.1918
														},
														{
															"row": "PNMA1",
															"column": "TCGA-E1-5311-01A-01R-1470-07",
															"value": 3.3446
														},
														{
															"row": "PNMA1",
															"column": "TCGA-DB-5270-01A-02R-1470-07",
															"value": 3.0248
														},
														{
															"row": "PNMA1",
															"column": "TCGA-E1-5303-01A-01R-1470-07",
															"value": 2.6394
														},
														{
															"row": "PNMA1",
															"column": "TCGA-DH-5143-01A-01R-1470-07",
															"value": 2.7474
														},
														{
															"row": "RPS11",
															"column": "TCGA-CS-4944-01A-01R-1470-07",
															"value": -0.6999
														},
														{
															"row": "RPS11",
															"column": "TCGA-E1-5311-01A-01R-1470-07",
															"value": 0.1297
														},
														{
															"row": "RPS11",
															"column": "TCGA-DB-5270-01A-02R-1470-07",
															"value": -0.4983
														},
														{
															"row": "RPS11",
															"column": "TCGA-E1-5303-01A-01R-1470-07",
															"value": 0.4767
														},
														{
															"row": "RPS11",
															"column": "TCGA-DH-5143-01A-01R-1470-07",
															"value": 0.0287
														},
														{
															"row": "ZHX3",
															"column": "TCGA-CS-4944-01A-01R-1470-07",
															"value": 1.45775
														},
														{
															"row": "ZHX3",
															"column": "TCGA-E1-5311-01A-01R-1470-07",
															"value": 1.127375
														},
														{
															"row": "ZHX3",
															"column": "TCGA-DB-5270-01A-02R-1470-07",
															"value": 1.041375
														},
														{
															"row": "ZHX3",
															"column": "TCGA-E1-5303-01A-01R-1470-07",
															"value": 1.253375
														},
														{
															"row": "ZHX3",
															"column": "TCGA-DH-5143-01A-01R-1470-07",
															"value": 1.172
														}] 
											},
											{
												id: 2,
												name: "dataset 2",
												dataref: {
													url: "api/dataset/1/values",
													row: {												
														"keys": ["CREB3L1",
															"ELMO2",
															"ERCC5",
															"MMP2",
															"PNMA1",
															"RPS11",
															"ZHX3"],
														"selections": [{
																name: "selection 1",
																dimension: "row",
																dataref:{																																
																	row: {
																		keys: ["CREB3L1",
																			"ELMO2",
																			"PNMA1",
																			"RPS11"]
																		}
																}
															},
															{
																name: "selection 2",
																dimension: "row",
																dataref: {																
																	row: {
																		keys: ["ERCC5",
																			"MMP2",
																			"ZHX3"]
																		}
																}
															}]
													},
													column: {
														"keys": [
															"TCGA-CS-4944-01A-01R-1470-07",
															"TCGA-E1-5311-01A-01R-1470-07",
															"TCGA-DB-5270-01A-02R-1470-07",
															"TCGA-E1-5303-01A-01R-1470-07",
															"TCGA-DH-5143-01A-01R-1470-07"]
													}
												},												
												values: [{
															"row": "CREB3L1",
															"column": "TCGA-CS-4944-01A-01R-1470-07",
															"value": -0.990166666666667
														},
														{
															"row": "CREB3L1",
															"column": "TCGA-E1-5311-01A-01R-1470-07",
															"value": -1.70383333333333
														},
														{
															"row": "CREB3L1",
															"column": "TCGA-DB-5270-01A-02R-1470-07",
															"value": -0.1735
														},
														{
															"row": "CREB3L1",
															"column": "TCGA-E1-5303-01A-01R-1470-07",
															"value": 0.262
														},
														{
															"row": "CREB3L1",
															"column": "TCGA-DH-5143-01A-01R-1470-07",
															"value": -1.5475
														},
														{
															"row": "ELMO2",
															"column": "TCGA-CS-4944-01A-01R-1470-07",
															"value": 1.880125
														},
														{
															"row": "ELMO2",
															"column": "TCGA-E1-5311-01A-01R-1470-07",
															"value": 2.5738125
														},
														{
															"row": "ELMO2",
															"column": "TCGA-DB-5270-01A-02R-1470-07",
															"value": 1.3080625
														},
														{
															"row": "ELMO2",
															"column": "TCGA-E1-5303-01A-01R-1470-07",
															"value": 0.8185
														},
														{
															"row": "ELMO2",
															"column": "TCGA-DH-5143-01A-01R-1470-07",
															"value": 1.3643125
														},
														{
															"row": "ERCC5",
															"column": "TCGA-CS-4944-01A-01R-1470-07",
															"value": 0.2414
														},
														{
															"row": "ERCC5",
															"column": "TCGA-E1-5311-01A-01R-1470-07",
															"value": 0.2394
														},
														{
															"row": "ERCC5",
															"column": "TCGA-DB-5270-01A-02R-1470-07",
															"value": -0.2134
														},
														{
															"row": "ERCC5",
															"column": "TCGA-E1-5303-01A-01R-1470-07",
															"value": 0.3646
														},
														{
															"row": "ERCC5",
															"column": "TCGA-DH-5143-01A-01R-1470-07",
															"value": 0.5866
														},
														{
															"row": "MMP2",
															"column": "TCGA-CS-4944-01A-01R-1470-07",
															"value": -1.36525
														},
														{
															"row": "MMP2",
															"column": "TCGA-E1-5311-01A-01R-1470-07",
															"value": -1.066875
														},
														{
															"row": "MMP2",
															"column": "TCGA-DB-5270-01A-02R-1470-07",
															"value": -1.31625
														},
														{
															"row": "MMP2",
															"column": "TCGA-E1-5303-01A-01R-1470-07",
															"value": -1.469625
														},
														{
															"row": "MMP2",
															"column": "TCGA-DH-5143-01A-01R-1470-07",
															"value": -0.54525
														},
														{
															"row": "PNMA1",
															"column": "TCGA-CS-4944-01A-01R-1470-07",
															"value": 3.1918
														},
														{
															"row": "PNMA1",
															"column": "TCGA-E1-5311-01A-01R-1470-07",
															"value": 3.3446
														},
														{
															"row": "PNMA1",
															"column": "TCGA-DB-5270-01A-02R-1470-07",
															"value": 3.0248
														},
														{
															"row": "PNMA1",
															"column": "TCGA-E1-5303-01A-01R-1470-07",
															"value": 2.6394
														},
														{
															"row": "PNMA1",
															"column": "TCGA-DH-5143-01A-01R-1470-07",
															"value": 2.7474
														},
														{
															"row": "RPS11",
															"column": "TCGA-CS-4944-01A-01R-1470-07",
															"value": -0.6999
														},
														{
															"row": "RPS11",
															"column": "TCGA-E1-5311-01A-01R-1470-07",
															"value": 0.1297
														},
														{
															"row": "RPS11",
															"column": "TCGA-DB-5270-01A-02R-1470-07",
															"value": -0.4983
														},
														{
															"row": "RPS11",
															"column": "TCGA-E1-5303-01A-01R-1470-07",
															"value": 0.4767
														},
														{
															"row": "RPS11",
															"column": "TCGA-DH-5143-01A-01R-1470-07",
															"value": 0.0287
														},
														{
															"row": "ZHX3",
															"column": "TCGA-CS-4944-01A-01R-1470-07",
															"value": 1.45775
														},
														{
															"row": "ZHX3",
															"column": "TCGA-E1-5311-01A-01R-1470-07",
															"value": 1.127375
														},
														{
															"row": "ZHX3",
															"column": "TCGA-DB-5270-01A-02R-1470-07",
															"value": 1.041375
														},
														{
															"row": "ZHX3",
															"column": "TCGA-E1-5303-01A-01R-1470-07",
															"value": 1.253375
														},
														{
															"row": "ZHX3",
															"column": "TCGA-DH-5143-01A-01R-1470-07",
															"value": 1.172
														}] 
											}],
									analysis: [{
										"id": 1,
										"name": "kkk",
										"timestamp": {"timeInMillis": 1417506148961,"seconds": 28,"minutes": 42,"hours": 2,"period": "AM"},
										"type": "Hierarchical Clustering",						
										"params": {
											name: "hcl params",
											"dimension": "column",
											"distance": "manhatan",
											"linkage": "complete",
											"data": {
												"dataref": [{
													id: 1,
													url: "dataset/1/values",
													column: {},
													row: {},
												}]
											}
										},
										result: [{
											"name": "HCL Result",
											"type": "histogram",
											"root": {
												"distance": 2.7851566041428764,
												"children": [{
														"distance": 1.4996036384195357,
														"children": 
														[{
															"name": "TCGA-E1-5311-01A-01R-1470-07"
														},
														{
															"name": "TCGA-DH-5143-01A-01R-1470-07"
														}]
													},
													{
														"distance": 2.110057781906958,
														"children": 
														[{
															"name": "TCGA-E1-5303-01A-01R-1470-07"
														},
														{
															"distance": 1.202224475285583,
															"children": 
															[{
																"name": "TCGA-DB-5270-01A-02R-1470-07"
															},

															{
																"name": "TCGA-CS-4944-01A-01R-1470-07"
															}]
														}]
													}]
												}
										}]						
									},
									{
										"id": 2,
										"name": "limma1",
										"timestamp": {
											"timeInMillis": 1417507819662,
											"seconds": 19,
											"minutes": 10,
											"hours": 3,
											"period": "AM"
										},
										"type": "LIMMA Differential Expression Analysis",
										"params": {
											"control": {								
												dataref: {
													id: 1,
													name: "c1",
													url: "dataset/1/values",
													dimension: "column",
													column: {
														keys: [
																"TCGA-E1-5311-01A-01R-1470-07",
																"TCGA-DH-5143-01A-01R-1470-07"]
														},
													row: {}
												}								
											},
											"experiment": {
												dataref: {
													id: 2,
													name: "c2",
													url: "dataset/1/values",
													dimension: "column",
													column: {
														keys: [
														"TCGA-E1-5303-01A-01R-1470-07",
														"TCGA-DB-5270-01A-02R-1470-07",
														"TCGA-CS-4944-01A-01R-1470-07"]
													},
													row: {}
												}
											}	
										},
										result: [{
											"name": "Limma Results",
											"type": "table",
											"results": []
										},
										{
											"name": "topGO",
											"type": "table",
											"topGo": []
										}]
									}],
									dashboards: [],
									history: []
								},
								{
									id: 2,
									name: "project2"
								}],
								annotations: [],
								dataset: [{
										id: 1,
										name: "dataset 1",
										dataref: {
											row: {
												"keys": [	
													"CREB3L1",
													"ELMO2",
													"ERCC5",
													"MMP2",
													"PNMA1",
													"RPS11",
													"ZHX3"],
												"selections": [{
													id: 1,
													name: "Row selection 1",
													dimension: "row",
													dataref: {
														row: {
															keys: ["CREB3L1",
																	"ELMO2",
																	"ERCC5",
																	"MMP2"]
														}
													}
												}]
											},
											column: {
												"keys": [
													"TCGA-CS-4944-01A-01R-1470-07",
													"TCGA-E1-5311-01A-01R-1470-07",
													"TCGA-DB-5270-01A-02R-1470-07",
													"TCGA-E1-5303-01A-01R-1470-07",
													"TCGA-DH-5143-01A-01R-1470-07"
												],
												"selections": [{
													id: 1,
													name: "Column selection 1", 
													dimension: "column",
													dataref: {
														column: {
															keys: ["TCGA-DB-5270-01A-02R-1470-07",
																	"TCGA-E1-5303-01A-01R-1470-07",
																	"TCGA-DH-5143-01A-01R-1470-07"]
														}
													}
												}]
											}
										},
										values: [
											{
												"row": "CREB3L1",
												"column": "TCGA-CS-4944-01A-01R-1470-07",
												"value": -0.990166666666667
											},
											{
												"row": "CREB3L1",
												"column": "TCGA-E1-5311-01A-01R-1470-07",
												"value": -1.70383333333333
											},
											{
												"row": "CREB3L1",
												"column": "TCGA-DB-5270-01A-02R-1470-07",
												"value": -0.1735
											},
											{
												"row": "CREB3L1",
												"column": "TCGA-E1-5303-01A-01R-1470-07",
												"value": 0.262
											},
											{
												"row": "CREB3L1",
												"column": "TCGA-DH-5143-01A-01R-1470-07",
												"value": -1.5475
											},
											{
												"row": "ELMO2",
												"column": "TCGA-CS-4944-01A-01R-1470-07",
												"value": 1.880125
											},
											{
												"row": "ELMO2",
												"column": "TCGA-E1-5311-01A-01R-1470-07",
												"value": 2.5738125
											},
											{
												"row": "ELMO2",
												"column": "TCGA-DB-5270-01A-02R-1470-07",
												"value": 1.3080625
											},
											{
												"row": "ELMO2",
												"column": "TCGA-E1-5303-01A-01R-1470-07",
												"value": 0.8185
											},
											{
												"row": "ELMO2",
												"column": "TCGA-DH-5143-01A-01R-1470-07",
												"value": 1.3643125
											},
											{
												"row": "ERCC5",
												"column": "TCGA-CS-4944-01A-01R-1470-07",
												"value": 0.2414
											},
											{
												"row": "ERCC5",
												"column": "TCGA-E1-5311-01A-01R-1470-07",
												"value": 0.2394
											},
											{
												"row": "ERCC5",
												"column": "TCGA-DB-5270-01A-02R-1470-07",
												"value": -0.2134
											},
											{
												"row": "ERCC5",
												"column": "TCGA-E1-5303-01A-01R-1470-07",
												"value": 0.3646
											},
											{
												"row": "ERCC5",
												"column": "TCGA-DH-5143-01A-01R-1470-07",
												"value": 0.5866
											},
											{
												"row": "MMP2",
												"column": "TCGA-CS-4944-01A-01R-1470-07",
												"value": -1.36525
											},
											{
												"row": "MMP2",
												"column": "TCGA-E1-5311-01A-01R-1470-07",
												"value": -1.066875
											},
											{
												"row": "MMP2",
												"column": "TCGA-DB-5270-01A-02R-1470-07",
												"value": -1.31625
											},
											{
												"row": "MMP2",
												"column": "TCGA-E1-5303-01A-01R-1470-07",
												"value": -1.469625
											},
											{
												"row": "MMP2",
												"column": "TCGA-DH-5143-01A-01R-1470-07",
												"value": -0.54525
											},
											{
												"row": "PNMA1",
												"column": "TCGA-CS-4944-01A-01R-1470-07",
												"value": 3.1918
											},
											{
												"row": "PNMA1",
												"column": "TCGA-E1-5311-01A-01R-1470-07",
												"value": 3.3446
											},
											{
												"row": "PNMA1",
												"column": "TCGA-DB-5270-01A-02R-1470-07",
												"value": 3.0248
											},
											{
												"row": "PNMA1",
												"column": "TCGA-E1-5303-01A-01R-1470-07",
												"value": 2.6394
											},
											{
												"row": "PNMA1",
												"column": "TCGA-DH-5143-01A-01R-1470-07",
												"value": 2.7474
											},
											{
												"row": "RPS11",
												"column": "TCGA-CS-4944-01A-01R-1470-07",
												"value": -0.6999
											},
											{
												"row": "RPS11",
												"column": "TCGA-E1-5311-01A-01R-1470-07",
												"value": 0.1297
											},
											{
												"row": "RPS11",
												"column": "TCGA-DB-5270-01A-02R-1470-07",
												"value": -0.4983
											},
											{
												"row": "RPS11",
												"column": "TCGA-E1-5303-01A-01R-1470-07",
												"value": 0.4767
											},
											{
												"row": "RPS11",
												"column": "TCGA-DH-5143-01A-01R-1470-07",
												"value": 0.0287
											},
											{
												"row": "ZHX3",
												"column": "TCGA-CS-4944-01A-01R-1470-07",
												"value": 1.45775
											},
											{
												"row": "ZHX3",
												"column": "TCGA-E1-5311-01A-01R-1470-07",
												"value": 1.127375
											},
											{
												"row": "ZHX3",
												"column": "TCGA-DB-5270-01A-02R-1470-07",
												"value": 1.041375
											},
											{
												"row": "ZHX3",
												"column": "TCGA-E1-5303-01A-01R-1470-07",
												"value": 1.253375
											},
											{
												"row": "ZHX3",
												"column": "TCGA-DH-5143-01A-01R-1470-07",
												"value": 1.172
											}
										] 
									},
									{
										id: 2,
										name: "dataset 2"
									}]
							};
			
			for(var i=0;i<10;i++){
				var dummy={
						meta: {
							id: "name"+i*10,
							name: "name"+i*10,
							description: "just a '"+i+"'",
							numberOfSamples: i*10
						},
						data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
					}
				data.annotations.push(dummy);
			}
			
			//presets
			AttachDummyCollection(data.datasource, "dataset"
					, {
					annotations: [
						{ 
							name: "row annotations", 
							data: []
						},
						{ 
							name: "column annotations", 
							data: []
						}
					]
				}
			);
			
			//preset annotations
			
			//dataset annotations
			data.dataset[1].annotations=
					[{
						id: 1,
						name: data.dataset[1].name+" column annotations",
						data:[]
					}, 
					{
						id: 2,
						name: data.dataset[1].name+" row annotations", 
						data:[]
					}];
			
			AttachDummyCollection(data.dataset[1].annotations[0].data, "clinical attribute");
			AttachDummyCollection(data.dataset[1].annotations[1].data, "gene attribute");
			
			console.debug("***********",data);
			function RootStorage(schema, data){
				this.schema=schema;
				this.data=data;
			};
			
			NestedStorageMixin.call(RootStorage.prototype, {
				getId: function(obj){return obj.id;}, 
				setId: function(id){
					this.id=id;
					}			
				});
			return new RootStorage(RootStorageSchema, data);
		}
	}());
});