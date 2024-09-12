import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const tampilkanLomba = async (req, res) => {
  try {
    const result = await prisma.lomba.findMany();

    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const tampilkanLombaById = async (req, res) => {
  try {
    const result = await prisma.lomba.findMany({
      where: { id: req.params.lombaid },
    });

    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

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
        narahubung: req.body.narahubung,
        linkPendaftaran: req.body.linkPendaftaran,
        poster: req.body.poster,
        deskripsi: JSON.stringify(req.body.deskripsi),
      },
    });

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
  }
};

export const hapusLomba = async (req, res) => {
  try {
    await prisma.lomba.delete({
      where: { id: req.params.lombaid },
    });

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};
