$(document).ready(function(){
	console.log("no prblem in jquery");
	getfeedback();
	$('#addstudenterror').html('');
	$("#facultyloginbutton").click(function(){
		var facultyform =$("#facultyloginform");
		if(!facultyform[0].checkValidity()){
			facultyform[0].reportValidity();
			return;
		}
		var dataString = 'action=facultylogin&' + $("#facultyloginform").serialize();
		$.ajax({
			type:"POST",
			url:"ajax.php",
			data : dataString,
			success : function(result){
				alert("form submitted");
				document.getElementById('facultyloginform').reset();
				document.getElementById("mmsg").innerHTML='<h3 class="alert alert-danger">Password are not same</h3>';
				document.getElementById("successmmsg").innerHTML=result;
			}
		});			
	});

	$('#addstudentbutton').click(function(){
		$('#addstudenterror').html('');
		var studentname =$('#studentname').val();
		var studentyear =$('#studentyear').val();
		var studentbranch =$('#studentbranch').val();
		var studentrollno =$('#studentrollno').val();
		// console.log(studentname+studentyear+studentbranch+studentrollno);
		if(studentname =='' || studentyear =='default' || studentrollno =='' || studentbranch =='default'){
			$('#addstudenterror').html('<br><p class="text-danger">All fields are mandetory</p>');
			var studentform =$("#addstudentform");
			if(!studentform[0].checkValidity()){
				studentform[0].reportValidity();
				return;
			}
			window.setTimeout(givedealy, 2000);
			function givedealy(){
				$('#addstudenterror').html('');
			}
			return;
		}
		var studentform =$("#addstudentform");
		if(!studentform[0].checkValidity()){
			studentform[0].reportValidity();
			return;
		}
		var dataString = 'action=addstudent&' + $("#addstudentform").serialize();
		$.ajax({
			type:"POST",
			url:"ajax.php",
			data: dataString,
			success:function(result){
				$('#addstudenterror').html(result);
				document.getElementById('addstudentform').reset();
				window.setTimeout(givedealy, 2000);
				function givedealy(){
					$('#addstudenterror').html('');
				}
			}
		});
	});

	$("#addfacultybutton").click(function(){
		$('#addfacultyerror').html('');
		var facultyname =$('#facultyname').val();
		var facultyemailid =$('#facultyemailid').val();
		var facultyid =$('#facultyid').val();
		var password =$('#facultyassignpassword').val();
		if (facultyname=='' || facultyemailid =='' || facultyid=='' || password =='') {
			$('#addfacultyerror').html('<br><p class="text-danger">All fields are mandetory</p>');
			var facultyform =$("#addfacultyform");
			if(!facultyform[0].checkValidity()){
				facultyform[0].reportValidity();
				return;
			}
			window.setTimeout(givedealy, 2000);
			function givedealy(){
				$('#addfacultyerror').html('');
			}	
			return;
		}
		var facultyform =$("#addfacultyform");
		if(!facultyform[0].checkValidity()){
			facultyform[0].reportValidity();
			return;
		}
		var dataString = 'action=addfaculty&' + $('#addfacultyform').serialize();
		$.ajax({
			type:"POST",
			url:"ajax.php",
			data : dataString,
			success:function(result){
				console.log(result);
				$('#addfacultyerror').html(result);
				document.getElementById('addfacultyform').reset();
				window.setTimeout(givedealy, 2000);
				function givedealy(){
					$('#addfacultyerror').html('');
				}
			}
		})
	});

	$("#adminloginbutton").click(function(){
		var adminform =$("#adminloginform");
		if(!adminform[0].checkValidity()){
			adminform[0].reportValidity();
			return;
		}
		var dataString = 'action=adminlogin&' + $("#adminloginform").serialize();
		$.ajax({
			type:"POST",
			url:"ajax.php",
			data : dataString,
			success : function(result){
				alert("form submitted");
				document.getElementById('adminloginform').reset();
			}
		});			
	});
	$(".viewrecords").click(function(){
		// location.href="viewrecords.php";
	});

	function printElement(elem) {
		var domClone = elem.cloneNode(true);

	    var $printSection = document.getElementById("printSection");

	    if (!$printSection) {
	        var $printSection = document.createElement("div");
	        $printSection.id = "printSection";
	        document.body.appendChild($printSection);
	    }

	    $printSection.innerHTML = "";
	    $printSection.appendChild(domClone);
	    window.print();
	}

	$("#attendanceyear").on("change",function(){
		var year =$("#attendanceyear").val();
		if(year =="First"){
			console.log("First year")
$("#attendancesem").html('<option selected>Select Semester</option><option value="First">First</option><option value="Second">Second</option>');
		}else{
			if(year =="Second"){
$("#attendancesem").html('<option selected>Select Semester</option><option value="Third">Third</option><option value="Fourth">Fourth</option>');
			}else{
				if(year =="Third"){
$("#attendancesem").html('<option selected>Select Semester</option><option value="Fifth">Fifth</option><option value="Sixth">Sixth</option>');
				}else{
					if(year =="Fourth"){
$("#attendancesem").html('<option selected>Select Semester</option><option value="Seventh">Seventh</option><option value="Eighth">Eighth</option>');
					}
				}				
			}
		}
	});

	$("#attendancebranch").on("change",function(){
		var branch = $("#attendancebranch").val();
		var year =$("#attendanceyear").val();
		var sem =$("#attendancesem").val();
		var dataString = 'action=selectinput&'+'year='+year+'&branch='+branch+'&sem='+sem;
		console.log(dataString);
		$.ajax({
			type:"POST",
			url:"ajax.php",
			data : dataString,
			success : function(result){
				console.log(result);
				$("#attendancesubject").html(result);
			}
		});
	});

	$("#attendancebutton").click(function(){
		var dataString = 'action=adminlogin&' + $("#facultypageform").serialize();
		console.log(dataString);
	});

	$('#viewattendancebutton').click(function(){
		var dataString ='action=showstudentdetails' + $("#viewrecordform").serialize();
	});

	$("#feedsubmit").click(function(){
		var feedform= $("#feedbackform");
		if(!feedform[0].checkValidity()){
		feedform[0].reportValidity();
		return;
		}
		var feedback ="action=feedback&"+ $("#feedbackform").serialize();
		$.ajax({
			type:"POST",
			url:"ajax.php",
			data: feedback,
			success:function(result){
				alert(result);
				document.getElementById("feedbackform").reset();
			}
		});
	});

	function getfeedback(){
		var action = "showmsgs";
		$.ajax({
			type:"POST",
			url:"ajax.php",
			data: {action:action},
			success:function(result){
				// console.log(result);
				document.getElementById("feedbacks").innerHTML=result;
			}
		});
	}

	document.getElementById("printstatus").onclick = function () {
		printElement(document.getElementById("attendancediv"));
	};
	document.getElementById("printmarksstatus").onclick = function () {
		printElement(document.getElementById("marksdiv"));
	};
});  