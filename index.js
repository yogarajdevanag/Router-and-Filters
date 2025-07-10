const express = require('express');
const app = express();
const PORT = 3000;

// 1. Import the router file
const productRoutes = require('./routes/products');

// 2. Use app.use() to connect the router
// This tells the app: "For any request that starts with '/products',
// use the 'productRoutes' router to handle it."
app.use('/products', productRoutes);


// The old product routes are now gone from this file!

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});