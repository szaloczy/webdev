const express = require('express');
const logger = require('./logger');
const authorize = require('./authorize');
const app = express();

app.use([logger, authorize]);

//req => middleware => res

 
app.get('/', (req,res)=> {

   res.send('Home');
});

app.get('/about', (req,res) => {
   res.send('About');
});

app.get('/api/v1/products', (req,res) => {
   res.send('products');
});

app.get('/api/v1/items',(req,res) => {
   console.log(req.user);
   res.send('items')
})

app.listen(5000, () => {
   console.log("Server listening on port 5000...");
});