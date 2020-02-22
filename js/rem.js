var htmlLL=document.getElementsByName("html")[0]
var whdef = 100 / 1080;
var wH = window.innerHeight;
var wW = window.innerWidth;
var rem = wW * whdef;
document.getElementsByTagName('html')[0].style.fontSize=rem + "px"
$(document).ready(function(){
	var whdef = 100 / 1080;
	var wH = window.innerHeight;
	var wW = window.innerWidth;
	var rem = wW * whdef;
	document.getElementsByTagName('html')[0].style.fontSize=rem + "px"
})
$(window).resize(function() {
	var whdef = 100 / 1080;
	var wH = window.innerHeight;
	var wW = window.innerWidth;
	var rem = wW * whdef;
	document.getElementsByTagName('html')[0].style.fontSize=rem + "px"
});
