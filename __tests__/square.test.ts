import Square from "../classes/square";

describe("Square Area", () => {
    it("Should calculate the area of a Square", () => {
        expect(new Square(5).getArea()).toBe(25);
    });

    it("Should calculate the area of a Square", () => {
        expect(new Square(12).getArea()).toBe(144);
    });
});

describe("Square Perimeter", () => {
    it("Should calculate the perimeter of a Square", () => {
        expect(new Square(5).getPerimeter()).toBe(20);
    });

    it("Should calculate the perimeter of a Square", () => {
        expect(new Square(12).getPerimeter()).toBe(48);
    });
});