const express = require('express');
const app = express();
const port = 5000;
app.listen(5500, () => console.log('listing at port:5500'));
app.use(express.static(
      'static'
));
// app.use(express.static('/index.html'));
// serve a webpage i.e. 'index.html'
// app.use(express.static('./public/index.html'));

// import { Node } from "./modules/node.js";

// let n = new Node(5);
// console.log(n.data);