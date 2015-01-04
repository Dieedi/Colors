// function to change color in test box
$(document).ready(function () {
	$("#color-1").keyup(function () {
		$("#color1").css("background-color", $(this).val());
		$("h1").css("color", $(this).val());
	});
	$("#color-2").keyup(function () {
		$("#color2").css("background-color", $(this).val());
		$("p").css("color", $(this).val());
	});
	$("#color-3").keyup(function () {
		$("#color3").css("background-color", $(this).val());
		$("a").css("color", $(this).val());
	});
	$("#color-4").keyup(function () {
		$("#color4").css("background-color", $(this).val());
		$(".col-md-9").css("background-color", $(this).val());
	});
	$("#color-5").keyup(function () {
		$("#color5").css("background-color", $(this).val());
		$("h2").css("color", $(this).val());
	});

})