const Lectura = require("../models/lecturaModel");

// Create Lectura
const createLectura = async (req, res) => {
  try {
    const lectura = await Lectura.create(req.body);
    res.status(200).json(lectura);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Read/Get Lecturas
const getLecturas = async (req, res) => {
  try {
    const lecturas = await Lectura.find();
    res.status(200).json(lecturas);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Read/Get Lectura by Id
const getLectura = async (req, res) => {
  try {
    const { id } = req.params;
    const lectura = await Lectura.findById(id);
    if (!lectura) {
      return res.status(404).json(`Lectura with  Id: ${id} not found`);
    };
    res.status(200).json(lectura);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Update Lectura
const updateLectura = async (req, res) => {
  try {
    const { id } = req.params;
    const lectura = await Lectura.findByIdAndUpdate(
      {_id: id}, req.body, {new: true, runValidators: true}
    );
    if (!lectura) {
      return res.status(404).json(`Lectura with  Id: ${id} not found`);
    };
    res.status(200).json(lectura);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Delete Lectura
const deleteLectura = async (req, res) => {
  try {
    const { id } = req.params;
    const lectura = await Lectura.findByIdAndDelete(id);
    if (!lectura) {
      return res.status(404).json(`Lectura with  Id: ${id} not found`);
    };
    res.status(200).json("Lectura deleted");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createLectura,
  getLecturas,
  getLectura,
  updateLectura,
  deleteLectura
};
