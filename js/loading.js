(function(d){
	var loading_dom = d.createElement("div");
	with(loading_dom){
        addEventListener('touchstart',function(e){
             e.preventDefault();
         });
            addEventListener('touchmove',function(e){
             e.preventDefault();
         });
            addEventListener('touchend',function(e){
             e.preventDefault();
         });
    }
	loading_dom.className = "loading";
	loading_dom.innerHTML = '<div class="spinner cube"> <div class="spinner-container container1"> <div class="circle1"></div> <div class="circle2"></div> <div class="circle3"></div> <div class="circle4"></div> </div> <div class="spinner-container container2"> <div class="circle1"></div> <div class="circle2"></div> <div class="circle3"></div> <div class="circle4"></div> </div> <div class="spinner-container container3"> <div class="circle1"></div> <div class="circle2"></div> <div class="circle3"></div> <div class="circle4"></div> </div></div><p class="progress"><span id="pro">0</span><span>%</span></p>';
	var first=d.body.firstChild; //得到第一个元素
	d.body.insertBefore(loading_dom,first);
})(document);
