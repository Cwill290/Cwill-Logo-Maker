const Circle = require("./Circle.js");

describe("Circle", () => {
  test("render method should return the correct SVG string", () => {
    const circle = new Circle(50);
    circle.setColor("blue");
    circle.setText("Sample");
    expect(circle.render()).toMatchInlineSnapshot(`
      "<svg width="300" height="200">
                <circle cx="150" cy="100" r="50" fill="blue" />
                <text x="150" y="100" text-anchor="middle" alignment-baseline="middle" font-weight="bold" fill="white">Sample</text>
              </svg>"
    `);
  });
});
