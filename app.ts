import Rectangle from "./classes/rectangle";
import Square from "./classes/square";
import ask from "./utils/inputs";

// Rectangle
async function rectangle() {
  const height = Number(await ask("Enter the length of the rectangle : "));
  const width = Number(await ask("Enter the width of the rectangle : "));

  if (height < 0 || width < 0)
    throw new Error("Please enter a positive number only");

  const rectangle1 = new Rectangle(height, width);
  const area = rectangle1.getArea();
  const perimeter = rectangle1.getPerimeter();

  console.warn(`Area :::: ${area} and Perimeter :::: ${perimeter}`);
}
rectangle();

// Square Solution 1
// async function square() {
//   const side = Number(await ask("Enter the side of the square : "));

// if (side < 0) throw new Error("Please enter a positive number only")

//   const square1 = new Square(side);
//   const area = square1.getArea();

//   console.warn(`Area :::: ${area} and Perimeter :::: ${perimeter}`);
// }

// Square solution 2
async function square() {
  const side = Number(await ask("Enter the side of the square : "));

  if (side < 0) throw new Error("Please enter a positive number only");

  const square1 = new Square(side);
  const area = square1.getArea();
  const perimeter = square1.getPerimeter();

  console.warn(`Area :::: ${area} and Perimeter :::: ${perimeter}`);
}
// square();
