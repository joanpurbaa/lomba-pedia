import axios from "axios";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LuUpload } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import { VscSend } from "react-icons/vsc";

const DetailLomba = () => {
  const [lomba, setLomba] = useState([]);

  let currentUrl = window.location.href;
  let lombaId = currentUrl.split("/");
  lombaId = lombaId[3];
  lombaId = lombaId.split("?");
  lombaId = lombaId[1];
  lombaId = lombaId.split("=");
  lombaId = lombaId[1];

  const fetch = async () => {
    try {
      const result = await axios.get(
        `http://localhost:3000/tampilkanlombabyid/${lombaId}`
      );

      setLomba(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      <div className="min-h-dvh items-center text-white p-5">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold">
            Lomba pedia
          </Link>
          <Button color="default">
            <LuUpload className="mr-2 h-5 w-5" />
            Unggah lomba
          </Button>
        </div>
        {lomba.map((dataLomba, index) => (
          <div key={index} className="grid grid-cols-12 gap-x-5 gap-y-5 mt-5">
            <img
              className="col-span-12 md:col-start-3 md:col-end-11 lg:col-span-4 w-full sm:h-[89vh] object-cover object-top rounded-lg"
              src={dataLomba.poster}
              alt=""
            />
            <div className="col-span-12 lg:col-span-4 bg-zinc-800 rounded-lg p-5">
              <p>{dataLomba.deskripsi}</p>
            </div>
            <div className="col-span-12 lg:col-span-4 space-y-3">
              <h1 className="text-2xl font-semibold">{dataLomba.nama}</h1>
              <p>{dataLomba.penyelenggara}</p>
              <div className="flex gap-x-3">
                <Button
                  target="_blank"
                  href={`https://api.whatsapp.com/send/?phone=${dataLomba.narahubung}`}
                  className="w-full"
                  color="default"
                >
                  <AiOutlineMessage className="mr-2 h-5 w-5" />
                  Narahubung
                </Button>
                <Button
                  target="_blank"
                  href={dataLomba.linkPendaftaran}
                  className="w-full"
                  color="daftar"
                >
                  <VscSend className="mr-2 h-5 w-5" />
                  Daftar
                </Button>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Deadline</p>
                <p>{dataLomba.deadline}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Pendaftaran</p>
                <p>{dataLomba.pendaftaran}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Tingkat</p>
                <p>{dataLomba.tingkat}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Kategori</p>
                <p className="text-start bg-zinc-700 text-sm p-2 rounded-md">
                  {dataLomba.kategori}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DetailLomba;
