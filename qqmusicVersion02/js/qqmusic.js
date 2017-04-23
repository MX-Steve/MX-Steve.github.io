//登录页面
$("#btn-login").click(function(){
	var n = $("#uname").val();
	var p = $("#upwd").val();
	//2.3.3 发送get请求 data/login.php
	//2.3.4 参数用户名密码
	//2.3.4 获取返回数据
	var url = "data/login.php?uname="+ n+"&upwd="+p;
	$.get(url,function(data){
		//      a:登录框隐藏
		//      c:保存用户名 用户id全局
		if(data > 0){
			loginParent.className = 'loginParent';
			$("#welcome").html("欢迎回来:"+n);
			$("#welcome").css('opacity',1);
		}else{
			//2.3.6 如果返回数据小于0 登录失败
			//      提示出错｛用户名和密码有误｝
			//      class="alert"
			$("p.alert").html("用户名密码有误");
		}


	});

});

//注册时信息
$("#btn-register").click(function(){
	var n = $("#uname").val();
	var p = $("#upwd").val();
	//2.3.3 发送get请求 data/login.php
	//2.3.4 参数用户名密码
	//2.3.4 获取返回数据
	var url = "data/register.php?uname="+ n+"&upwd="+p;
	$.get(url,function(data){
		//      a:登录框隐藏
		//      c:保存用户名 用户id全局
		if(data === 'success'){
			$("p.alert").html("注册成功，请点击登录按钮登录！");
		}else{
			//2.3.6 如果返回数据小于0 登录失败
			//      提示出错｛用户名和密码有误｝
			//      class="alert"
			$("p.alert").html("用户注册失败，请重试！");
		}
	});
});
//Mv首播
$('.MVpicture').find('.play').css({
	'opacity':0,
	'width':0,
	'height':0
});
var lis = $('.MVpicture').find('li');
for(var i=0;i<lis.length;i++){
	var li = lis[i];
	$(li).hover(
		function(){
			$(this).find('img').attr('transform','scale(1.2)')
				.parent().siblings().find('img').attr('transform','scale(1.2)');
			$(this).find('.play').css({
				'opacity':1,
				'width':'50px',
				'height':'50px'
			}).parent().siblings().find('.play').css({
				'opacity':0,
				'width':0,
				'height':0
			});
		},
		function(){
			$(this).find('img').attr('transform','scale(1)')
				.parent().siblings().find('img').attr('transform','scale(1)');
			$(this).find('.play').css({
				'opacity':0,
				'width':0,
				'height':0
			}).parent().siblings().find('.play').css({
				'opacity':0,
				'width':0,
				'height':0
			});
		}
	);
}
//MV
$("#mv_play02").click(function(e){
	e.preventDefault();
	if(mv02.paused==true){
		$('#mv02').css('zIndex',30);
		mv02.play();
	}
});
$("#mv02").click(function(){
	$('#mv02').css('zIndex',-1);
	mv02.pause();
});
//热门歌单
var marginLeft = 0;
$('#hotList').children('.leftchange').click(function(){
	marginLeft-=1200;
	if(marginLeft == 0){
		$('.bar01').addClass('bar_active')
			.siblings().removeClass('bar_active');
	}else if(marginLeft == -1200){
		$('.bar02').addClass('bar_active')
			.siblings().removeClass('bar_active');
	}else if(marginLeft == -2400){
		$('.bar03').addClass('bar_active')
			.siblings().removeClass('bar_active');
	}
	$('.hotlist_picture').children('ul').css('marginLeft',marginLeft);
	if(marginLeft<=-2400){
		marginLeft = 1200;
	}
});
$('#hotList').children('.rightchange').click(function(){
	marginLeft-=1200;
	if(marginLeft == 0){
		$('.bar01').addClass('bar_active')
			.siblings().removeClass('bar_active');
	}else if(marginLeft == -1200){
		$('.bar02').addClass('bar_active')
			.siblings().removeClass('bar_active');
	}else if(marginLeft == -2400){
		$('.bar03').addClass('bar_active')
			.siblings().removeClass('bar_active');
	}
	$('.hotlist_picture').children('ul').css('marginLeft',marginLeft);
	if(marginLeft<=-2400){
		marginLeft = 1200;
	}
});
btLogin.onclick = function(e){
	e.preventDefault();
	//modalLogin.style.display = "block";
	loginParent.className = 'loginParent active';
};
btClose.onclick = function(e){
	loginParent.className = 'loginParent';
};
//搜索歌曲部分
search.onfocus=function(){
	sub_search.style.display="block";
};
search.onblur=function(){

	sub_search.style.display="none";
};
/*启动旋转木马*/
$(function(){
	carousel.init($(".J_Poster"));
});
/*祝福小框*/
function send_reply2() {
	var content = $("#reply-write").val();
	if ($.trim(content) == "") {
		alert("亲，请说出你的新年愿望！");
		return false;
	}
	var text=$("#reply-write").val();
	input(text)
	$("#reply-write").val("");
	init_screen();
	if($(".d_show").height()>180){
		$($(".d_show").children("div").get(0)).toggle(1000);
		$($(".d_show").children("div").get(0)).remove();
	}
}
$(function(){
	var date=[{'id':1,'val':'一夜春风到'},{'id':2,'val':'新年花枝俏'},{'id':3,'val':'俏也不争春'},{'id':4,'val':'只报福来报'},{'id':4,'val':'冬雪静静飘'},{'id':4,'val':'祝福悄悄到'},{'id':4,'val':'快乐在你身边绕'},{'id':4,'val':'好运相伴不会少'},{'id':4,'val':'幸福吉祥把你抱'}];
	var i=0;
	setInterval(function(){
		if($(".d_show").height()<100){
			if(i<date.length){
				input(date[i].val)
				i++;
			}else{
				i=0
				input(date[i].val)
				i++;
			}
		}else{
			init_screen();
			$($(".d_show").children("div").get(0)).remove();
			if(i<date.length){
				input(date[i].val)
				i++;
			}else{
				i=0
				input(date[i].val)
				i++;
			}
		}
	},1000);

	$("#reply-write").keyup(function(ev){
		var ev=ev||event;
		if(ev.keyCode==13){
			send_reply2();
		}
	});
})
function init_screen(){
	$(".d_show").find("div").show().each(function () {
		setInterval(function(){
			$($(".d_show").children("div").get(0)).toggle(1000);
		},1000);
	});
}
function input(val){
	var div=$("<div><img src='images/logo.png'/>"+val+"</div>");
	$(".d_show").append(div.fadeIn(1000));
}