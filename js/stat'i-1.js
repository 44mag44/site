/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* Статьи */
document.getElementById('link-article-1').onclick=function(){window.open('content/1-kak-obnovit\'-ubuntu-cherez-terminal.html', '_self');};
document.getElementById('link-article-2').onclick=function(){window.open('content/2-kak-otpravit\'-sushchestvuyushchiy-proekt-na-github.html', '_self');};
document.getElementById('link-article-3').onclick=function(){window.open('content/3-linux-rabota-s-katalogami-i-faylami-chast\'-pervaya.html', '_self');};
document.getElementById('link-article-4').onclick=function(){window.open('content/4-linux-rabota-s-katalogami-i-faylami-chast\'-vtoraya.html', '_self');};
document.getElementById('link-article-5').onclick=function(){window.open('content/5-hello-world-na-si.html', '_self');};
document.getElementById('link-article-6').onclick=function(){window.open('content/6-converter-valyut-na-si.html', '_self');};
document.getElementById('link-article-7').onclick=function(){window.open('content/7-otzhimaniya-v-otkaz-programma.html', '_self');};
document.getElementById('link-article-8').onclick=function(){window.open('content/8-tri-zolotykh-uprazhneniya-programma.html', '_self');};
document.getElementById('link-article-9').onclick=function(){window.open('content/9-raspredeleniye-maksimal\'nogo-kolichestva-povtoreniy-na-podkhody.html', '_self');};
document.getElementById('link-article-10').onclick=function(){window.open('content/10-yedinorog.html', '_self');};

/* Статьи в sidebar */
document.getElementById('sidebar-link-article-1').onclick=function(){window.open('content/1-kak-obnovit\'-ubuntu-cherez-terminal.html', '_self');};
document.getElementById('sidebar-link-article-2').onclick=function(){window.open('content/2-kak-otpravit\'-sushchestvuyushchiy-proekt-na-github.html', '_self');};
document.getElementById('sidebar-link-article-3').onclick=function(){window.open('content/3-linux-rabota-s-katalogami-i-faylami-chast\'-pervaya.html', '_self');};
document.getElementById('sidebar-link-article-4').onclick=function(){window.open('content/4-linux-rabota-s-katalogami-i-faylami-chast\'-vtoraya.html', '_self');};
document.getElementById('sidebar-link-article-5').onclick=function(){window.open('content/5-hello-world-na-si.html', '_self');};
document.getElementById('sidebar-link-article-6').onclick=function(){window.open('content/6-converter-valyut-na-si.html', '_self');};
document.getElementById('sidebar-link-article-7').onclick=function(){window.open('content/7-otzhimaniya-v-otkaz-programma.html', '_self');};
document.getElementById('sidebar-link-article-8').onclick=function(){window.open('content/8-tri-zolotykh-uprazhneniya-programma.html', '_self');};
document.getElementById('sidebar-link-article-9').onclick=function(){window.open('content/9-raspredeleniye-maksimal\'nogo-kolichestva-povtoreniy-na-podkhody.html', '_self');};
document.getElementById('sidebar-link-article-10').onclick=function(){window.open('content/10-yedinorog.html', '_self');};

/* Footer desktop*/
document.getElementById('Donat-footer-d').onclick=function(){window.open('https://sobe.ru/na/qa', '_blank');};
document.getElementById('Dream-footer-d').onclick=function(){window.open('https://sobe.ru/na/na_me4tu_noutbuk_vmsi', '_blank');};
document.getElementById('Question-footer-d').onclick=function(){window.open('https://sobe.ru/na/vopros_q12x', '_blank');};
document.getElementById('Telegram-footer-d').onclick=function(){window.open('https://msngr.link/tg/malloc_ru', '_blank');};
document.getElementById('Youtube-footer-d').onclick=function(){window.open('https://www.youtube.com/channel/UCIAboMgPOBcFR9Y5GoUdoTw', '_blank');};
document.getElementById('Topmail-footer-d').onclick=function(){window.open('https://top.mail.ru/jump?from=3211268', '_blank');};
document.getElementById('Payeer-footer-d').onclick=function(){window.open('https://payeer.com/04184305', '_blank');};

/* Footer mobile*/
document.getElementById('Donat-footer-m').onclick=function(){window.open('https://sobe.ru/na/qa', '_blank');};
document.getElementById('Dream-footer-m').onclick=function(){window.open('https://sobe.ru/na/na_me4tu_noutbuk_vmsi', '_blank');};
document.getElementById('Question-footer-m').onclick=function(){window.open('https://sobe.ru/na/vopros_q12x', '_blank');};
document.getElementById('Telegram-footer-m').onclick=function(){window.open('https://msngr.link/tg/malloc_ru', '_blank');};
document.getElementById('Youtube-footer-m').onclick=function(){window.open('https://www.youtube.com/channel/UCIAboMgPOBcFR9Y5GoUdoTw', '_blank');};
document.getElementById('Topmail-footer-m').onclick=function(){window.open('https://top.mail.ru/jump?from=3211268', '_blank');};
document.getElementById('Payeer-footer-m').onclick=function(){window.open('https://payeer.com/04184305', '_blank');};

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

/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* Rating Mail.ru counter */
var _tmr = window._tmr || (window._tmr = []);
_tmr.push({id: "3211268", type: "pageView", start: (new Date()).getTime()});
(function (d, w, id) {
  if (d.getElementById(id)) return;
  var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
  ts.src = "https://top-fwz1.mail.ru/js/code.js";
  var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
  if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
})(document, window, "topmailru-code");

/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* JS Гармошка */
var acc = document.getElementsByClassName("malloc-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Переключение между добавлением и удалением "active" class, выделить кнопку, управляющую панелью */
    this.classList.toggle("active");

    /* Переключение между скрытием и отображением активной панели */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
