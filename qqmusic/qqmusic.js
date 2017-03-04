/*广告图片数组*/
var imgs=[
	"images/recommend/recommend_1.jpg",
	"images/recommend/recommend_2.jpg",
	"images/recommend/recommend_3.jpg",
	"images/recommend/recommend_4.jpg",
	"images/recommend/recommend_5.jpg",
];
+function(){
	var LIWIDTH=parseFloat($(".recommend_picture>li").css("width"));
	var $ulImgs=$("#imgs"),$ulIdxs=$("#indexs");
	var n=0;
	var WAIT=2000;
	var SPEED=500;
	var canAuto=true;
	var timer=null;
	+function(){
		for(var i=0,htmlImgs="",htmlIdxs="";i<imgs.length;i++){
			htmlImgs+="<li><img src='"+imgs[i]+"'></li>";
			htmlIdxs+="<li>"+(i+1)+"</li>";
		}
		$ulImgs.html(htmlImgs);
		$ulIdxs.html(htmlIdxs);
		$ulImgs.css("width",LIWIDTH*(imgs.length+1));
		$ulImgs.append(
			$ulImgs.children(":first").clone()	
		);
		$ulIdxs.children(":first").addClass("hover");
	}();
	function autoMove(){
		timer=setTimeout(function(){
			n++;
			$ulImgs.animate({
				left:-n*LIWIDTH
			},SPEED,function(){
				if(n==imgs.length){
					n=0;
					$ulImgs.css("left",0);
				}
				$ulIdxs.children(":eq("+n+")").addClass("hover")
						.siblings().removeClass("hover");
				if(canAuto) autoMove();
			});
		},WAIT);
	};
	autoMove();
	$ulIdxs.on("mouseover","li",function(){
		$ulImgs.stop(true);
		n=$("#indexs>li").index(this);
		$ulImgs.animate({
			left:-n*LIWIDTH
		},SPEED,function(){
			$ulIdxs.children(":eq("+n+")").addClass("hover")
					.siblings().removeClass("hover");
		});
	});
	$("#slider").mouseenter(function(){
		canAuto=false;clearTimeout(timer);
	}).mouseleave(function(){
		canAuto=true;
		autoMove();
	});
}();
