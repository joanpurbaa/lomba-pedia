import { PrismaClient } from "@prisma/client";
import MD5 from "crypto-js/md5.js";
import fs from "fs";

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
    let posterName = MD5(req.files.poster.name).toString();
    let posterExtension = req.files.poster.mimetype;

    posterExtension = posterExtension.split("/")[1];
    posterName = posterName + "." + posterExtension;

    const urlPoster = `${req.protocol}://${req.get(
      "host"
    )}/upload/${posterName}`;

    req.files.poster.mv(`./../frontend/public/${posterName}`);

    await prisma.lomba.create({
      data: {
        nama: req.body.nama,
        penyelenggara: req.body.penyelenggara,
        deadline: req.body.deadline,
        pendaftaran: req.body.pendaftaran,
        tingkat: req.body.tingkat,
        kategori: JSON.parse(req.body.kategori),
        peserta: JSON.parse(req.body.peserta),
        narahubung: req.body.narahubung,
        linkPendaftaran: req.body.linkPendaftaran,
        poster: posterName,
        urlPoster: urlPoster,
        deskripsi: req.body.deskripsi,
      },
    });

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};

export const hapusSemuaLomba = async (req, res) => {
  try {
    await prisma.lomba.deleteMany();

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};

export const hapusLomba = async (req, res) => {
  try {
    const data = await prisma.lomba.findFirst({
      where: { id: req.params.lombaid },
    });

    const uploadFolder = `./../frontend/public/${data.poster}`;

    fs.unlink(uploadFolder, async (error) => {
      if (error) return res.json(error);

      await prisma.lomba.delete({
        where: { id: req.params.lombaid },
      });
    });

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};
