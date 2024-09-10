import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { LuUpload } from "react-icons/lu";

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
      <div className="min-h-screen items-center text-white p-5">
        <div className="flex justify-between items-center">
          <Link className="text-xl font-semibold">Lomba pedia</Link>
          <Button color="default">
            <LuUpload className="mr-2 h-5 w-5" />
            Unggah lomba
          </Button>
        </div>
        <div className="grid grid-cols-12 gap-5 mt-5">
          {lomba.map((dataLomba, index) => (
            <Link
              to={`/detail?id=${dataLomba.id}`}
              key={index}
              className="col-span-12 sm:col-span-6 lg:col-span-6 xl:col-span-3 flex flex-col items-start gap-y-2"
            >
              <img
                className="w-full h-[500px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[550px] object-cover object-top rounded-lg"
                src={dataLomba.poster}
                alt=""
              />
              <h2 className="text-xl font-semibold">{dataLomba.nama}</h2>
              <p>{dataLomba.deadline}</p>
              <p className="text-start bg-zinc-700 text-sm font-medium p-2 rounded-md">
                {dataLomba.kategori}
              </p>
              <marquee>{dataLomba.penyelenggara}</marquee>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
