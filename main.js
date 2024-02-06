 const { spawn } = require('child_process'); 
 
  document.getElementById('submitButton').addEventListener('click', () => { 
    spawn('node', ['node.js']); 
  }); 