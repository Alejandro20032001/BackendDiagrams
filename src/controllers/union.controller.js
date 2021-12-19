import Union from "../models/union.canvas";

export const createUnion = async (req, res) => {
  try {
    const newUnion = new Union(req.body);
    const unionCreated = await newUnion.save();
    res.status(200).json(unionCreated);
  } catch (error) {
    console.log(error);
  }
};

export const updateUnion = async (req, res) => {
  const unionUpdated = await Union.findByIdAndUpdate(
    req.params.unionId,
    req.body
  );
  res.status(200).json(unionUpdated);
};

export const getUnionById = async (req, res) => {
  const unionFounded = await Union.findById(req.params.unionId);
  if (unionFounded) res.status(200).json(unionFounded);
  else res.status(404).json({ message: "Not Found" });
};
