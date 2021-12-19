import Diagrama from "../models/diagrama";

export const createDiagram = async (req, res) => {
  try {
    const newDiagram = new Diagrama(req.body);
    const diagramCreated = await newDiagram.save();
    res.status(200).json(diagramCreated);
  } catch (error) {
    console.log(error);
  }
};

export const updateDiagram = async (req, res) => {
  const diagramUpdated = await Diagrama.findByIdAndUpdate(
    req.params.userId,
    req.body
  );
  res.status(200).json(diagramUpdated);
};

export const getDiagramById = async (req, res) => {
  const diagramFounded = await Diagrama.findById(req.params.diagramId).populate(
    [
      {
        path: "clases",
        populate: ["grupoNombre", "grupoAtributos", "grupoMetodos"],
      },
      {
        path: "uniones",
        populate: ["claseOrigen", "claseFin"],
      },
    ] //["clases", "uniones"]
  );
  res.status(200).json(diagramFounded);
};

export const getAllDiagrams = async (req, res) => {
  const diagramsFounded = await Diagrama.find();
  res.status(200).json(diagramsFounded);
};
