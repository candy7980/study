$(function(){
	jQuery(".sideMenu").slide({
		titCell: "h3",
		targetCell: "ul",
		defaultIndex: 1,
		effect: "slideDown",
		delayTime: 300,
		trigger: "click",
		defaultPlay: false
	});
	
	jQuery(".txtScroll-top").slide({mainCell:".bd ul",autoPage:true,effect:"topLoop",autoPlay:true,vis:1,interTime:1500})
	var mySwiper1 = new Swiper('#header1',{
		pagination: '.swiper-pagination1',
		slidesPerView: 3,
	    speed:5000,
	    autoplay: false,
	    loop:true,
		slidesPerView : 'auto',
	});
	
	var mySwiper1 = new Swiper('#header2',{
		pagination: '.swiper-pagination2',
		slidesPerView: 3,
	    speed:500,
	    autoplay: false,
	    loop:true,
		slidesPerView : 'auto',
	});
	
	var mySwiper1 = new Swiper('#header3',{
		pagination: '.swiper-pagination3',
		slidesPerView: 3,
	    speed:1200,
	    autoplay: 1200,
	    loop:true,
		slidesPerView : 'auto',
	});
	
	
});

var result = false;
window.onload = function() {


	var mySwiper1 = new Swiper('#tab',{
	    speed:500,
		freeMode : true,
		slidesPerView : 'auto',		
	});
	 
	$(document).ready(function(){
		var $tab_li = $('#tab .tab_div');
		$tab_li.click(function(){	   
			$(this).addClass('selectedl').siblings().removeClass('selectedl');
			var index = $tab_li.index(this);
			$('div.tab_box').eq($(".tabs .active").index()).find('> div').eq(index).show().siblings().hide();
		   
		});	
	});
	
	
	
	$(".tabs a").on('touchstart mousedown',function(e){
	    e.preventDefault()
	    $(".tabs .active").removeClass('active')
	    $(this).addClass('active')
	    tabsSwiper.slideTo( $(this).index() )
	  })
	$(".tabs a").click(function(e) {
		e.preventDefault()
	})
}

//点击加载更多
$(document).ready(function(){
    var $category = $('#MoreUl ul li:gt(4)');
	$category.hide();
	var $toggleBtn = $('#showMore a');
	$toggleBtn.toggle(function(){
		$category.show();
		$(this).find('span').removeClass('show').addClass('hide').text('点击收起更多');	
	},function(){
		$category.hide();
		$(this).find('span').removeClass('hide').addClass('show').text('点击加载更多');
	});
});

$(document).ready(function(){
    var $category = $('#MoreUl1 ul li:gt(4)');
	$category.hide();
	var $toggleBtn = $('#showMore1 a');
	$toggleBtn.toggle(function(){
		$category.show();
		$(this).find('span').removeClass('show').addClass('hide').text('点击收起更多');	
	},function(){
		$category.hide();
		$(this).find('span').removeClass('hide').addClass('show').text('点击加载更多');
	});
});

$(document).ready(function(){
    var $category = $('#MoreUl2 ul li:gt(4)');
	$category.hide();
	var $toggleBtn = $('#showMore2 a');
	$toggleBtn.toggle(function(){
		$category.show();
		$(this).find('span').removeClass('show').addClass('hide').text('点击收起更多');	
	},function(){
		$category.hide();
		$(this).find('span').removeClass('hide').addClass('show').text('点击加载更多');
	});
});

$(document).ready(function(){
    var $category = $('#MoreUl3 ul li:gt(4)');
	$category.hide();
	var $toggleBtn = $('#showMore3 a');
	$toggleBtn.toggle(function(){
		$category.show();
		$(this).find('span').removeClass('show').addClass('hide').text('点击收起更多');	
	},function(){
		$category.hide();
		$(this).find('span').removeClass('hide').addClass('show').text('点击加载更多');
	});
});

$(document).ready(function(){
    var $category = $('#MoreUl4 ul li:gt(4)');
	$category.hide();
	var $toggleBtn = $('#showMore4 a');
	$toggleBtn.toggle(function(){
		$category.show();
		$(this).find('span').removeClass('show').addClass('hide').text('点击收起');	
	},function(){
		$category.hide();
		$(this).find('span').removeClass('hide').addClass('show').text('加载更多');
	});
});

$(document).ready(function(){
    var $category = $('#MoreUl5 ul li:gt(4)');
	$category.hide();
	var $toggleBtn = $('#showMore5 a');
	$toggleBtn.toggle(function(){
		$category.show();
		$(this).find('span').removeClass('show').addClass('hide').text('点击收起更多');	
	},function(){
		$category.hide();
		$(this).find('span').removeClass('hide').addClass('show').text('点击加载更多');
	});
});

$(document).ready(function(){
    var $category = $('#univerMore table tr:gt(4)');
	$category.hide();
	var $toggleBtn = $('#showMorea a');
	$toggleBtn.toggle(function(){
		$category.show();
		$(this).find('span').removeClass('show').addClass('hide').text('点击收起更多');	
	},function(){
		$category.hide();
		$(this).find('span').removeClass('hide').addClass('show').text('点击加载更多');
	});
});

$(document).ready(function(){
    var $category = $('#univerMore1 table tr:gt(4)');
	$category.hide();
	var $toggleBtn = $('#showMoreb a');
	$toggleBtn.toggle(function(){
		$category.show();
		$(this).find('span').removeClass('show').addClass('hide').text('点击收起更多');	
	},function(){
		$category.hide();
		$(this).find('span').removeClass('hide').addClass('show').text('点击加载更多');
	});
});

$(document).ready(function(){
    var $category = $('#univerMore2 table tr:gt(4)');
	$category.hide();
	var $toggleBtn = $('#showMorec a');
	$toggleBtn.toggle(function(){
		$category.show();
		$(this).find('span').removeClass('show').addClass('hide').text('点击收起更多');	
	},function(){
		$category.hide();
		$(this).find('span').removeClass('hide').addClass('show').text('点击加载更多');
	});
});





$(function(){
	var mark=1;
	$("#plan").click(function(){
		if(mark==1){//把他展开
			$(this).siblings('.planLayer').slideDown();
			$(this).children(".planR").addClass("planR1");
			mark=2;
		}else if(mark==2){//收缩
			$(this).siblings('.planLayer').slideUp();
			$(this).children(".planR").removeClass("planR1");
			mark=1;
		}
	});
	
	var mark=1;
	$("#plan1").click(function(){
		if(mark==1){//把他展开
			$(this).siblings('#planL').slideDown();
			$(this).children(".planR").addClass("planR1");
			mark=2;
		}else if(mark==2){//收缩
			$(this).siblings('#planL').slideUp();
			$(this).children(".planR").removeClass("planR1");
			mark=1;
		}
	});
	
	
	var mark=1;
	$("#plan2").click(function(){
		if(mark==1){//把他展开
			$(this).siblings('#planL1').slideDown();
			$(this).children(".planR").addClass("planR1");
			mark=2;
		}else if(mark==2){//收缩
			$(this).siblings('#planL1').slideUp();
			$(this).children(".planR").removeClass("planR1");
			mark=1;
		}
	});
	
	
	var mark=1;
	$("#planPro").click(function(){
		if(mark==1){//把他展开
			$(this).siblings('.planLayerPro1').slideDown();
			$(this).children(".planR").addClass("planR1");
			mark=2;
		}else if(mark==2){//收缩
			$(this).siblings('.planLayerPro1').slideUp();
			$(this).children(".planR").removeClass("planR1");
			mark=1;
		}
	});
	
	
	var mark=1;
	$("#planPro1").click(function(){
		if(mark==1){//把他展开
			$(this).siblings('#planLP').slideUp();
			$(this).children(".planR").addClass("planR1");
			mark=2;
		}else if(mark==2){//收缩
			$(this).siblings('#planLP').slideDown();
			$(this).children(".planR").removeClass("planR1");
			mark=1;
		}
	});
});



$(function() {
	$(".footerM ul li").click(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
	});
});
$(function() {
	$(".page a").click(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
	});
});



//动画按钮
$(function(){
	var mark=1;
	$(".PathMain").click(function(){
		if(mark==1){//把他展开
			$(this).addClass("PathMain1");
			$(this).siblings('.Menu1').animate({"left":"4.8em"},500);
			$(this).siblings('.Menu2').animate({"left":"8.7em"},500);
			$(this).siblings('.Menu3').animate({"left":"12.6em"},500);
			$(this).siblings('.Menu4').animate({"left":"16.5em"},500);
			$(this).siblings('.Menu5').animate({"left":"20.4em"},500);
			mark=2;
		}else if(mark==2){//收缩
			$(this).removeClass("PathMain1");
			$(this).siblings('.Menu1').animate({"left":"0.6em"},500);
			$(this).siblings('.Menu2').animate({"left":"0.6em"},500);
			$(this).siblings('.Menu3').animate({"left":"0.6em"},500);
			$(this).siblings('.Menu4').animate({"left":"0.6em"},500);
			$(this).siblings('.Menu5').animate({"left":"0.6em"},500);
			mark=1;
		}
	});
	$("#gotop").click(function(){
		$('body,html').animate({scrollTop:0},800);
		return false;
	});
	//弹出层
	
	$(".Pop_up").click(function(){
		$(this).animate({"right":"-5em"},500);
		$("#TB_overlayBG").css({
			display:"block",height:$(document).height()
		});
		$(".PopLayer").css({
			top:($(window).height()-$(".layer").height())/5+$(window).scrollTop()+"px",
			display:"block"
		});
	});
	$(".popclose").click(function(){
		$("#TB_overlayBG").css({
			display:"none",height:$(document).height()
		});
		$(".PopLayer").fadeOut();
		$(".Pop_up").animate({"right":"0"},500);
		setTimeout(function(){
			$(".Pop_up").animate({'right':'-5em'});
			$("#TB_overlayBG").css({
				display:"block",height:$(document).height()
			});
			$(".PopLayer").css({
				top:($(window).height()-$(".layer").height())/5+$(window).scrollTop()+"px",
				display:"block"
			});
		},20000);
	});
	
	$("#TB_overlayBG").click(function(){
		$(this).css({
			display:"none",height:$(document).height()
		});
		$(".PopLayer").fadeOut();
		$(".Pop_up").animate({"right":"0"},500);
		setTimeout(function(){
			$(".Pop_up").animate({'right':'-5em'});
			$("#TB_overlayBG").css({
				display:"block",height:$(document).height()
			});
			$(".PopLayer").css({
				top:($(window).height()-$(".layer").height())/5+$(window).scrollTop()+"px",
				display:"block"
			});
		},50000);
	});
	
	
	//30秒弹出
	$(window).load(function(){
		setTimeout(function(){
			$(".Pop_up").animate({'right':'-5em'});
			$("#TB_overlayBG").css({
				display:"block",height:$(document).height()
			});
			$(".PopLayer").css({
				top:($(window).height()-$(".layer").height())/5+$(window).scrollTop()+"px",
				display:"block"
			});
		},15000);
		
	});
	
	
	//侧边导航
	var mark=1;
	$(".topMnu").click(function(e) {
		if (mark == 1) { //把他展开
			$(this).addClass("topMnu1");
			$(".divBoxWrap").animate({"right": "34%"}, 500);
			$(".sideMenu").animate({"right": "0"}, 500);
			e.stopPropagation(); //阻止冒泡
			mark = 2;
		} else if (mark == 2) { //收缩
			$(this).removeClass("topMnu1");
			$(".divBoxWrap").animate({"right": "0"}, 500);
			$(".sideMenu").animate({"right": "-34%"}, 500);
			mark = 1;
		}
	});
	
});




//搜索框1111111111111111111111111
function test1()
{
	var tempStr=document.getElementById('test').value;
	if(tempStr=="请输入您的电话号码")
	{
		document.getElementById('test').value="";
	}

}

function test2()
{
	var tempStr=document.getElementById('test').value;
	if(tempStr=="")
	{
		document.getElementById('test').value="请输入您的电话号码";
	}
}


//国家页面-大学排名
$(document).ready(function(){
	var $tab_li = $('#taba ul li');
	$tab_li.click(function(){
		$(this).addClass('selecteda').siblings().removeClass('selecteda');
		var index = $tab_li.index(this);
		$('div.tab_boxz > div').eq(index).show().siblings().hide();
	});	
});
$(document).ready(function(){
	var $tab_li = $('#tabb ul li');
	$tab_li.click(function(){
		$(this).addClass('selectedb').siblings().removeClass('selectedb');
		var index = $tab_li.index(this);
		$('div.tab_boxb > div').eq(index).show().siblings().hide();
	});	
});
$(document).ready(function(){
	var $tab_li = $('#tabc ul li');
	$tab_li.click(function(){
		$(this).addClass('selectedc').siblings().removeClass('selectedc');
		var index = $tab_li.index(this);
		$('div.tab_boxc > div').eq(index).show().siblings().hide();
	});	
});
$(document).ready(function(){
	var $tab_li = $('#tabd ul li');
	$tab_li.click(function(){
		$(this).addClass('selecteda').siblings().removeClass('selecteda');
		var index = $tab_li.index(this);
		$('div.tab_boxd > div').eq(index).show().siblings().hide();
	});	
});
//优势学员案例
$(document).ready(function(){
	var $tab_li = $('#tabA ul li');
	$tab_li.click(function(){
		$(this).addClass('selectedA').siblings().removeClass('selectedA');
		var index = $tab_li.index(this);
		$('div.tab_box_int > div').eq(index).show().siblings().hide();
	});	
});
$(document).ready(function(){
	var $tab_li = $('#tabter ul li');
	$tab_li.click(function(){
		$(this).addClass('selectedter').siblings().removeClass('selectedter');
		var index = $tab_li.index(this);
		$('div.tab_boxter > div').eq(index).show().siblings().hide();
	});	
});

//搜索框aaaaaaaa
function testa()
{
	var tempStr=document.getElementById('testA').value;
	if(tempStr=="请输入考生本人中文姓名")
	{
		document.getElementById('testA').value="";
	}
}

function testb()
{
	var tempStr=document.getElementById('testA').value;
	if(tempStr=="")
	{
		document.getElementById('testA').value="请输入考生本人中文姓名";
	}
}

function testc()
{
	var tempStr=document.getElementById('testB').value;
	if(tempStr=="请输入本人或父母联系电话")
	{
		document.getElementById('testB').value="";
	}
}

function testd()
{
	var tempStr=document.getElementById('testB').value;
	if(tempStr=="")
	{
		document.getElementById('testB').value="请输入本人或父母联系电话";
	}
}

function teste()
{
	var tempStr=document.getElementById('testC').value;
	if(tempStr=="请输入本人意向留学国家")
	{
		document.getElementById('testC').value="";
	}
}

function testf()
{
	var tempStr=document.getElementById('testC').value;
	if(tempStr=="")
	{
		document.getElementById('testC').value="请输入本人意向留学国家";
	}
}

function testg()
{
	var tempStr=document.getElementById('testD').value;
	if(tempStr=="请输入考生当前学历")
	{
		document.getElementById('testD').value="";
	}
}

function testh()
{
	var tempStr=document.getElementById('testD').value;
	if(tempStr=="")
	{
		document.getElementById('testD').value="请输入考生当前学历";
	}
}

function testi()
{
	var tempStr=document.getElementById('testE').value;
	if(tempStr=="请输入高考英语成绩/托福/雅思等")
	{
		document.getElementById('testE').value="";
	}
}

function testj()
{
	var tempStr=document.getElementById('testE').value;
	if(tempStr=="")
	{
		document.getElementById('testE').value="请输入高考英语成绩/托福/雅思等";
	}
}

//header
$(window).scroll(function(){
	if ($(window).scrollTop()>50){
		$(".headerWrapa").addClass("headerWrapa1");
	}else{
		$(".headerWrapa").removeClass("headerWrapa1");
	}
});

//微信弹出
$(function(){
	$(".Menu2").click(function(){
		$("#TB_overlayBG").css({
			display:"block",height:$(document).height()
		});
		$(".webchat").css({
			left:($("body").width()-$(".webchat").width())/2+"px",
			top:($(window).height()-$(".webchat").height())/3+$(window).scrollTop()+"px",
			display:"block"
		});
	});
	$("#TB_overlayBG").click(function(){
		$("#TB_overlayBG").fadeOut();
		$(".webchat").fadeOut();
	});
	$(".popclose").click(function(){
		$("#TB_overlayBG").fadeOut();
		$(".webchat").fadeOut();
	});
});