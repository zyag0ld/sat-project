const express = require("express");
const router = express.Router();
const { createAlerta, getAlertas, getAlerta, deleteAlerta, updateAlerta } = require("../controllers/alertaController");

router.post("/", createAlerta);
router.get("/", getAlertas);
router.get("/:id", getAlerta);
router.put("/:id", updateAlerta ); // PUT all attributes required PATCH update only send attribute
router.delete("/:id", deleteAlerta);

module.exports = router;
