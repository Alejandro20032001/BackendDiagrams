import Grupo from "../models/grupo.canvas";
import Clase from "../models/clase.canvas";
import { TipoGrupo } from "../enums/tipo-grupo.enum";

export const createClass = async (req, res) => {
  try {
    const { grupoNombre, grupoAtributos, grupoMetodos } = req.body;
    const grupoNombreSaved = await crearGrupo(grupoNombre, [grupoNombre.nombre], TipoGrupo.NOMBRE)
    const grupoAtributosSaved = await crearGrupo(grupoAtributos, [], TipoGrupo.ATRIBUTOS)
    const grupoMetodosSaved = await crearGrupo(grupoMetodos, [], TipoGrupo.METODOS)

    const newClass = new Clase({
        grupoNombre : grupoNombreSaved._id,
        grupoAtributos : grupoAtributosSaved._id,
        grupoMetodos : grupoMetodosSaved._id
    })
    const classSaved = await newClass.save();
    res.status(200).json(classSaved)
  } catch (error) {
    console.error(error)
    res.status(400).json(error)
  }
};
async function crearGrupo(grupo, contenido, tipoGrupo) {
  const newGrupo = new Grupo({
    x: grupo.x,
    y: grupo.y,
    ancho: grupo.ancho,
    alto: grupo.alto,
    contenido: contenido,
    tipo: tipoGrupo,
  });
  return await newGrupo.save();
}

export const getClasses = async(req, res) => {
  const classesFound = await Clase.find().populate(["grupoNombre", "grupoAtributos", "grupoMetodos"]);
  res.status(200).json(classesFound);
}

export const getClassById = async(req, res) => {
  const classesFound = await Clase.findById(req.params.classId);
  if(classesFound) res.status(200).json(classesFound)
  else res.status(404).json({ message: "not found"})
}
