var isClick=false;
var mode=getMode();
var counter;

counter=setInterval(function(){
	var date, Year, countYear, tmp, Msec, countDay, countHour, countMin, countSec;
	var br=document.getElementById("newline");
	date = new Date();
	Year = date.getFullYear();
	countYear = new Date( 2016 , 9 , 8 ,00,00,00);
	tmp=countYear;
	Msec = countYear.getTime() - date.getTime();
	
	if(Msec<=1000){
		clearInterval(counter);
	}
	countDay = Math.floor ( Msec / (1000*60*60*24) );
	Msec -= ( countDay * (1000*60*60*24) );
	
	countHour = Math.floor ( Msec / (1000*60*60) );
	Msec -= ( countHour * (1000*60*60) );
	
	countMin = Math.floor ( Msec / (1000*60) );
	Msec -= ( countMin * (1000*60) );
	
	countSec = Math.floor ( Msec / 1000);
	myDisp = "";
	if(mode=="bin"){
		if(countDay != 0){
			myDisp += '<span class=\"dseg\">'+countDay.toString(2) + "</span>日<span class=\"br\">";
		}
		if(countHour != 0){
			myDisp += '<span class=\"dseg\">'+countHour.toString(2) + "</span>時間<br> ";
		}
		if(countMin != 0){
			myDisp += '<span class=\"dseg\">'+countMin.toString(2) + "</span>分 ";
		}
		myDisp += '<span class=\"dseg\">'+countSec.toString(2) + "</span>秒";
		var tmp=27;
		document.getElementById("no27").innerHTML=tmp.toString(2);
		br.innerHTML="<br>"
	}
	else{
		if(countDay != 0){
			myDisp += '<span class=\"dseg\">'+countDay + "</span>日<span class=\"br\">";
		}
		if(countHour != 0){
			myDisp += '<span class=\"dseg\">'+countHour + "</span>時間 ";
		}
		if(countMin != 0){
			myDisp += '<span class=\"dseg\">'+countMin + "</span>分 ";
		}
		myDisp += '<span class=\"dseg\">'+countSec + "</span>秒";
		document.getElementById("no27").innerHTML="27";
	}
	document.getElementById("countdown1").innerHTML = myDisp;
}, 1000 );

function changeText(){
	var sinchoku=document.getElementById('sinchoku');
	if(!isClick){
		sinchoku.innerHTML="進捗ダメです";
		isClick=true;
	}
	else{
		sinchoku.innerHTML="進捗どうですか?";
		isClick=false;
	}
}
function getMode() {
	var url = document.location.href;
	var args = url.split('?');
	if (args.length > 1) {
		var mode = args[1];
		if (mode != ""){
			return mode;
		}
	}
	return ;
}