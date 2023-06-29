const Square = require("./Square.js");

describe("Square", () => {
  test("render method should return the correct SVG string", () => {
    const square = new Square(100);
    square.setColor("red");
    square.setText("Sample");
    expect(square.render()).toMatchInlineSnapshot(`
      "<svg width="300" height="200">
                <rect x="0" y="0" width="300" height="200" fill="red" />
                <text x="150" y="100" text-anchor="middle" alignment-baseline="middle" font-weight="bold" fill="white">Sample</text>
              </svg>"
    `);
  });
});
