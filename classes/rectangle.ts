import Shape from "../interfaces/shape";

export default class Rectangle implements Shape {
  constructor(private height: number, private width: number) {
    this.height = height;
    this.width = width;
  }

  getArea(): number {
    return this.height * this.width;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}
