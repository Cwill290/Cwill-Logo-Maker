const Triangle = require("./Triangle.js");

describe("Triangle", () => {
  test("render method should return the correct SVG string", () => {
    const triangle = new Triangle();
    triangle.setColor("#FF0000");
    triangle.setText("Sample");
    expect(triangle.render()).toMatchInlineSnapshot(`
      "
          <svg width="300" height="200">
            <polygon points="150,50 100,150 200,150" fill="#FF0000" />
            <text x="150" y="100" text-anchor="middle" alignment-baseline="middle" font-weight="bold" fill="white">Sample</text>
          </svg>"
    `);
  });
});
