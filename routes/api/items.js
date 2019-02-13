const express = require("express");
const router = express.Router();

//Item model

const Item = require("../../models/Item");

//@route Get api/items
//desc Get all items
//acess public

//router.get
router.get("/", (req, res) => {
  Item.find().then(items => res.json(items));
});

//@route Post api/items
//desc a post
//acess public

//router.post
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

//@route Delete api/items:id
//desc a Delete item
//acess public

//router.delete
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
