const mongoose = require("mongoose");

const lecturaSchema = mongoose.Schema(
  {
    tipo: { type: String, required: true },
    valor: { type: Number, required: true }
  },
  {
    collection: "lecturas",
    timestamps: true,
    versionKey: false
  }
);

const Lectura = mongoose.model("Lectura", lecturaSchema);

module.exports = Lectura;
