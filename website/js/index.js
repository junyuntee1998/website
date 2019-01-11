$(document).ready(
	$('.navbar-toggler-icon').on('click', function(){
   $(this).toggleClass('on');
})

	);

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
var stuff
var xhr = new XMLHttpRequest();
xhr.open('GET','content.json',true);
xhr.responseType='text';
xhr.send();

xhr.onload=function(){
	if(xhr.status===200){
		stuff = JSON.parse(xhr.responseText);
document.getElementById('title').innerHTML=stuff.title;
		document.getElementById('title2').innerHTML=stuff.hero_title;
document.getElementById('cardBody').innerHTML=stuff.article_snippet_1.desc;
document.getElementById('cardBody2').innerHTML=stuff.article_snippet_2.desc;
document.getElementById('cardBody3').innerHTML=stuff.article_snippet_3.desc;
		document.getElementById('cardBody4').innerHTML=stuff.article_snippet_4.desc;
		document.getElementById('cardBody5').innerHTML=stuff.article_snippet_5.desc;
		document.getElementById('cardBody6').innerHTML=stuff.article_snippet_6.desc;
document.getElementById('image').src=stuff.article_snippet_1.img_path;
document.getElementById('image2').src=stuff.article_snippet_2.img_path;
document.getElementById('image3').src=stuff.article_snippet_3.img_path;
		document.getElementById('image4').src=stuff.article_snippet_3.img_path;
		document.getElementById('image5').src=stuff.article_snippet_3.img_path;
		document.getElementById('image6').src=stuff.article_snippet_3.img_path;
		document.getElementById('descTitle').innerHTML=stuff.feature_section_1.title;
		document.getElementById('number').innerHTML=stuff.feature_section_1.number;
	}
	
}
	

