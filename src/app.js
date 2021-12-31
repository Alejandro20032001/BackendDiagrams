import express from "express";
import morgan from "morgan";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";
import classRoutes from "./routes/clase.routes";
import groupRoutes from "./routes/group.routes";
import unionRoutes from "./routes/union.routes";
import diagramRoutes from "./routes/diagram.routes";
import tareaRoutes from "./routes/tarea.routes";
import cursoRoutes from "./routes/curso.routes";
import respuestaRoutes from "./routes/respuesta.routes";
import { createRoles } from "./libs/initSetUp";

const cors = require("cors");
const app = express();
createRoles();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("welcome");
});

app.use("/user", userRoutes);
app.use("/auth", authRoutes);
app.use("/class", classRoutes);
app.use("/group", groupRoutes);
app.use("/union", unionRoutes);
app.use("/diagram", diagramRoutes);
app.use("/tarea", tareaRoutes);
app.use("/respuesta", respuestaRoutes);
app.use("/curso", cursoRoutes);

app.use(express.static("front-end"))

export default app;
