import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
          <button className="bg-blue-600 text-white p-3 rounded-md">
            Unggah lomba
          </button>
        </div>
        {lomba.map((dataLomba, index) => (
          <div key={index} className="grid grid-cols-12 gap-x-5 mt-5">
            <img className="col-span-4 w-full h-[89vh] object-cover object-top rounded-lg" src={dataLomba.poster} alt="" />
            <div className="col-span-4">
              <p>{dataLomba.deskripsi}</p>
            </div>
            <div className="col-span-4">
              <h1 className="text-2xl font-semibold">{dataLomba.nama}</h1>
              <p>{dataLomba.penyelenggara}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DetailLomba;
