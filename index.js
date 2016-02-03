//ctx.arc(x,y,radius,startangle,endangle)
function Circle(positionX, positionY, radius, colorString) {
	this.radius = radius
	this.positionY = positionY
	this.positionX = positionX
	this.colorString = colorString
}

var circles = generateCircles(9)

function generateCircles(circlesPerBoard) {
	var board = []
	for (var i = 0; i < circlesPerBoard; i++) {
		var row = []
		for (var j = 0; j < circlesPerBoard; j++) {
			row.push(new Circle(50+j*40,50+i*40, 30, "rgb(" + Math.floor(255-10*i)+ "," + Math.floor(200-10*j) + ", 100)"))
		}
		board.push(row)
	}
	return board
}

function clickIsInCircle(e) {

	var xPosition = e.clientX
	var yPosition = e.clientY

	for(var i = 0; i < circles.length; i++) {
		for(var j = 0; j < circles.length; j++) {

			var circle = circles[i][j]

			if((Math.pow((xPosition - circle.positionX - circle.radius), 2) + Math.pow((yPosition - circle.positionY - circle.radius), 2)) < Math.pow(circle.radius, 2)) {
			console.log(circle.colorString)
			circle.colorString = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + Math.random() * 255 + ")"
			console.log(circle.colorString, circle)
			draw()

			return true
			}

		} 
	}
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

	canvas.addEventListener('mousemove', clickIsInCircle)

}