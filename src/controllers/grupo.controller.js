import Grupo from "../models/grupo.canvas";

export const updateGroup = async (req, res) => {
  const grupoUpdated = await Grupo.findByIdAndUpdate(
    req.params.userId,
    req.body
  );
  res.status(200).json(grupoUpdated);
};

export const getGroutById = async (req, res) => {
  const grupoFounded = await Grupo.findById(req.params.grupoId);
  if (grupoFounded) res.status(200).json(grupoFounded);
  else res.status(404).json({ message: "Not found" });
};
