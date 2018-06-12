(function(){
	$(document).ready(function(){
		//each.js
		Echo.init({
		    offset: "150px",
		    throttle: 0
		});
		
		$(document).ready(function(){
		  $('.flexslider').flexslider({
		    directionNav: true,
		    pauseOnAction: false
		  });
		});  
		//导航nav
		//隐藏下拉菜单
		function hide(el){
			if(Array.isArray(el)){
				for(var i=0 ; i<el.length; i++ ){
					el[i].style.display="none";
			}
		}else{
			el.style.display="none";
			}
		}
		
		//显示下拉菜单
		function disp(el){
			el.style.display="block";
		}
		//点击上传
		var upLoatCatalog = document.getElementsByClassName("uploat")[0];
		var uploat = document.getElementsByTagName("li")[3];
		uploat.addEventListener("click",function(){
			event.stopPropagation();
			disp(upLoatCatalog);
			hide([newsCatalog,playContent]);
		})
		
		//点击其他页面消失
		document.addEventListener("click",function(){
			 var arr = [upLoatCatalog,newsCatalog,playContent];
			 hide(arr);
		})
		
		
		//消息按钮
		var newsKey = document.getElementById("nav-news");  
		var newsCatalog = document.getElementsByClassName("news-catalog")[0];//点击消息按键出消息目录
		newsKey.addEventListener("click",function(){
			event.stopPropagation();
			disp(newsCatalog);
			hide([upLoatCatalog,playContent]);
		})
		
		//封存函数
		var newsNav = document.getElementsByClassName("news-nav");                        //获取信息按键的下拉菜单导航
		var newsNavTop = document.getElementById("news-nav-top");
		var Arr = [
			"<p>您还没有收到新的更新消息</p>",
		"<p>暂时还没有新的推荐</p>",
		"<p>您还没有登录您<a href='#'>登录</a>后可以查看完整的通知列表</p>"
		];
		
		function setHTML(index){
			return function(){
				newsNavTop.innerHTML=Arr[index];
			}
		};
		
		//内函数调用外层函数的变量， 外层函数的变量无法释放（即不会被内存回收机制回收）
		
		for (var i=0 ; i<newsNav.length ;i++){
			/*(function(index){
			newsNav[index].addEventListener("mouseenter",function(){
				newsNavTop.innerHTML=Arr[index];
			})
		})(i);*/
		newsNav[i].addEventListener("mouseenter", setHTML(i));
		}
		
		//播放记录
		var playCord = document.getElementsByClassName("play-record")[0];
		var playContent = document.getElementById("play-content");
		playCord.addEventListener("click",function(){
			event.stopPropagation();
			disp(playContent);
			hide([upLoatCatalog,newsCatalog]);
		})
		
		
		//列表按钮切换
		//var fousPicture = document.getElementsByClassName("focus-picture")[0];
		//var sidebarWrapper = document.getElementsByClassName("sidebar-wrapper")[0];
		//sidebarWrapper.addEventListener("mousemove",function(){
		//	fousPicture.style.left="-1500px";
		//})
		
		/*横幅轮播图*/
		$(".carousel-content").carousel({
		carousel: ".carousel", //轮播图容器
		indexContainer: ".img-index", //下标容器 
		prev: ".carousel-prev", //左按钮 
		next: ".carousel-next", //右按钮 
		timing: 3000, //自动播放间隔
		animateTime: 700, //动画时间 
		autoPlay: true, //是否自动播放 true / false 
		direction: "left", //滚动方向right / left
		});
	
	})
	

})()
