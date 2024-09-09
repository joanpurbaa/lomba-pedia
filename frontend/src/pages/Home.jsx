import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [lomba, setLomba] = useState([]);

  const fetch = async () => {
    try {
      const result = await axios.get("http://localhost:3000/tampilkanlomba");

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
      <div className="h-full xxl:h-dvh bg-zinc-900 items-center text-white p-5">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Lomba pedia</h1>
          <button className="bg-blue-600 text-white p-3 rounded-md">
            Unggah lomba
          </button>
        </div>
        <div className="grid grid-cols-12 gap-5 mt-5">
          {lomba.map((dataLomba, index) => (
            <div
              key={index}
              className="col-span-3 flex flex-col items-start gap-y-2"
            >
              <img
                className="h-full object-cover"
                src={dataLomba.poster}
                alt=""
              />
              <h2 className="text-xl font-semibold">{dataLomba.nama}</h2>
              <p>{dataLomba.deadline}</p>
              <p className="text-start bg-zinc-700 text-sm font-medium p-2 rounded-md">
                {dataLomba.kategori}
              </p>
              <marquee>{dataLomba.penyelenggara}</marquee>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
