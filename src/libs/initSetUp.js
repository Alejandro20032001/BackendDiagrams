import Role from "../models/roles.schema";

export const createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount();

    if (count > 0) return;

    const values = await Promise.all([
      new Role({ name: "estudiante" }).save(),
      new Role({ name: "docente" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};