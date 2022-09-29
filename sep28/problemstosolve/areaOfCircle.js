
class Circle{
    constructor(radius){
        this.radius = radius
    }


    getArea(){
        return Math.PI * Math.pow(this.radius,2);
    }
    getPerimeter(){
        return 2 * Math.PI * this.radius
    }
}

var radius = 11;

let circle = new Circle(radius)

let area = circle.getArea()


let cle = new Circle(4.44)
let perimeter = cle.getPerimeter()
console.log(`Area of circle is ${area}`);
console.log(`perimeter of circle is ${perimeter}`);