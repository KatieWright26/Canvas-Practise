function Circle(radius, positionX, positionY, colorString) {
	this.radius = radius
	this.positionY = positionY
	this.positionX = positionX
	this.colorString = colorString
}

var circles = generateCircles(3)
console.log(circles)

function generateCircles(dimensions) {
	var board = []
	for (var i = 0; i < dimensions; i++) {
		var row = []
		for (var j = 0; j < dimensions; j++) {
			row.push(new Circle())
		}
		board.push(row)
	}
	return board
}

function draw() { 
	var canvas = document.getElementById('tutorial')
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d')
		for (var i=0;i<80;i++){
			for (var j=0;j<60;j++){
				ctx.fillStyle = 'rgb(' + Math.floor(230-5*i) + ',' +
					Math.floor(230-5*j) + ',150)';
				ctx.beginPath();
        		ctx.arc(12.5+j*25,12.5+i*25,10,0,Math.PI*2,true);
       			ctx.fill();
				}
			}
		}
	}