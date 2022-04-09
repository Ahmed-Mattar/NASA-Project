const express = require("express");
const {
  HttpGetAllLaunches,
  HttpAddNewLaunch,
} = require("./launches.controller");

const launchesRouter = express.Router();

launchesRouter.get("/", HttpGetAllLaunches);
launchesRouter.post("/", HttpAddNewLaunch);

module.exports = launchesRouter;
