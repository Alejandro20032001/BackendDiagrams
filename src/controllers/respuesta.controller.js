import Respuesta from '../models/respuesta.tarea.schema'
export const createRespuesta = async (req, res) => {
    try {
        const { diagrama, estudiante, tarea } = req.body
        const newTarea = new Respuesta(req.body);
        const tareaCreated = await newTarea.save();
        res.status(200).json(tareaCreated);
    } catch (error) {
        console.log(error)
        res.json({ error: error })
    }
}
export const getAllResponces = async (req, res) => {
    const tareas = await Respuesta.find({tarea: req.param.tareaId});
    res.status(200).json(tareas)
}

export const getResponceById = async (req, res) => {
    const tarea = await Respuesta.findById(req.param.responceId);
    res.status(200).json(tarea)
}