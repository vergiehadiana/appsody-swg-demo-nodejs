const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody - Version 1!");
});
 
module.exports.app = app;
