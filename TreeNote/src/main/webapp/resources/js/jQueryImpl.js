function jqueryImpl() {
	$("#login").click(function() {
		$("#navbar").show("slide", {
			direction : "up"
		}, 1000);
		$("#loginContainer").hide("fade", 1000);
		$("#timeline").delay(1000).show("slide", {
			direction : "right"
		}, 500);
		$("#base").delay(1000).show("fade", 500);
		setTimeout("goImpl()", 2000);
	});

	$("#circle").click(function() {
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
	});

	/*
	 * $( document ).click(function() { closeKeyword(); });
	 */

	$("#timeline").click(function() {
		$(this).toggleClass("timeline-out", 500, "easeOutSine");
		$("#timelinec").toggle("drop");
	});
	autocom();
}

function json(data){
	
}

function setKeyword(data) {
	//circleLabel = JSON.parse(data);
	$("#keyword1 #name").text(data.name);
	$("#keyword2 #name").text(data.name);
	$("#keyword3 #name").text(data.name);
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
