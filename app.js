const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody - Version 01 !");
});
 
module.exports.app = app;
