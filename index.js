//ctx.arc(x,y,radius,startangle,endangle)
function Circle(positionX, positionY, radius, colorString) {
	this.radius = radius
	this.positionY = positionY
	// console.log(positionY)
	this.positionX = positionX
	// console.log(positionX)
	this.colorString = colorString
}

var circles = generateCircles(6)

function generateCircles(circlesPerBoard) {
	var board = []
	for (var i = 0; i < circlesPerBoard; i++) {
		var row = []
		for (var j = 0; j < circlesPerBoard; j++) {
			row.push(new Circle(12.5+j*25,12.5+i*25, 6, "rgb(" + Math.floor(255-20*i)+ "," + Math.floor(90-20*j) + ", 0)"))
		}
		board.push(row)
	}
	return board
}

function clickIsInCircle(e) {

	var xPosition = e.clientX
	var yPosition = e.clientY
	console.log(xPosition, yPosition)


	for(var i = 0; i < circles.length; i++) {
		for(var j = 0; j < circles.length; j++) {

			var circle = circles[i][j]

			if((Math.pow((xPosition - circle.positionX - circle.radius), 2) + Math.pow((yPosition - circle.positionY - circle.radius), 2)) < Math.pow(circle.radius, 2)) {
				console.log("click in circle")
				console.log(circle)
				return true
			} else { 
				console.log(xPosition, yPosition)
			}

		} 
	}
	return false
}

function draw() { 
	var canvas = document.getElementById('tutorial')
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d')
		for(var i = 0; i < circles.length; i++){
			for(var j = 0; j < circles.length; j++){
				var circle = circles[i][j]
				ctx.fillStyle = circle.colorString
				ctx.beginPath()
				ctx.arc(circle.positionX, circle.positionY, circle.radius, 0, Math.PI*2)
				ctx.fill()
			}
		}
	}

	canvas.addEventListener('click', clickIsInCircle, false)

}