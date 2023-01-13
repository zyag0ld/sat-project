const mongoose = require("mongoose");

const alertaSchema = mongoose.Schema(
  {
    orden: { type: Number, required: true },
    tipo: { type: String, required: true },
    grado: { type: String, required: true },
    color: { type: String, required: true },
    publicada: { type: Boolean, required: true, default: false }
  },
  {
    collection: "alertas",
    timestamps: true,
    versionKey: false
  }
);

const Alerta = mongoose.model("Alerta", alertaSchema);

module.exports = Alerta;
