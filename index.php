<?php
	$val=$_POST['val'];
	$number=$_POST['number'];
	if($number=='false'){
		$url='http://map.baidu.com/?newmap=1&reqflag=pcmap&biz=1&from=webmap&da_par=direct&pcevaname=pc4.1&qt=s&da_src=searchBox.button&wd='.$val.'&c=179&src=0&wd2=&sug=0&l=12&b=(13363704.059791185,3490285.417152143;13401336.173556864,3540316.9094238114)&from=webmap&biz_forward={"scaler":1,"styles":"pl"}&sug_forward=&tn=B_NORMAL_MAP&nn=0&u_loc=13375924,3517169&ie=utf-8&t=1492061080877';
	}else {
		$url="http://map.baidu.com/?newmap=1&reqflag=pcmap&biz=1&from=webmap&da_par=direct&pcevaname=pc4.1&qt=con&from=webmap&c=179&wd=".$val."&wd2=&pn=".$number."&nn=".($number*10)."&db=0&sug=0&addr=0&&da_src=pcmappg.poi.page&on_gel=1&src=7&gr=3&l=12.045876&tn=B_NORMAL_MAP&u_loc=13375924,3517169&ie=utf-8&b=(13363704.059791185,3490285.417152143;13401336.173556864,3540316.9094238114)&t=1492047258888"; 
	}
	$html = file_get_contents($url); 
	
	echo $html; 

?>