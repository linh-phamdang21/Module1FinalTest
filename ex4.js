let ctx = document.getElementById("finalTest").getContext("2d");
let Circle = function (xPos, yPos, radius, color) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
    this.color = color;
    this.getXPos = function () {
        return this.xPos;
    };
    this.getYPos = function () {
        return this.yPos
    };

    this.getRadius = function () {
        return this.radius;
    };

    this.getColor = function () {
        return this.color;
    };

    this.render = function () {
        ctx.beginPath();
        ctx.arc(this.getXPos(), this.getYPos(), this.getRadius(), 0, 2 * Math.PI);
        ctx.fillStyle = this.getColor();
        ctx.fill();
        ctx.closePath();
    };
};

function createCircle() {
    let circle = new Circle(10, 10, 100, "#000000");
    circle.render();
}
