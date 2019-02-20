var scroll = document.querySelector("button>img");
var a = document.body;
scroll.onclick = function (event) {
	var target = event.target;
	var heigthWindow = document.documentElement.clientHeight;
	window.scrollTo(0,heigthWindow)
}