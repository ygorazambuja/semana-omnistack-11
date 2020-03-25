const express = require("express");
const routes = express.Router();
const ongController = require("./controllers/ongController");
const incidentController = require("./controllers/incidentController");
const profileController = require("./controllers/profileController");
const sessionController = require("./controllers/sessionController");

routes.post("/sessions", sessionController.create);

routes.post("/ongs", ongController.create);
routes.get("/ongs", ongController.getOngs);

routes.post("/incidents", incidentController.create);
routes.get("/incidents", incidentController.getIncidents);
routes.delete("/incidents/:id", incidentController.delete);

routes.get("/profile", profileController.index);

module.exports = routes;
