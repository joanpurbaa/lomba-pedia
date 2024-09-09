import express from "express";
import {
  tampilkanLomba,
  tambahLomba,
  hapusLomba,
} from "../controller/lomba.js";
  
const route = express.Router();

// lomba's controller
route.get("/tampilkanlomba", tampilkanLomba);
route.post("/tambahlomba", tambahLomba);
route.delete("/hapus/:lombaid", hapusLomba);

export default route;
