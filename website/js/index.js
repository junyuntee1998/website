$(function(){
	
	$(window).scroll(function(){
		if($(window).scrollTop() <= 40){
			$(".navbar-brand").css("font-size","50px");
			$(".navbar-brandHeader").css("float","none");
			$("#navbarNavAltMarkup").css("float","none");
		} else{
			$(".navbar-brand").css("font-size", "1.25rem");
			$(".navbar-brandHeader").css("float","left");
			$("#navbarNavAltMarkup").css("float","right");
		}; 
		
	});
});
