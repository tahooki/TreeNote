$(function(){
	$("#login").click(function() {
		$.getJSON('/user/login',
				function(data){
			if(true){
				
					$("#navbar").show("slide", {
						direction : "up"
					}, 1000);
					$("#loginContainer").css("display","none");
					$('#treeContainer').css('display','block');
					$("#timeline").delay(1000).show("slide", {
						direction : "right"
					}, 500);
					$("#base").delay(1000).show("fade", 500);
					setTimeout("goImpl()", 2000);
					
			}else{
					$('#exampleInputEmail1').val('');
					$('#exampleInputPassword1').val('');
					
				
			}
		})

	})

})


$(function(){
	
	/*$("#circle").click(function() {
		if ($("#circle input").val() == "") {
			$("#circle input").focus();
		} else {
			console.log("??");
			setKeyword($("#circleLabel").text());
		}
	});
	$("#circleInput").on("keydown", function(event) {
		if (event.which == 13 && $(this).val() != "") {
			$(this).hide();
			$("#circleLabel").show().text($(this).val());
			setKeyword($(this).val());
		}
	});
	$("#circleLabel").click(function() {
		$(this).hide();
		$("#circleInput").show().focus().text($(this).val());
	});*/
	
	/*
	 * $( document ).click(function() { closeKeyword(); });
	 */
	
	$("#timeline").click(function() {
		$(this).toggleClass("timeline-out", 500, "easeOutSine");
		$("#timelinec").toggle("drop");
	});
	$("#btn_content").click(function() {
		$("#content").toggle("drop");
	});
	$("#btn_mypage").click(function() {
		$("#mypage").toggle("drop");
	});
	$("#btn_userpage").click(function() {
		$("#userpage").toggle("drop");
	});
	$("#btn_tree").click(function() {
		$("#treelist").toggle("drop");
	});
	$("#btn_reply").click(function() {
		$("#reply").toggle("drop");
	});
	$("#btn_friend").click(function() {
		$("#friendlist").toggle("drop");
	});
	autocom();
	
})
function json(data){
	
}
//페이스북 로그인 버트 클릭시 이벤
function facebookLogin(){
	
		$("#navbar").show("slide", {
			direction : "up"
		}, 1000);
		$("#loginContainer").css("display","none");
		$('#treeContainer').css('display','block');
		$("#timeline").delay(1000).show("slide", {
			direction : "right"
		}, 500);
		$("#base").delay(1000).show("fade", 500);
		setTimeout("goImpl()", 2000);
	
}

function setKeyword(data) {
	//circleLabel = JSON.parse(data);
	$("#keyword1 #name").text(data.keyword);
	$("#keyword2 #name").text(data.keyword);
	$("#keyword3 #name").text(data.keyword);
	$("#keyword1").show();
	$("#keyword2").show();
	$("#keyword3").show();
}

function closeKeyword() {
	$("#keyword1").hide();
	$("#keyword2").hide();
	$("#keyword3").hide();
}
function openDialog() {
	$("#dialog").show().dialog();
}

function autocom() {
	var availableTags = [ "ActionScript", "AppleScript", "Asp", "BASIC", "C",
			"C++", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran",
			"Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP",
			"Python", "Ruby", "Scala", "Scheme" ];
	$("#inputText").autocomplete({
		source : availableTags
	});
}

function inputText() {
	var a = "<input type='text' class='form-control'>";
	return $(a);
}
