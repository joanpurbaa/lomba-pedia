import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const tambahLomba = async (req, res) => {
  try {
    await prisma.lomba.create({
      data: {
        nama: req.body.nama,
        penyelenggara: req.body.penyelenggara,
        deadline: req.body.deadline,
        pendaftaran: req.body.pendaftaran,
        tingkat: req.body.tingkat,
        kategori: req.body.kategori,
        peserta: req.body.peserta,
        poster: req.body.poster,
        deskripsi: req.body.deskripsi,
      },
    });

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};
