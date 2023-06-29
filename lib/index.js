
const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./shapes/Circle');
const Square = require('./shapes/Square');
const Triangle = require('./shapes/Triangle');

function writeFile(fileName, content) {
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log(`Generated ${fileName}`);
    }
  });
}

async function run() {
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo:',
      validate: (input) => {
        if (input.length > 3) {
          return 'Please enter up to three characters.';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (e.g., blue or #000000):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['circle', 'square', 'triangle'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (e.g., red or #FF0000):',
    },
  ]);

  const { text, textColor, shape, shapeColor } = userInput;

  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <text x="150" y="100" fill="${textColor}" text-anchor="middle" alignment-baseline="central">${text}</text>
      ${getShapeMarkup(shape, shapeColor)}
    </svg>
  `;

  writeFile('logo.svg', svgContent);
}

function getShapeMarkup(shape, color) {
  let shapeInstance;

  switch (shape) {
    case 'circle':
      shapeInstance = new Circle(50);
      break;
    case 'square':
      shapeInstance = new Square(100);
      break;
    case 'triangle':
      shapeInstance = new Triangle();
      break;
    default:
      console.log('Invalid shape selection.');
      return '';
  }

  shapeInstance.setColor(color);
  return shapeInstance.render();
}

run();
