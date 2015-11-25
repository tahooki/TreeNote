<%@ page contentType="text/html; charset=utf-8" %>
<!doctype html>
<html lang="en" style="height:100%; min-height: 400px; min-width: 300px;">
<head>
<meta charset="utf-8">
<title>Tree</title>

<!-- 라이브러리 -->

<script src="js/jquery.min.js"></script>
<script src="js/jquery-ui.min.js"></script>
<script src="js/go.js"></script>
<script src="js/bootstrap.min.js"></script>

<link rel="stylesheet" href="css/jquery-ui.min.css">	
<link rel="stylesheet" href="css/bootstrap.css">
<link rel="stylesheet" href="css/bootstrap.min.css">

<!-- 개발 부분 -->

<script src="js/goImpl.js"></script>
<script src="js/jQueryImpl.js"></script>

<link rel="stylesheet" href="css/tree.css">

<!-- 개발 부분 -->

<script>
  $(function() {
	  jqueryImpl();
  });
  </script>
</head>
<body style="height:100%;">
	<nav class="navbar navbar-fixed-top" id="navbar"
		style="display: none; background-color: green;">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed"
					data-toggle="collapse" data-target="#navbar" aria-expanded="false"
					aria-controls="navbar">
					<span class="sr-only">Toggle navigation</span> <span
						class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
				<img id="tree" src="img/tree2.png" width="40px" height="40px"
					style="margin: 5px;">
			</div>
			<div id="navbar" class="navbar-collapse collapse">
				<form class="navbar-form navbar-right">
					<div class="navber" style="color: white;" align="center">
						honggildong@gmail.com</div>
				</form>
			</div>
			<!--/.navbar-collapse -->
		</div>
	</nav>

	<div
		style=" max-width: 992px; width: 100%; height: 100%; border: 1px solid #00FF00; margin: 0 auto; border-radius: 5px;">
		<!-- /container -->
		<div class="container border-radius-base" id="loginContainer">
			<!-- Example row of columns -->
			<div class="row" style="padding-top: 300px;">
				<div
					style="max-width: 330px; padding: 15px; margin: auto; border: 1px solid #00FF00; border-radius: 5px;">
					<div class="form-group has-success">
						<label>이메일 주소</label> <input type="email" class="form-control"
							id="exampleInputEmail1" placeholder="이메일을 입력하세요">
					</div>
					<div class="form-group">
						<label for="exampleInputPassword1">암호</label> <input
							type="password" class="form-control" id="exampleInputPassword1"
							placeholder="암호">
					</div>
					<div class="checkbox">
						<label> <input type="checkbox" value="remember-me">
							Remember me
						</label>
					</div>
					<div class="form-group">
						<button id="login" type="submit" class="btn btn-success"
							style="width: 100%;">Sign in</button>
					</div>
				</div>
			</div>
		</div>
		
		<div id="base" style="position:relative; width: 100%; height: 100%; float: left; padding-top:50px ;display: none;">
			<div id="myDiagram" style="position:relative; background-color: white; float: left; border: solid 1px black; width: 100%; height: 100%"></div>
			
			<div class="timeline-in" id="timeline">
				<div id="timelinec" style="display: none;">
					<input type="text" id="search" class="form-control" style="width:180px; margin: 0 auto; " >
					<div style="height:50px;"></div>
					<div id="keyword1"
						style="width: 180px; height: 100px; border: 2px solid #00ff00; margin-left: 8px; margin-bottom: 10px; border-radius: 5px;">
						<div id="name"
							style="text-align: left; font-size: 20px; padding: 10px"></div>
					</div>
					<div id="keyword2"
						style="width: 180px; height: 100px; border: 2px solid #00ff00; margin-left: 8px; margin-bottom: 10px; border-radius: 5px; display: none;">
						<div id="name"
							style="text-align: left; font-size: 20px; padding: 10px"></div>
					</div>
					<div id="keyword3"
						style="width: 180px; height: 100px; border: 2px solid #00ff00; margin-left: 8px; margin-bottom: 10px; border-radius: 5px; display: none;">
						<div id="name"
							style="text-align: left; font-size: 20px; padding: 10px"></div>
					</div>
				</div>
			</div>		
		</div>
		<!-- style="width: 200px; height: 100%; border: 2px solid #00FF00; background: #efefef; float: right; display: none; -->
		
	</div>
	<textarea  id="treeData" style="display:none;">
	{ "class": "go.TreeModel",
  "nodeDataArray": [ 
{"key":0, "name":"동물", "color":"lightgreen", "everExpanded":true},
{"key":1, "name":"토끼", "parent":0, "color":"#8bfed1"},
{"key":2, "name":"식물", "parent":0, "color":"#bcedf4", "everExpanded":true},
{"key":3, "name":"사자", "parent":0, "color":"#a099e5"},
{"key":4, "name":"부엉이", "parent":0, "color":"#8ff6c3"},
{"key":5, "name":"올빼미", "parent":0, "color":"#cd858a"},
{"key":6, "name":"사슴", "parent":0, "color":"#f681a6"},
{"key":7, "name":"치타", "parent":0, "color":"#fc9dfd"},
{"key":8, "name":"참새", "parent":0, "color":"#e1a0fb"},
{"key":9, "name":"곤충", "parent":0, "color":"#fea2e4", "everExpanded":true},
{"key":10, "name":"장미", "parent":0, "color":"#fdc3cb", "everExpanded":true},
{"key":11, "name":"수박", "parent":2, "color":"#dbbb9b"},
{"key":12, "name":"느티나무", "parent":2, "color":"#8ed3a6"},
{"key":13, "name":"잔디", "parent":2, "color":"#ee92ae"},
{"key":14, "name":"토마토나무", "parent":2, "color":"#c2babc"},
{"key":15, "name":"포도나무", "parent":2, "color":"#cbb2d1"},
{"key":16, "name":"해바라기", "parent":2, "color":"#b7ecea"},
{"key":17, "name":"등등", "parent":2, "color":"#ef81fc"},
{"key":18, "name":"키워드", "parent":2, "color":"#a3c3b4"},
{"key":19, "name":"키워드", "parent":2, "color":"#9fcde6"},
{"key":20, "name":"잠자리", "parent":9, "color":"#87a097"},
{"key":21, "name":"풍뎅이", "parent":9, "color":"#f6faa1"},
{"key":22, "name":"파리", "parent":9, "color":"#f5aafc"},
{"key":23, "name":"모기", "parent":9, "color":"#c3cdce"},
{"key":24, "name":"메뚜기", "parent":9, "color":"#f185f5"},
{"key":25, "name":"키워드", "parent":9, "color":"#dbdec7"},
{"key":26, "name":"키워드", "parent":9, "color":"#e4c586"},
{"key":27, "name":"키워드", "parent":9, "color":"#91f79d"},
{"key":28, "name":"키워드", "parent":9, "color":"#f3f69e"}
 ]}
</textarea>
<div id="dialog" title="Basic dialog" style="display: none; width:100%;">
  <p>This is the default dialog which is useful for displaying information. The dialog window can be moved, resized and closed with the 'x' icon.</p>
</div>
	<!-- /container -->
<input id="inputText" type="text" class="form-control"  style="display:none; width:auto;">
</body>
</html>