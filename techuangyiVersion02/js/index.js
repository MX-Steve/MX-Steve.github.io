/**
 * Created by bjwsl-001 on 2017/4/17.
 */
bootlint.showLintReportForCurrentDocument([]);
//    调用tooltip工具提示
$('[data-toggle="popover"]').popover();
var app = angular.module('myApp',['ng']);
app.controller('myCtrlFooter',['$scope',function($scope){
    /*合作伙伴信息 */
    $scope.partners = [
        'partner1.png','partner2.png','partner3.png',
        'partner4.png','partner5.png','partner6.png',
        'partner7.png','partner8.png','partner9.png',
        'partner10.png','partner11.png','partner12.png'
    ];
    $scope.footerTopClients = [
        {name:'发布需求',href:'#'},
        {name:'平台案例',href:'#'},
        {name:'发现创意人',href:'#'},
        {name:'知识产权服务',href:'#'}
    ];
    $scope.footerTopCreators =[
        {name:"创意人入驻",href:'#'},
        {name:"创意人公社",href:'#'},
        {name:"帮助",href:'#'}
    ];
    $scope.footerTopAboutTcy = [
        {name:'关于我们',href:'#'},
        {name:'平台动态',href:'#'},
        {name:'合作伙伴',href:'#'},
        {name:'联系我们',href:'#'},
        {name:'法律声明',href:'#'},
        {name:'网站地图',href:'#'},
        {name:'意见反馈',href:'#'},
    ];
}]);
/***第一号轮播图***/
var owl1 = $('.owl-carousel1');
owl1.owlCarousel({
    items: 2,
    loop: true,
    margin: 20,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
});
/***第二号轮播图***/
var owl2 = $('.owl-carousel2');
owl2.owlCarousel({
    items: 4,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
});
/***第四号轮播图***/
var owl = $('.owl-carousel3');
owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 20,
    autoplay: false,
    autoplayTimeout: 1000,
    autoplayHoverPause: true
});
var reversePic = function(arr){
    $.each(arr,function(i,val){
        var item = $(this);
        item.mouseenter(function(){
            item.children('.item_hover').css('display','block');
        })
            .mouseleave(function(){
                item.children('.item_hover').css('display','none');
            });
    });
};
// //modal模态框内容-第一行轮播图
var lineOnes = $(".jq_hover1>li");
reversePic(lineOnes);
//modal模态框内容-第二行轮播图
var lineTwos =$(".jq_hover2>li");
reversePic(lineTwos);
$('.video_btn_01').click(function(e){
    $('.video_btn_01').css('display','none');
    e.preventDefault();
    var video1 = document.getElementById("video1");
    video1.play();
});
$('.video_btn_02').click(function(e){
    $('.video_btn_02').css('display','none');
    e.preventDefault();
    var video1 = document.getElementById("video2");
    video1.play();
});
$('.video_btn_03').click(function(e){
    $('.video_btn_03').css('display','none');
    e.preventDefault();
    var video1 = document.getElementById("video3");
    video1.play();
});

var lis1 = $(".my-custom>li");
for(var i=0;i<lis1.length;i++){
    var li = lis1[i];
    console.log(li);
}

/*视频部分*/
$(document).scroll(function(){
        var videoToBodyTop = $('.video').offset().top;
        var documentScrollHeight = $(document).scrollTop();
        var munisLength = videoToBodyTop-documentScrollHeight;
        if(munisLength < 350){
            $('.video1').css('animation','videosin1 3s ease 1');
            $('.video2').css('animation','videosin2 3s ease 1');
            $('.video3').css('animation','videosin3 3s ease 1');
        }else{
            $('.video1').css('animation','');
            $('.video2').css('animation','');
            $('.video3').css('animation','');
        }
    }
);

