const Alerta = require("../models/alertaModel");

// Create Alerta
const createAlerta = async (req, res) => {
  try {
    const alerta = await Alerta.create(req.body);
    res.status(200).json(alerta);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Read/Get Alertas
const getAlertas = async (req, res) => {
  try {
    const alertas = await Alerta.find();
    res.status(200).json(alertas);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Read/Get Alerta by Id
const getAlerta = async (req, res) => {
  try {
    const { id } = req.params;
    const alerta = await Alerta.findById(id);
    if (!alerta) {
      return res.status(404).json(`Alerta with Id: ${id} not found`);
    };
    res.status(200).json(alerta);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Update Alerta
const updateAlerta = async (req, res) => {
  try {
    const { id } = req.params;
    const alerta = await Alerta.findByIdAndUpdate(
      {_id: id}, req.body, {new: true, runValidators: true}
    );
    if (!alerta) {
      return res.status(404).json(`Alerta with ID: ${id} not found`);
    };
    res.status(200).json(alerta);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Delete Alerta
const deleteAlerta = async (req, res) => {
  try {
    const { id } = req.params;
    const alerta = await Alerta.findByIdAndDelete(id);
    if (!alerta) {
      return res.status(404).json(`Alerta with ID: ${id} not found`);
    };
    res.status(200).json("Alerta deleted");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createAlerta,
  getAlertas,
  getAlerta,
  updateAlerta,
  deleteAlerta,
};
