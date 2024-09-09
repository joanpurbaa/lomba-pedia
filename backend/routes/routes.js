import express from "express";
import { tambahLomba } from "../controller/lomba.js";

const route = express.Router();

// lomba's controller
route.post("/tambahlomba", tambahLomba);

export default route;