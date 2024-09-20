import express from "express";
import {
  tampilkanLomba,
  tampilkanLombaById,
  tambahLomba,
  hapusLomba,
  hapusSemuaLomba,
} from "../controller/lomba.js";

const route = express.Router();

// lomba's controller
route.get("/tampilkanlomba", tampilkanLomba);
route.get("/tampilkanlombabyid/:lombaid", tampilkanLombaById);
route.post("/tambahlomba", tambahLomba);
route.delete("/hapus", hapusSemuaLomba);
route.delete("/hapus/:lombaid", hapusLomba);

export default route;
