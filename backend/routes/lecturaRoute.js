const express = require("express");
const router = express.Router();
const { createLectura, getLecturas, getLectura, updateLectura, deleteLectura } = require("../controllers/lecturaController");

router.post("/", createLectura);
router.get("/", getLecturas);
router.get("/:id", getLectura);
router.put("/:id", updateLectura);
router.delete("/:id", deleteLectura);

module.exports = router;