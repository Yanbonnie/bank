var basep="images/",//图片目录
	preLoadSource;//背景资源
$(function(){
	//loader加载效果
	var sourceArr=new Array(),//所有资源路径
		source=$('img,audio'),//资源对象
		length=source.length,//获取所有资源的长度
		sourceSrc="";//单个资源路径
	for(var i=0;i<length;i++){//页面数据资源
		var src=source.eq(i).attr("src");
		if(src){
			if(Package.util.patternString('.jpg',src) || Package.util.patternString('.png',src)){//匹配jpg，png
				sourceSrc = src;
			}
		}else{
			sourceSrc = source.eq(i).attr("href");
		}
		if(sourceSrc){sourceArr.push(sourceSrc);}
	}
	if(preLoadSource){
		sourceArr=sourceArr.concat(preLoadSource);
	}	
	sourceArr=Package.util.getArray(sourceArr);//去除相同的资源
	//console.log(sourceArr)
	new mo.Loader(sourceArr,{
		loadType : 0,
		minTime : 300,
		onLoading : function(count,total){
			var r = Math.round(count/total*100);
			$('.loading').find('#pro').text(r);
		},
		onComplete : function(time){
			setTimeout(function(){
			    $('.loading').remove();
				$('.wrap').css('visibility','visible');
				$('.wrap').removeClass('hide');
				delete mo.Loader;
				preLoadSource='';
			},600)	
		}
	});	


	//手机捕捉触摸事件
	document.addEventListener("touchstart", function(){}, true);
})