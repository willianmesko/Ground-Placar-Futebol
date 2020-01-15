import { Router } from "express";

import PlacarTimeController from "./controllers/PlacarTimeController";
import PlacarCampeonatosController from "../src/controllers/PlacarCampeonatosController";
const routes = new Router();

routes.get("/placartime/:timeId", PlacarCampeonatosController.index);
routes.get("/placarcampeonato/:campeonatoId", PlacarCampeonatosController.show);
routes.get("/timeinfo/:timeId", PlacarTimeController.show);

export default routes;
