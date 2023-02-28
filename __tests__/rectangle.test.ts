import Rectangle from "../classes/rectangle";

describe("Rectangle Area", () => {
    it("Should calculate the area of a rectangle", () => {
        expect(new Rectangle(5, 10).getArea()).toBe(50);
    });

    it("Should calculate the area of a rectangle", () => {
        expect(new Rectangle(12, 9).getArea()).toBe(108);
    });
});

describe("Rectangle Perimeter", () => {
    it("Should calculate the perimeter of a rectangle", () => {
        expect(new Rectangle(5, 10).getPerimeter()).toBe(30);
    });

    it("Should calculate the perimeter of a rectangle", () => {
        expect(new Rectangle(12, 9).getPerimeter()).toBe(42);
    });
});