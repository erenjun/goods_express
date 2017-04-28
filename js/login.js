(function($){
	var baseInfo = JSON.parse(localStorage.baseUserInfo),//获取用户初始信息
		
		main = {
			//初始化
			init:function(){
				var self = this;
				self.bindEvent();
			},
			//事件绑定
			bindEvent:function(){
			
				//跳转到注册页面
				$(".btn-cell").on("tap",".mui-btn",function(){
					location.href = "../page/register.html";
				});
				
			}
		};
	
	main.init();
	
	
	
	
	
})(mui)