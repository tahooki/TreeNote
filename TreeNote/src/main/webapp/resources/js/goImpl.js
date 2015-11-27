



function goImpl() {
	// if (window.goSamples) goSamples();
	//json data를 서버에서 호출후 map 생성
	var jsondata = jQuery.getJSON('jsonTest.jsp',function(success){
		var $ = go.GraphObject.make; // for conciseness in defining templates
		
		myDiagram = // 아직 분석 안됨.
			$(go.Diagram, "myDiagram", // div의 이름이 "myDiagram"인 것을 찾아 설정함.
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
				layout : $(go.ForceDirectedLayout), // layout 종류.
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
		myDiagram.nodeTemplate = $(go.Node, "Spot", {
			selectionObjectName : "PANEL", // ??
			isTreeExpanded : false, // 노드의 펼쳐지는 것을 설정하는 부분. 기본이ㅏ false로 해놓으면 펼쳐지지
			// 않는다.
			isTreeLeaf : false
			// 자식노드를 생성하지 못하게 만든다.?
		},
		// the node's outer shape, which will surround the text
		$(go.Panel, "Auto", {
			name : "PANEL"
		}, $(go.Shape, "Circle", // 노드의 모양을 정함.
				{
			fill : "whitesmoke",
			stroke : "black",
			strokeWidth : 2,
			click:function(e, obj){
				console.log(myDiagram.model.getCategoryForNodeData(obj.part.data));
				setKeyword(obj.part.data);
			}
				}, // 기본색이 whitsmoke 인듯... stroke는
				new go.Binding("fill", "color")), $(go.TextBlock, {	
					font : "12pt sans-serif",
					editable : true,
					margin : 2,
					isMultiline : false,
					wrap: go.TextBlock.WrapFit
				}, // 폰트, margin, 텍스트 박스 수정가능을 설정.
				new go.Binding("text", "name")) // 노드에 표시되는 텍스트를 data에서 선택하는부분.. data의
				// property중 name이라는 것을 선택.
		),
		// the expand/collapse button, at the top-right corner
		$("TreeExpanderButton", {
			alignment : go.Spot.TopRight, // +- 오른쪽 상단에 배치
			alignmentFocus : go.Spot.Center,
			// customize the expander behavior to
			// create children if the node has never been expanded
			click : function(e, obj) { // OBJ is the Button
				var node = obj.part; // 버튼 오브젝트가 있는 노드를 받는다.
				if (node === null)
					return; // 노드가 없으면 끝낸다.
				e.handled = true; // ??
				var diagram = node.diagram; // 노드의 다이어 그램을 받는다.
				diagram.startTransaction("	"); // 트랜젝션 시작... 중간에 오류가 나거나하면 롤백됨.
				// this behavior is specific to this incrementalTree sample:
				var data = node.data;
				if (!data.everExpanded) { // data에 everExpanded이 false이거나 없으면...
					// only create children once per node
					// data array에 everExpeanded 라는 property 추가하고 그걸 true
					diagram.model.setDataProperty(data, "everExpanded", true);
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
		}), // end TreeExpanderButton
		$(go.Picture, {
			alignment : go.Spot.TopLeft,
			maxSize : new go.Size(15, 15),
			source : "img/tree1.png",
			click : function(e, obj) {
				// openDialog();
				obj.visible = false;
				// var node = obj.part;
				// node.isTreeExpanded = !node.isTreeExpanded;
			}
		})); // end Node
		
		
		
		// create the model with a root node data
		myDiagram.model = new go.TreeModel([ // 트리모델로 설정
		                                     {
		                                    	 key : 0,
		                                    	 name : "키워드",
		                                    	 color : "lightgreen",
		                                    	 everExpanded : false
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
		// jsonData로 저장된 데이터를 model에 불러옴.
		
		
		
		
		
		
		
		
		myDiagram.model = go.Model
//			.fromJson(document.getElementById("treeData").value);
		.fromJson(JSON.stringify(success))
		console.log(JSON.stringify(success));
		
		myDiagram.model.addChangedListener(function(e) { // changeListener...
			
			if (e.isTransactionFinished) {
				var tx = e.object;
				if (tx instanceof go.Transaction && console) {
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
	var numchildren = Math.floor(Math.random() * 10); // 노드 갯수 랜덤으로 뽑음.
	if (myDiagram.nodes.count <= 1) {
		numchildren += 1; // make sure the root node has at least one child
	}
	// create several node data objects and add them to the model
	var model = myDiagram.model;
	var parent = myDiagram.findNodeForData(parentdata);
	for (var i = 0; i < numchildren; i++) {
		var childdata = { // 데이터를 설정하는 부분인데 key value로 내맘대로 추가 할 수 있다.
			key : model.nodeDataArray.length,
			name : "키워드",
			parent : parentdata.key,
			color : go.Brush.randomColor()
		};
		// add to model.nodeDataArray and create a Node
		model.addNodeData(childdata);
		// position the new child node close to the parent
		var child = myDiagram.findNodeForData(childdata);
		child.location = parent.location;
	}
	console.log(myDiagram.model.toJson());
	return numchildren;

	function save() {
		document.getElementById("mySavedModel").value = myDiagram.model
				.toJson();
		myDiagram.isModified = false;
	}
	function load() {
		myDiagram.model = go.Model.fromJson(document
				.getElementById("mySavedModel").value);
	}
}

function allExpanded() {
	var nodes = myDiagram.nodes;
	while (nodes.hasNext()) {
		if (nodes.value.data.everExpanded) {
			nodes.value.isTreeExpanded = !nodes.value.isTreeExpanded;
		}
		console.log(nodes.value.data.everExpanded);
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
		/*
		 * var children = customText.children var l = children.length; for (var
		 * i = 0; i < l; i++) { var child = children[i]; if (!(child instanceof
		 * HTMLInputElement)) continue; // Make sure the radio button that
		 * equals the text is checked if (child.value == startingValue) {
		 * child.checked = true; } // We want an event to fire when any of the
		 * radio buttons is changed customText.addEventListener("change",
		 * onClick, false); }
		 */

		/*
		 * // customText is a div and doesn't have a "value" field // So we will
		 * make value into a function that will return // the "value" of the
		 * checked radio button customText.value = function() { var children =
		 * customText.children var l = children.length; for (var i = 0; i < l;
		 * i++) { var child = children[i]; if (!(child instanceof
		 * HTMLInputElement)) continue; if (child.checked) { return child.value; } }
		 * return ""; }
		 */

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


