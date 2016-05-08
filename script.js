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
	
	myDisp = "";
	if ( countDay != 0 ) myDisp += '<span class=\"dseg\">'+countDay + "</span>日と ";
	if ( countHour != 0 ) myDisp += '<span class=\"dseg\">'+countHour + "</span>時間 ";
	if ( countMin != 0 ) myDisp += '<span class=\"dseg\">'+countMin + "</span>分 ";
	myDisp += '<span class=\"dseg\">'+countSec + "</span>秒";
	document.getElementById("countdown").innerHTML = myDisp;
}