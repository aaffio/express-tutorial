const express = require("express");
const router = express.Router();
let players = require("../dummyDatabase");

router.get("", async (req, res) => {
  try {
    res.status(200).json({
      data: players,
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err,
    });
  }
});

router.get("/:id", async (req, res) => {
  let { id } = req.params;
  id = Number(id);
  try {
    const player = players.find((player) => player._id === id);
    if (player)
      res.status(200).json({
        data: player,
      });
    else
      res.status(404).json({
        data: null,
      });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err,
    });
  }
});

module.exports = router;
