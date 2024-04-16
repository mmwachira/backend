const express = require('express');
const router = express.Router();
const {
  createCat,
  readCats,
  updateCat,
  deleteCat
} = require('../controllers/cat.controller');

// POST request to create a cat
router.post('/:id/:name', createCat);

// GET request to read all cats
router.get('/', readCats);

// PUT request to update a cat by ID
router.put('/:id/:name', updateCat);

// DELETE request to delete a cat by ID
router.delete('/:id', deleteCat);

module.exports = router;