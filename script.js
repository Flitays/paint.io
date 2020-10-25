var canv = 	document.getElementById('canvs');
var ctx = canv.getContext('2d');

var range = document.getElementById('range')
var rangeX = document.getElementById('rangeX');
var rangeY = document.getElementById('rangeY');
var rangeR = document.getElementById('rangeR');
var rangeL = document.getElementById('rangeL');
canv.width = window.innerWidth/2;
canv.height = window.innerHeight/2;




function CreateImage() {
switch (range.value){
	case "circle": 
   
		ctx.beginPath();
		ctx.arc(rangeX.value, rangeY.value, rangeR.value, 0, 2 * Math.PI, false);
		ctx.fill(); // Цвет заливки
		
	break;

	case "square": 
	
		ctx.fillRect(rangeX.value, rangeY.value, rangeR.value, rangeL.value);
		ctx.fillStyle = '#00FF00'; // Цвет заливки
		
		break;
	} 
}; 
function ClearPlace(){
	ctx.clearRect(0, 0, canv.width, canv.height);
};