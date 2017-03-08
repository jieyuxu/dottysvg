//#########################VARIABLE DECLARATION#########################
var pic = document.getElementById('vimage');
var start = document.getElementById('start');
var clicked = document.getElementById('clear');
var stop = document.getElementById('stop');
var bound = pic.getBoundingClientRect();
var intervalID;
var shrink = false;


//#########################FUNCTIONS#########################
var magic = function(e){
	blanc();
	window.clearInterval(e);
	var r = 5;

	//make circle
	var color = '#'+Math.random().toString(16).substr(-6);
	var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	dot.setAttribute("cx", bound.width/2);
	dot.setAttribute("cy", bound.height/2);
	dot.setAttribute("r", r);
	dot.setAttribute("fill", color);
	dot.setAttribute("stroke", color);
	pic.appendChild(dot);

	var enlargeC = function(){
		if (r >= 250)
			shrink = true;

		if (r <= 1)
			shrink = false;

		if (shrink)
			r -= 2;
		else
			r += 2;
		dot.setAttribute("r", r);

	};

	intervalID = window.setInterval(enlargeC, 20);
};

var stopit = function(e){
	window.clearInterval(intervalID);
};

var blanc = function(e){
	stopit(e);
	while (pic.childNodes.length > 0){
		pic.removeChild(pic.childNodes[0]);
	}
};


//#########################EVENT LISTENERS#########################
start.addEventListener('click', magic);
stop.addEventListener('click', stopit);
clicked.addEventListener('click', blanc);