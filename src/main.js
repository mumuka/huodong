requirejs.config({
	baseUrl:"src",
	paths:{
		jquery:"http://dev.comeoncloud.net/test/lib/jquery/jquery-2.1.1.min"
	}
})

requirejs(["jquery"],function($){

	$("#baoming").bind("click",function(){
		$(".sendinfobox").css({"-webkit-transform":"translate(0,0px)"})
		$("#baoming").css({"-webkit-transform":"translate(0,49px)"})
		$(".mainbtn").css({"-webkit-transform":"translate(0,-49px)"})
	})

	$(".closebtn").bind("click",function(){
		$(".sendinfobox").css({"-webkit-transform":"translate(0,300px)"})
		$("#baoming").css({"-webkit-transform":"translate(0,0px)"})
		$(".mainbtn").css({"-webkit-transform":"translate(0,0px)"})
	})

})