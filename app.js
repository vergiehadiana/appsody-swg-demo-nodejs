const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from IBM Cloud Pak for Application! - SWG Vergie version 2");
});
 
module.exports.app = app;2
