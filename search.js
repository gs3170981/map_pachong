$(function(){
	var flag=true,timer,i=0,is=false;
	$('body').append('<input id="search" type="text" placeholder="回车获取" />　<input id="ss" type="button" value="停止检索" />　<input id="phone" type="button" value="显示只带有电话号码的条目" /> <br />');
	$('#search').keydown(function(e) {
      	if(e.keyCode == 13){
      		i=0;
      		$('ul').remove();
      		timer=setInterval(function(){
				searchShow(e.delegateTarget.value,i);
      			i++;
      		},100)
      	}
   	});$("#ss").click(function(){
   		clearInterval(timer);
   	});$("#phone").click(function(){
   		if(!is)$("#phone").val('隐藏没有电话号码的条目');
   		else $("#phone").val('显示只带有电话号码的条目');
   		is=!is;
   	})
	function searchShow(search,Number){
		if(!Number)Number=false;
		$.ajax({
			type:"post",
			url:"index.php",
			data:{
				val:search,
				number:Number
			},
			async:true,
			success:function(rel){
				searchDown(rel)
			}
		});
	};
	function searchDown(str){
		var json=eval('(' + str + ')');
		var list=json.content;
		if(!list){clearInterval(timer);return};
		for(var i=0;i<list.length;i++){
			if(!list[i].tel && is)continue;
			$('body').append("<ul style='overflow:hidden;list-style-type:none'>"
				+"<li >公司名称:"+list[i].name+"　</li>"
				+"<li >公司地址:"+list[i].addr+"　</li>"
				+"<li >公司类别:"+list[i].di_tag+"　</li>"
				+"<li >公司电话:"+list[i].tel+"</li>"
				+"</ul>"
			)
		}
	}
})
