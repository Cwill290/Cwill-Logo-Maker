class Square {
    constructor(sideLength) {
      this.sideLength = sideLength;
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
        const width = 300;
        const height = 200;
        const fill = this.color;
        const text = this.text;
      
        return `<svg width="${width}" height="${height}">
          <rect x="0" y="0" width="${width}" height="${height}" fill="${fill}" />
          <text x="${width / 2}" y="${height / 2}" text-anchor="middle" alignment-baseline="middle" font-weight="bold" fill="white">${text}</text>
        </svg>`;
      }
      
  }
  
  module.exports = Square;
  