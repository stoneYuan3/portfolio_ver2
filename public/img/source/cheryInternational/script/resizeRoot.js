var srcwidth = 750
var Dpr = 1,
				uAgent = window.navigator.userAgent;
			var isIOS = uAgent.match(/iphone/i);
			var isYIXIN = uAgent.match(/yixin/i);
			var is2345 = uAgent.match(/Mb2345/i);
			var ishaosou = uAgent.match(/mso_app/i);
			var isSogou = uAgent.match(/sogoumobilebrowser/ig);
			var isLiebao = uAgent.match(/liebaofast/i);
			var isGnbr = uAgent.match(/GNBR/i);
			function resizeRoot() {
				var wWidth = (screen.width > 0) ? (window.innerWidth >= screen.width || window.innerWidth == 0) ? screen.width :
					window.innerWidth : window.innerWidth,
					wDpr, wFsize;
				var wHeight = (screen.height > 0) ? (window.innerHeight >= screen.height || window.innerHeight == 0) ?
					screen.height : window.innerHeight : window.innerHeight;
				if(window.devicePixelRatio) {
					wDpr = window.devicePixelRatio;
				} else {
					wDpr = isIOS ? wWidth > 818 ? 3 : wWidth > 480 ? 2 : 1 : 1;
				}
				if(isIOS) {
					wWidth = screen.width;
					wHeight = screen.height;
				}
				if(wWidth > wHeight) {
					wWidth = wHeight;
				}
				wFsize = wWidth > 1080 ? 144 : wWidth / (srcwidth/100);
				wFsize = wFsize > 32 ? wFsize : 32;
				window.screenWidth_ = wWidth;
				console.log(wWidth > 1080 ? 144 : wWidth / (srcwidth/100))
				if(isYIXIN || is2345 || ishaosou || isSogou || isLiebao || isGnbr) { //YIXIN 和 2345 这里有个刚调用系统浏览器时候的bug，需要一点延迟来获取
					setTimeout(function() {
						wWidth = (screen.width > 0) ? (window.innerWidth >= screen.width || window.innerWidth == 0) ?
							screen.width : window.innerWidth : window.innerWidth;
						wHeight = (screen.height > 0) ? (window.innerHeight >= screen.height || window.innerHeight ==
							0) ? screen.height : window.innerHeight : window.innerHeight;
						wFsize = wWidth > 1080 ? 144 : wWidth / (srcwidth/100);
						wFsize = wFsize > 32 ? wFsize : 32;
						document.getElementsByTagName('html')[0].style.fontSize = wFsize + 'px';
					}, 500);
				} else {
					document.getElementsByTagName('html')[0].style.fontSize = wFsize + 'px';
				}
			};
//resizeRoot()


function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
};
var html = document.documentElement;
var wW = html.clientWidth;// 窗口宽度
 window.addEventListener('resize',function(){
 	wW = html.clientWidth;
 	  if(wW>900){
	 	var designSize = 1920; // 设计图尺寸
	  var rem = wW * 100 / designSize; 
	  document.documentElement.style.fontSize = rem + 'px';
	 }else{
	 	resizeRoot()
	 }
 })

 if(wW>900){
 	var designSize = 1920; // 设计图尺寸
  var rem = wW * 100 / designSize; 
  document.documentElement.style.fontSize = rem + 'px';
 }else{
 	resizeRoot()
 }
  
