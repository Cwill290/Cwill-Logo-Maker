class Circle {
    constructor(radius) {
      this.radius = radius;
      this.color = 'black';
      this.text = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    setText(text) {
      this.text = text;
    }
  
    render() {
        const cx = 150;
        const cy = 100; 
        const fill = this.color;
        const text = this.text;
      
        return `<svg width="300" height="200">
          <circle cx="${cx}" cy="${cy}" r="${this.radius}" fill="${fill}" />
          <text x="${cx}" y="${cy}" text-anchor="middle" alignment-baseline="middle" font-weight="bold" fill="white">${text}</text>
        </svg>`;
      }
      
  }
  
  module.exports = Circle;
  