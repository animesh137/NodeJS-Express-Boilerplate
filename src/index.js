const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// linking the router file so that we can use it below
const router = require('./routes/router.js');

// this allows us to use the router file
app.use('/', router);

// starting the server on port 3000
app.listen(port, () =>
  console.log(`☕ Express Server on port ${port}! -> go to http://localhost:${port}`)
);
