$(document).ready(function(){
	$("#toggleClick").click(function(){
		$("#app-usersubmenu").slideToggle(300);
		$('.rotateIcon').addClass('toggleIcon');
		$(".toggleIcon").toggleClass('rotate');
	});

	$("#toggleClickMenu").click(function(){
		$("#app-menusubmenu").slideToggle(300);
		$('.rotateComponentIcon').addClass('toggleIcon2');
		$(".toggleIcon2").toggleClass('rotate2');
	});

	$("#toggleClickForm").click(function(){
		$("#app-formsubmenu").slideToggle(300);
		$('.rotateFormIcon').addClass('toggleIcon3');
		$(".toggleIcon3").toggleClass('rotate3');
	});

	$("#toggleClickTables").click(function(){
		$("#app-tablesubmenu").slideToggle(300);
		$('.rotateTableIcon').addClass('toggleIcon4');
		$(".toggleIcon4").toggleClass('rotate4');
	});

	$("#toggleClickMaps").click(function(){
		$("#app-mapsubmenu").slideToggle(300);
		$('.rotateMapIcon').addClass('toggleIcon5');
		$(".toggleIcon5").toggleClass('rotate5');
	});


});