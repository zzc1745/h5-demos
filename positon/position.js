
// retrive data
;function Getwin(e){
	var H = document.documentElement.offsetWidth;
//	console.log(H);
	var a = document.getElementById('btn');
	var fix = document.getElementById('fix');
//	console.log(getStyle(fix));
	
//	console.log(fix.className);
//	console.log(fix.style.height);
	a.addEventListener('click',function(){
//		console.log('222');
		var f = getComputedStyle(fix).getPropertyValue('display');
		console.log(f);
		if(f == 'none'){
			fix.style.display = 'block';
			
			document.body.style.height = '100%';
			document.documentElement.style.minHeight = '100%';
			document.body.style.overflow = 'hidden';
		}else{
			fix.style.display = 'none';
		}
	},false);
}


// 获取js的css属性
// 只有在页面中的style才可以直接 输出 ele.style.CSSproperty
// 可以直接在 用js 设置页面的样式
function getStyle(ele){
	var style;
	if(window.getComputedStyle){
		style = window.getComputedStyle(ele,null);
	}else{
		style = ele.currentStyle;
	}
	return style;
}

//
//苹果上出现遮挡不全的问题
function getH(){
	var WINH = (typeof window.outerHeight != 'undefined')?Math.max(window.outerHeight, $(window).height()):$(window).height()
	var docH = $(document).height();
	var H;
  if(docH > WINH){
  	 $('.lg_fu_bg').css('height',docH);
  }else{

  	if($('.qs-container').get(0)){
  		 H = $('.qs-container').height();
       $('.qs-container').append('<p style="height:'+(WINH - H)+'px;width:100%"></p>');
  	}else if($('.qscontainer').get(0)){
  		 H = $('.qscontainer').height();
       $('.qscontainer').append('<p style="height:'+(WINH - H)+'px;width:100%;"></p>'); 
  	}else{
  		 $('.qscontainer').append('<p style="height:300px;width:100%;"></p>');
  	}
  }
}
// document.addEventListener('DOMContentLoaded', getH ,false);
//$(window).load(function() {
//	/* Act on the event */
//	getH();
//});



