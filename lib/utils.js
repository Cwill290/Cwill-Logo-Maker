const fs = require('fs');

function writeFile(fileName, content) {
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    }
  });
}

module.exports = { writeFile };
