const express = require("express");
const router = express.Router();

// import Schema Item model
const Item = require("../../models/Item");

// @routes GET api/items
// @desc GET all items
// @acces  public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

// @routes POST api/items
// @desc create a item
// @acces  public
router.post("/", (req, res) => {
  const newitem = new Item({
    userName: req.body.userName,
    email: req.body.email,
  });

  newitem.save().then((item) => res.json(item));
});

// @routes Delete api/items
// @desc Delete a item
// @acces  public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(400).json({ success: false }));
});

module.exports = router;
