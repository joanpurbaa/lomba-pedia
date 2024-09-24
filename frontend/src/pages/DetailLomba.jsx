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
          <Link to="/unggah">
            <Button color="secondary">
              <LuUpload className="mr-2 h-5 w-5" />
              Unggah lomba
            </Button>
          </Link>
        </div>
        {lomba.map((dataLomba, index) => (
          <div key={index} className="grid grid-cols-12 gap-x-5 gap-y-5 mt-5">
            <img
              className="col-span-12 md:col-start-3 md:col-end-11 lg:col-span-4 w-full sm:h-[89vh] object-cover object-top rounded-lg"
              src={dataLomba.poster}
              alt=""
            />
            <div className="col-span-12 lg:col-span-4 bg-zinc-800 rounded-lg p-5">
              <span
                dangerouslySetInnerHTML={{
                  __html: dataLomba.deskripsi.replace(/\n/g, "<br>"),
                }}
              ></span>
            </div>
            <div className="col-span-12 lg:col-span-4 space-y-3">
              <h1 className="text-2xl font-semibold">{dataLomba.nama}</h1>
              <p>{dataLomba.penyelenggara}</p>
              <div className="flex gap-x-3">
                <Button
                  target="_blank"
                  href={dataLomba.narahubung}
                  className="w-full"
                  color="secondary"
                >
                  <AiOutlineMessage className="mr-2 h-5 w-5" />
                  Narahubung
                </Button>
                <Button
                  target="_blank"
                  href={dataLomba.linkPendaftaran}
                  className="w-full"
                  color="primary"
                >
                  <VscSend className="mr-2 h-5 w-5" />
                  Daftar
                </Button>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Deadline</p>
                <p>
                  {new Date(dataLomba.deadline).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
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
                <div className="flex gap-x-3">
                  {dataLomba.kategori.map((detailKategori, index) => (
                    <p
                      key={index}
                      className="text-start bg-zinc-700 text-sm font-medium p-2 rounded-md"
                    >
                      {detailKategori}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Peserta</p>
                <div className="flex gap-x-3">
                  {dataLomba.peserta.map((detailPeserta, index) => (
                    <p
                      key={index}
                      className="text-start bg-zinc-700 text-sm font-medium p-2 rounded-md"
                    >
                      {detailPeserta}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DetailLomba;
