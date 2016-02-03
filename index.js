//ctx.arc(x,y,radius,startangle,endangle)
function Circle(positionX, positionY, radius, colorString) {
	this.radius = radius
	this.positionY = positionY
	this.positionX = positionX
	this.colorString = colorString
}

var circles = generateCircles(9)
console.log(circles)

function generateCircles(circlesPerBoard) {
	var board = []
	for (var i = 0; i < circlesPerBoard; i++) {
		var row = []
		for (var j = 0; j < circlesPerBoard; j++) {
			row.push(new Circle(12.5+j*25,12.5+i*25, Math.PI*2, "rgb(90, 90, 0)"))
		}
		board.push(row)
	}
	return board
}

function clickIsInCircle(e) {

	var xPosition = e.clientX
	var yPosition = e.clientY

	console.log(xPosition, yPosition)
	for(var i = 0; i < circles.length; i++){
		for(var j =0; j < circles.length; j++){
			var circle = circles[i][j]
			console.log(circle)
			if((Math.pow((xPosition - circle.positionX), 2) - Math.pow((yPosition - circle.positionY), 2)) === Math.pow(circle.radius, 2)) {
			console.log("click in circle")
			return true
		}	else { 
			return false}
	}
}
}

function draw() { 
	var canvas = document.getElementById('tutorial')
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d')
		for(var i = 0; i < circles.length; i++){
			for(var j =0; j < circles.length; j++){
				var circle = circles[i][j]
				console.log(circle)
				ctx.fillStyle = circle.colorString
				ctx.beginPath()
				ctx.arc(circle.positionX, circle.positionY, circle.radius, 0, Math.PI*2)
				ctx.fill()
			}
		}
	}

	canvas.addEventListener('click', clickIsInCircle,false)

}