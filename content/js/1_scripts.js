/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* Cоцсети */
document.getElementById('Telegram-footer').onclick=function(){window.open('https://msngr.link/tg/malloc_ru', '_blank');};
document.getElementById('Youtube-footer').onclick=function(){window.open('https://www.youtube.com/channel/UCIAboMgPOBcFR9Y5GoUdoTw', '_blank');};
/* Donat */
document.getElementById('Donat-footer').onclick=function(){window.open('https://sobe.ru/na/qa', '_blank');};
document.getElementById('Dream-footer').onclick=function(){window.open('https://sobe.ru/na/na_me4tu_noutbuk_vmsi', '_blank');};
document.getElementById('Question-footer').onclick=function(){window.open('https://sobe.ru/na/vopros_q12x', '_blank');};
/* Top mail */
document.getElementById('Topmail-footer').onclick=function(){window.open('https://top.mail.ru/jump?from=3211268', '_blank');};
/* Payeer */
document.getElementById('AD-payeer').onclick=function(){window.open('https://payeer.com/?partner=4184305', '_blank');};
document.getElementById('Payeer-footer').onclick=function(){window.open('https://payeer.com/?partner=4184305', '_blank');};

/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* sidebar */
var mySidebar = document.getElementById("mySidebar");
var overlayBg = document.getElementById("myOverlay");
function malloc_open() {if (mySidebar.style.display === 'block') {mySidebar.style.display = 'none';overlayBg.style.display = "none";} else {mySidebar.style.display = 'block';overlayBg.style.display = "block";}}
function malloc_close() {mySidebar.style.display = "none";overlayBg.style.display = "none";}

/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* date */
function date()
{
	var d = new Date();
	var day=new Array("Воскресенье","Понедельник","Вторник", "Среда","Четверг","Пятница","Суббота");
	var month=new Array("января","февраля","марта","апреля","мая","июня", "июля","августа","сентября","октября","ноября","декабря");
	return " " +day[d.getDay()]+" " +d.getDate()+ " " + month[d.getMonth()] + " " + d.getFullYear() + " ";
}
setInterval(function () {document.getElementById('mydate').innerHTML = date();}, 0);

/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* time */		
function zero_first_format(value)		
{
	if (value < 10)
	{
		value='0'+value;
	}
	return value;
}
function time()
{
	var current_time = new Date();
	var hours = zero_first_format(current_time.getHours());
	var minutes = zero_first_format(current_time.getMinutes());
	var seconds = zero_first_format(current_time.getSeconds());
	return " "+hours+":"+minutes+":"+seconds+" ";
};
setInterval(function () {document.getElementById('mytime').innerHTML = time();});