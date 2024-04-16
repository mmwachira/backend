let cats = [];

// Create a new cat
function createCat(req, res) {
  const { id, name } = req.params;
  const newCat = { id: parseInt(id), name };
  cats.push(newCat);
  res.status(201).json(newCat);
}

// Read all cats
function readCats(req, res) {
  res.json(cats);
}

// Update a cat by ID
function updateCat(req, res) {
  const { id } = req.params;
  const { name } = req.params;
  const catIndex = cats.findIndex(cat => cat.id === parseInt(id));
  if (catIndex === -1) {
    return res.status(404).json({ message: "Cat not found" });
  }
  cats[catIndex].name = name;
  res.json(cats[catIndex]);
}

// Delete a cat by ID
function deleteCat(req, res) {
  const { id } = req.params;
  const catIndex = cats.findIndex(cat => cat.id === parseInt(id));
  if (catIndex === -1) {
    return res.status(404).json({ message: "Cat not found" });
  }
  cats.splice(catIndex, 1);
  res.sendStatus(204);
}

module.exports = {
    createCat,
    readCats,
    updateCat,
    deleteCat
};