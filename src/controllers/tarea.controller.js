import Tarea from "../models/tarea.schema";
export const createTarea = async (req, res) => {
  try {
    const { descripcion, user } = req.body;
    const newTarea = new Diagrma(req.body);
    const tareaCreated = await newTarea.save();
    res.status(201).json(tareaCreated);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export const getTareaById = async (req, res) => {
  const tareaFounded = await Tarea.findById(req.params.tareaId);
  res.status(200).json(diagramFounded);
};

export const getAllTareasFromTeacher = async (req, res) => {
  const tareaFounded = await Tarea.findOne({ user: req.param.userId });
  res.status(200).json(tareaFounded);
};
