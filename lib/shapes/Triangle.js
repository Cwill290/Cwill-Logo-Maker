class Triangle {
    constructor() {
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
        const points = "150,50 100,150 200,150";
        const width = 300;
        const height = 200;
        const fill = this.color;
        const text = this.text;
      
        return `
    <svg width="300" height="200">
      <polygon points="150,50 100,150 200,150" fill="${this.color}" />
      <text x="150" y="100" text-anchor="middle" alignment-baseline="middle" font-weight="bold" fill="white">${this.text}</text>
    </svg>`;
      }
    }      
  
  module.exports = Triangle;
  