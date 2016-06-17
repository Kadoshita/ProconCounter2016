var isClick=false;
var countnum=0;

setInterval("count1()", 1000 );
setInterval("count2()", 1000 );

function count1(){
	var date, Year, countYear, tmp, Msec, countDay, countHour, countMin, countSec,
	date = new Date();
	Year = date.getFullYear();
	countYear = new Date( 2016 , 9 , 8 ,00,00,00);
	tmp=countYear;
	Msec = countYear.getTime() - date.getTime();
	
	countDay = Math.floor ( Msec / (1000*60*60*24) );
	Msec -= ( countDay * (1000*60*60*24) );
	
	countHour = Math.floor ( Msec / (1000*60*60) );
	Msec -= ( countHour * (1000*60*60) );
	
	countMin = Math.floor ( Msec / (1000*60) );
	Msec -= ( countMin * (1000*60) );
	
	countSec = Math.floor ( Msec / 1000);
	changeColor1(countDay);
	myDisp = "";
	if ( countDay != 0 ) myDisp += '<span class=\"dseg\">'+countDay + "</span>日<span class=\"br\">";
	if ( countHour != 0 ) myDisp += '<span class=\"dseg\">'+countHour + "</span>時間 ";
	if ( countMin != 0 ) myDisp += '<span class=\"dseg\">'+countMin + "</span>分 ";
	myDisp += '<span class=\"dseg\">'+countSec + "</span>秒";
	document.getElementById("countdown1").innerHTML = myDisp;
}
function count2(){
	var date, Year, countYear, tmp, Msec, countDay, countHour, countMin, countSec,
	date = new Date();
	Year = date.getFullYear();
	countYear = new Date( 2016 , 5 , 25 ,00,00,00);
	tmp=countYear;
	Msec = countYear.getTime() - date.getTime();
	
	countDay = Math.floor ( Msec / (1000*60*60*24) );
	Msec -= ( countDay * (1000*60*60*24) );
	
	countHour = Math.floor ( Msec / (1000*60*60) );
	Msec -= ( countHour * (1000*60*60) );
	
	countMin = Math.floor ( Msec / (1000*60) );
	Msec -= ( countMin * (1000*60) );
	
	countSec = Math.floor ( Msec / 1000);
	changeColor2(countDay);
	myDisp = "";
	if ( countDay != 0 ) myDisp += '<span class=\"dseg\">'+countDay + "</span>日<span class=\"br\">";
	if ( countHour != 0 ) myDisp += '<span class=\"dseg\">'+countHour + "</span>時間 ";
	if ( countMin != 0 ) myDisp += '<span class=\"dseg\">'+countMin + "</span>分 ";
	myDisp += '<span class=\"dseg\">'+countSec + "</span>秒";
	document.getElementById("countdown2").innerHTML = myDisp;
}
function changeColor1(count){
	var count1=document.getElementById("count1");
	var dialog1=document.getElementById("dialog1");
	var sinchoku=document.getElementById("sinchoku");
	if(count>=100){
		document.body.style.backgroundColor = "#ffffff";
		count1.style.backgroundColor="#fafafa";
		count1.style.borderColor="#59b1eb";
		count1.style.color="#1976d2";
		sinchoku.style.color="#1976d2";
		dialog1.src=("./gif_b.gif");
	}
	else if(count>=50){
		document.body.style.backgroundColor = "#ffffff";
		count1.style.backgroundColor="#fafafa";
		count1.style.borderColor="#8bc34a";
		count1.style.color="#689f38";
		sinchoku.style.color="#689f38";
		dialog1.src=("./gif_g.gif");
	}
	else if(count>=30){
		document.body.style.backgroundColor = "#fafafa";
		count1.style.backgroundColor="#eeeeee";
		count1.style.borderColor="#ffeb3b";
		count1.style.color="#ffa000";
		sinchoku.style.color="#ffa000";
		dialog1.src=("./gif_y.gif");
	}
	else if(count>=7){
		document.body.style.backgroundColor = "#000000";
		count1.style.backgroundColor="#310D01";
		count1.style.borderColor="#521F00";
		count1.style.color="#FF7900";
		sinchoku.style.color="#FF7900";
		dialog1.src=("./gif.gif");
	}
	else{
		document.body.style.backgroundColor = "#000000";
		count1.style.backgroundColor="#000000";
		count1.style.borderColor="#ff0000";
		count1.style.color="#ff0000";
		sinchoku.style.color="#ff0000";
		dialog1.src=("./gif_r.gif");
	}
}
function changeColor2(count){
	var count2=document.getElementById("count2");
	var dialog2=document.getElementById("dialog2");
	if(count>=10){
		document.body.style.backgroundColor = "#ffffff";
		count2.style.backgroundColor="#fafafa";
		count2.style.borderColor="#59b1eb";
		count2.style.color="#1976d2";
		dialog2.src=("./gif_b.gif");
	}
	else if(count>=5){
		document.body.style.backgroundColor = "#ffffff";
		count2.style.backgroundColor="#fafafa";
		count2.style.borderColor="#8bc34a";
		count2.style.color="#689f38";
		dialog2.src=("./gif_g.gif");
	}
	else if(count>=3){
		document.body.style.backgroundColor = "#fafafa";
		count2.style.backgroundColor="#eeeeee";
		count2.style.borderColor="#ffeb3b";
		count2.style.color="#ffa000";
		dialog2.src=("./gif_y.gif");
	}
	else if(count>=2){
		document.body.style.backgroundColor = "#000000";
		count2.style.backgroundColor="#310D01";
		count2.style.borderColor="#521F00";
		count2.style.color="#FF7900";
		dialog2.src=("./gif.gif");
	}
	else{
		document.body.style.backgroundColor = "#000000";
		count2.style.backgroundColor="#000000";
		count2.style.borderColor="#ff0000";
		count2.style.color="#ff0000";
		dialog2.src=("./gif_r.gif");
	}
}
function changeText(){
	var sinchoku=document.getElementById('sinchoku');
	countnum++;
	if(!isClick){
		sinchoku.innerHTML="進捗ダメです";
		isClick=true;
	}
	else{
		sinchoku.innerHTML="進捗どうですか?";
		isClick=false;
	}
	if(countnum>10){
		sinchoku.innerHTML="こんなことしてる暇あるなら働けよ";
	}
}