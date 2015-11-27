<%@ page contentType="text/html; charset=utf-8" %>
<!doctype html>
<html lang="en" style="height:100%; min-height: 400px; min-width: 300px;">
<head>
<meta charset="utf-8">
<title>Tree</title>

<!-- 라이브러리 -->

<script src="resources/js/jquery.min.js"></script>
<script src="resources/js/jquery-ui.min.js"></script>
<script src="resources/js/go.js"></script>
<script src="resources/js/bootstrap.min.js"></script>

<link rel="stylesheet" href="resources/css/jquery-ui.min.css">	
<link rel="stylesheet" href="resources/css/bootstrap.css">
<link rel="stylesheet" href="resources/css/bootstrap.min.css">

<!-- 개발 부분 -->

<script src="resources/js/goImpl.js"></script>
<script src="resources/js/jQueryImpl.js"></script>
<script type="text/javascript" src="resources/js/facebookLogin.js"></script>
<link rel="stylesheet" href="resources/css/tree.css">

<script type="text/javascript">

</script>

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
				<img id="tree" src="resources/img/tree2.png" width="40px" height="40px"
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


	<div id="loginContainer"
		style=" max-width: 992px; width: 100%; height: 100%; margin: auto;">
		<!-- /container -->
		<div class="container border-radius-base" >
			<!-- Example row of columns -->
			<div class="row" style="padding-top: 300px;">
				<div
					style="max-width: 330px; padding: 15px; margin: auto; border: 1px solid #00FF00; border-radius: 5px;">
					<div class="form-group has-success">
						<input type="email" class="form-control"
							id="exampleInputEmail1" placeholder="이메일을 입력하세요"></div>
					<div class="form-group">
						<input type="password" class="form-control" id="exampleInputPassword1"
							placeholder="password">
					</div>
					<div class="checkbox">
						<label> <input type="checkbox" value="remember-me">
							Remember me
						</label>
					</div>
					<div class="form-group">
						<button id="login" type="submit" class="btn btn-success"
							style="width: 100%; height:40px">Sign in</button>
					</div>
					
						<img id="facebookLogin" alt="facebookLogin" src="../resources/img/facebookLogin.png">
				</div>
			</div>
		</div>

	</div>




	<div id="treeContainer"
		style="display:none; max-width: 992px; width: 100%; height: 100%; border: 1px solid #00FF00; margin: 0 auto; border-radius: 5px;">

		
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

<div id="dialog" title="Basic dialog" style="display: none; width:100%;">
  <p>This is the default dialog which is useful for displaying information. The dialog window can be moved, resized and closed with the 'x' icon.</p>
</div>
	<!-- /container -->
<input id="inputText" type="text" class="form-control"  style="display:none; width:auto;">


<script type="text/javascript">
$('#facebookLogin').on('click',function(){
	login();
})

</script>
</body>
</html>