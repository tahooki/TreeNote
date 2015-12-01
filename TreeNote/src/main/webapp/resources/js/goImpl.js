var selectKeyword;
function goImpl() {
	// if (window.goSamples) goSamples();
	//json data를 서버에서 호출후 map 생성

	var jsondata = jQuery.getJSON('/tree/getTree/1000000',function(success){

		console.log(success);
		var gojs = go.GraphObject.make; // for conciseness in defining templates
		
		myDiagram = // 아직 분석 안됨.
			gojs(go.Diagram, "myDiagram", // div의 이름이 "myDiagram"인 것을 찾아 설정함.
			{
				"toolManager.mouseWheelBehavior" : go.ToolManager.WheelZoom, // 마우스
				// 속성
				// 설정.
				// whellzoom으로
				// 설정해서
				// 줌도 되게
				// 만듬.
				initialAutoScale : go.Diagram.Uniform, // 화면 정렬 타입
				// contentAlignment: go.Spot.Center, // 화면을 가운데로 적용해서 움직이지 않게 함.
				initialContentAlignment : go.Spot.Center, // 안에 들어있는 노드를 가운데로 정렬시킴
				layout : gojs(go.ForceDirectedLayout), // layout 종류.
				// moving and copying nodes also moves and copies their subtrees
				"commandHandler.copiesTree" : true, // for the copy command
				"commandHandler.deletesTree" : true, // for the delete command
				"draggingTool.dragsTree" : true, // dragging for both move and copy
				"undoManager.isEnabled" : true, // ctrl+z, ctrl+y 되게마는 것.
				hasHorizontalScrollbar : false,
				hasVerticalScrollbar : false
			});
		
		// Define the Node template.
		// This uses a Spot Panel to position a button relative
		// to the ellipse surrounding the text.
		myDiagram.nodeTemplate = gojs(go.Node, "Spot", {
				selectionObjectName : "PANEL", // ??
				isTreeExpanded : false, // 노드의 펼쳐지는 것을 설정하는 부분. 기본이ㅏ false로 해놓으면 펼쳐지지
				// 않는다.
				isTreeLeaf : false,
				// 자식노드를 생성하지 못하게 만든다.?
				click:function(e, obj){
					setKeyword(obj.part.data);
				},
				selectionChanged:function(part){
					selectKeyword = part;
					part.findObject("button1").visible = !part.findObject("button1").visible;
					part.findObject("button2").visible = !part.findObject("button2").visible;
				}	
			},
			new go.Binding("isShadowed", "isSelected").ofObject(),
	        {
		          selectionAdorned: false,
		          shadowOffset: new go.Point(0, 0),
		          shadowBlur: 15,
		          shadowColor: "blue",
		    },
			// the node's outer shape, which will surround the text
			gojs(go.Panel, "Auto", {
					name : "PANEL"
				}, 
				gojs(go.Shape, "Circle", // 노드의 모양을 정함.
				{
					fill : "whitesmoke",
					stroke : "black",
					strokeWidth : 2,
				}, // 기본색이 whitsmoke 인듯... stroke는
				new go.Binding("fill", "color")), gojs(go.TextBlock, {	
					font : "12pt sans-serif",
					editable : true,
					margin : 2,
					isMultiline : false,
					wrap: go.TextBlock.WrapFit
				}, // 폰트, margin, 텍스트 박스 수정가능을 설정.
				new go.Binding("text", "keyword"))// 노드에 표시되는 텍스트를 data에서 선택하는부분.. data의
					// property중 name이라는 것을 선택.
			),
			// the expand/collapse button, at the top-right corner
			/*gojs("TreeExpanderButton", {
				name : "button1",
				alignment : go.Spot.TopRight, // +- 오른쪽 상단에 배치
				alignmentFocus : go.Spot.Center,
				visible : false,
				// customize the expander behavior to
				// create children if the node has never been expanded
				click : function(e, obj) { // OBJ is the Button
					console.log("버튼 obj : "+obj);
					var node = obj.part; // 버튼 오브젝트가 있는 노드를 받는다.
					if (node === null)
						return; // 노드가 없으면 끝낸다.
					e.handled = true; // ??
					var diagram = node.diagram; // 노드의 다이어 그램을 받는다.
					diagram.startTransaction("	"); // 트랜젝션 시작... 중간에 오류가 나거나하면 롤백됨.
					// this behavior is specific to this incrementalTree sample:
					var data = node.data;
					if (data.collapse==0) { // data에 everExpanded이 false이거나 없으면...
						// only create children once per node
						// data array에 everExpeanded 라는 property 추가하고 그걸 true
						diagram.model.setDataProperty(data, "collapse", 1);
						var numchildren = createSubTree(data); // 트리생성
						if (numchildren === 0) { // 자식이 없으면 +- 버튼을 안보이게 만듬.
							obj.visible = false;
						}
						console.log(myDiagram.model.toJson());
					}
					// this behavior is generic for most expand/collapse tree buttons:
					// 이 노드를 펼치거나 안펼치거나 한다.
					node.isTreeExpanded = !node.isTreeExpanded; // expand or collapse
					diagram.commitTransaction("CollapseExpandTree"); // startTransaction
				}
			}),*/ // end TreeExpanderButton
			gojs(go.Picture, {
				name: "button1",
				alignment : go.Spot.TopRight,
				maxSize : new go.Size(20, 20),
				source : "resources/img/btn_add.png",
				visible : false,
				click : function(e, obj) {
					// openDialog();
					var node = obj.part; // 버튼 오브젝트가 있는 노드를 받는다.
					if (node === null)
						return; // 노드가 없으면 끝낸다.
					e.handled = true; // ??
					var diagram = node.diagram; // 노드의 다이어 그램을 받는다.
					diagram.startTransaction("	"); // 트랜젝션 시작... 중간에 오류가 나거나하면 롤백됨.
					// this behavior is specific to this incrementalTree sample:
					var data = node.data;
					
					createSubTree(data); // 트리생성

					if(!obj.part.isTreeExpanded){
						obj.part.findObject("button2").source = "resources/img/btn_collapse.png";
						obj.part.isTreeExpanded = true;
						obj.part.data.collapse = 1;
						updateKeyword(obj.part.data);
					}
					
					diagram.commitTransaction("CollapseExpandTree"); // startTransaction
				}
			}),
			gojs(go.Picture, {
				name: "button2",
				alignment : go.Spot.BottomRight,
				maxSize : new go.Size(20, 20),
				source : "resources/img/btn_expanded.png",
				visible : false,
				click : function(e, obj) {
					// openDialog();
					if(obj.part.isTreeExpanded){
						obj.source = "resources/img/btn_expanded.png";
						obj.part.isTreeExpanded = false;
						obj.part.data.collapse = 0;
						updateKeyword(obj.part.data);
					}else{
						obj.source = "resources/img/btn_collapse.png";
						obj.part.isTreeExpanded = true;
						obj.part.data.collapse = 1;
						updateKeyword(obj.part.data);
					}
				}
			})
			
		); // end Node
		
		
		
		// create the model with a root node data
		myDiagram.model = new go.TreeModel([ // 트리모델로 설정
	     {
	    	 key : 0,
	    	 keyword : "키워드",
	    	 color : "lightgreen",
	    	 collapse : 0
	     } // 초기 토드 추가
	     ]);
		/*
		 * myDiagram.model = new go.TreeModel([ { key: 0, color: "lightgreen",
		 * everExpanded: false } ]);
		 */
		myDiagram.layoutDiagram(true);
		// myDiagram.model =
		// go.Model.fromJson(document.getElementById("treeData").value);
//	console.log(document.getElementById("treeData")); // 저장한 데이터 확인하는 부분...
		// jsonData로 저장된 데이터를 model에 불러옴
		myDiagram.model = go.Model
//			.fromJson(document.getElementById("treeData").value);
		.fromJson(success.Tree)
//		console.log((success));
		
		myDiagram.model.addChangedListener(function(e) { // changeListener...
			
			if (e.isTransactionFinished) {
				var tx = e.object;
				if (tx instanceof go.Transaction && console) {
					tx.changes.each(function(ea){
						if (e.modelChange !== "nodeDataArray") return;
					      // record node insertions and removals
					      if (e.change === go.ChangedEvent.Insert) {
					        console.log(evt.propertyName + " added node with key: " + e.newValue.key);
					      } else if (e.change === go.ChangedEvent.Remove) {
					        console.log(evt.propertyName + " removed node with key: " + e.oldValue.key);
					      }
					});
					console.log(tx.toString());
					tx.changes.each(function(c) {
						// consider which ChangedEvents to record
						if (c.model)
							console.log("  " + c.toString());
					});
				}
			}
		});
		
		myDiagram.addDiagramListener("TextEdited", function(e) {
		});
		// console.log(myDiagram.model);
		allExpanded();
		myDiagram.toolManager.textEditingTool.defaultTextEditor = createInput();
		
	})
	
	
}

// This dynamically creates the immediate children for a node.
// The sample assumes that we have no idea of whether there are any children
// for a node until we look for them the first time, which happens
// upon the first tree-expand of a node.
function createSubTree(parentdata) { // 노드를 생성하는 부분.
	jQuery.ajax( 
	{
		url : "/keyword/addKeyword" ,
		method : "POST" ,
		dataType : "json" ,
		data: JSON.stringify({
			key : 0,
			treeNo : 1000000,
			keyword : "키워드",
			ownerUserNo : 1000000,
			parent : parentdata.key,
			collapse : 0,
			color : go.Brush.randomColor()
		}),
		headers : {
			"Accept" : "application/json",
			"Content-Type" : "application/json"
		},
		success : function(JSONData , status) {
			console.log(JSONData.keyword);
			var model = myDiagram.model;
			var parent = myDiagram.findNodeForData(parentdata);
			// add to model.nodeDataArray and create a Node
			model.addNodeData(JSONData.keyword);
			// position the new child node close to the parent
			var child = myDiagram.findNodeForData(JSONData.keyword);
			child.location = parent.location;
			
			parentdata.collapse = 1;
			updateKeyword(parentdata);
		}
	})
}

function updateKeyword(keyword) { // 노드를 생성하는 부분.
	jQuery.ajax( 
	{
		url : "/keyword/updateKeyword" ,
		method : "POST" ,
		dataType : "json" ,
		data: JSON.stringify({
			key : keyword.key,
			treeNo : keyword.treeNo,
			keyword : keyword.keyword,
			ownerUserNo : keyword.ownerUserNo,
			parent : keyword.parent,
			collapse : keyword.collapse,
			color : keyword.color
		}),
		headers : {
			"Accept" : "application/json",
			"Content-Type" : "application/json"
		},
		success : function(JSONData , status) {
		}
	})
}

function save() {
	document.getElementById("mySavedModel").value = myDiagram.model
			.toJson();
	myDiagram.isModified = false;
}
function load() {
	myDiagram.model = go.Model.fromJson(document
			.getElementById("mySavedModel").value);
}

function allExpanded() {
	var nodes = myDiagram.nodes;
	while (nodes.hasNext()) {
		if (nodes.value.data.collapse == 1) {
			nodes.value.isTreeExpanded = !nodes.value.isTreeExpanded;
			nodes.value.findObject("button2").source = "resources/img/btn_collapse.png";
		}
	}
}

function createInput() {
	var customText = document.getElementById("inputText");
	customText.onActivate = function() {
		customText.style.visibility = "";
		var startingValue = customText.textEditingTool.textBlock.text;

		// Finish immediately when a radio button is pressed
		/*
		 * var onClick = function(e) { var tool = customText.textEditingTool; if
		 * (tool === null) return; tool.acceptText(go.TextEditingTool.Tab); }
		 */
		customText.value = startingValue;
		
		// Do a few different things when a user presses a key
		var loc = customText.textEditingTool.textBlock.getDocumentPoint(go.Spot.TopLeft);
		var loc2 = customText.textEditingTool.textBlock.getDocumentPoint(go.Spot.BottomRight);
		var pos = myDiagram.transformDocToView(loc);
		var pos2 = myDiagram.transformDocToView(loc2);
		customText.style.left = pos.x + "px";
		customText.style.top = pos.y + "px";
		customText.style.width =  (5 + pos2.x - pos.x) + "px";
		customText.style.height = (5 + pos2.y - pos.y) + "px";
		customText.style.padding = 1;
		customText.style.fontSize = (( pos2.y - pos.y)*0.6) + "pt";
		customText.style.fontSizeAdjust="0.58";
		customText.style.display ="block";
	}
	/*customText.addEventListener("input", function() {
		var tool = this.textEditingTool, c = tool.textBlock;
		c.text = this.value;
		var d = this.yI;
		// Ph(c, a.Eg.Bu, Infinity);
		this.style.width = 20 + c.Aa.width * d + "px";
		this.style.height = 10 + c.Aa.height * d + "px";
		this.rows = c.rH
	}, !1);*/
	
	customText.addEventListener("keydown", function(e) {
		var keynum = e.which;
		var tool = customText.textEditingTool;
		if (tool === null)
			return;
		if (keynum == 13) { // Accept on Enter
			tool.acceptText(go.TextEditingTool.Enter);
			//console.log(tool.diagram.nodeTemplate.findMainElement().data);
			selectKeyword.data.keyword = customText.value;
			updateKeyword(selectKeyword.data);
			e.preventDefault();
			return false;
		} else if (keynum == 9) { // Accept on Tab
			tool.acceptText(go.TextEditingTool.Tab);
			e.preventDefault();
			return false;
		} else if (keynum === 27) { // Cancel on Esc
			tool.doCancel();
			if (tool.diagram)
				tool.diagram.focus();
		}
	}, false);
	return customText;
}

//findTreeChildrenNodes() 