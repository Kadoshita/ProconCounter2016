setInterval("myFunc()", 1000 );

function myFunc(){
	date = new Date();
	Year = date.getFullYear();
	countYear = new Date( 2016 , 9 , 8 ,00,00,00);
	var tmp=countYear;
	Msec = countYear.getTime() - date.getTime();
	
	countDay = Math.floor ( Msec / (1000*60*60*24) );
	Msec -= ( countDay * (1000*60*60*24) );
	
	countHour = Math.floor ( Msec / (1000*60*60) );
	Msec -= ( countHour * (1000*60*60) );
	
	countMin = Math.floor ( Msec / (1000*60) );
	Msec -= ( countMin * (1000*60) );
	
	countSec = Math.floor ( Msec / 1000);
	changeColor(countDay);
	myDisp = "";
	if ( countDay != 0 ) myDisp += '<span class=\"dseg\">'+countDay + "</span>日<span class=\"br\">";
	if ( countHour != 0 ) myDisp += '<span class=\"dseg\">'+countHour + "</span>時間 ";
	if ( countMin != 0 ) myDisp += '<span class=\"dseg\">'+countMin + "</span>分 ";
	myDisp += '<span class=\"dseg\">'+countSec + "</span>秒";
	document.getElementById("countdown").innerHTML = myDisp;
}
function changeColor(count){
	var text=document.getElementById("text");
	var dialog=document.getElementById("dialog");
	if(count>=100){
		document.body.style.backgroundColor = "#ffffff";
		text.style.backgroundColor="#fafafa";
		text.style.borderColor="#59b1eb";
		text.style.color="#1976d2";
		dialog.src=("./gif_b.gif");
	}
	else if(count>=50){
		document.body.style.backgroundColor = "#ffffff";
		text.style.backgroundColor="#fafafa";
		text.style.borderColor="#8bc34a";
		text.style.color="#689f38";
		dialog.src=("./gif_g.gif");
	}
	else if(count>=30){
		document.body.style.backgroundColor = "#fafafa";
		text.style.backgroundColor="#eeeeee";
		text.style.borderColor="#ffeb3b";
		text.style.color="#ffa000";
		dialog.src=("./gif_y.gif");
	}
	else if(count>=7){
		document.body.style.backgroundColor = "#000000";
		text.style.backgroundColor="#310D01";
		text.style.borderColor="#521F00";
		text.style.color="#FF7900";
		dialog.src=("./gif.gif");
	}
	else{
		document.body.style.backgroundColor = "#000000";
		text.style.backgroundColor="#000000";
		text.style.borderColor="#ff0000";
		text.style.color="#ff0000";
		dialog.src=("./gif_r.gif");
	}
}