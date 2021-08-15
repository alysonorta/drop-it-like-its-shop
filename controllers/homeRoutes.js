// const { GroceryItems } = require('../models');
const router = require('express').Router();



//Rendering the homepage
router.get('/', async (req, res) => {
    try {
        res.render('homepage');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// this is getting all items by name and Id and sending it out to the page
router.get('/', async (req, res) => {
    try {
        const groceryData = await GroceryItems.findAll();
        // this is how it goes out
        res.render('homepage', groceryData);
    } catch (err) {
        console.log(err);
    res.status(500).json(err);
    }
});



module.exports = router;