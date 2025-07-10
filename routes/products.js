// 1. Import Express
const express = require('express');

// 2. Create a new router instance
const router = express.Router();

// 3. Define the routes on the 'router' object
// Notice we use '/' instead of '/products'. The '/products' prefix will be added in index.js.
router.get('/', (req, res) => {
  res.send("Here is the list of all products.");
});

router.post('/', (req, res) => {
  res.send("A new product has been added.");
});

// This will become /products/:id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Here is the details for product ID: ${id}`);
});

// 4. Export the router to make it available to other files
module.exports = router;