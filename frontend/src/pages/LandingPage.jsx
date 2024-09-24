import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center p-5">
        <nav className="flex gap-x-20 bg-zinc-700 py-5 px-14 rounded-full">
          <li className="list-none text-white">
            <a href="#tentang">Tentang</a>
          </li>
          <li className="list-none text-white">
            <a href="">FAQ</a>
          </li>
        </nav>
        <div className="flex flex-col items-center gap-y-6 py-20">
          <p className="text-gray-200 text-lg">Mau lomba? disini aja!</p>
          <h1 className="text-white text-7xl font-bold">Lomba Pedia</h1>
          <p className="text-white text-xl">
            Temukan Rahasia Menang Lomba di <b>Lomba Pedia!</b>
          </p>
          <Link to="/">
            <Button className="rounded-full" color="secondary" size="xl">
              See more
            </Button>
          </Link>
        </div>
        <img className="my-10 w-[60%]" src="desktopMockup.png" alt="" />
        <div
          id="tentang"
          className="mx-96 my-20 flex items-center bg-white text-zinc-900 rounded-lg p-10"
        >
          <div className="">
            <p className="font-semibold text-xl italic">
              <q>
                Aku suka lomba, tapi kendala ku ya keterbatasan informasi, biasa
                lewat timeline Instagram tapi seringan udah telat gitu sampe nya
                informasi ke aku. Ya dari itu aku buat website ini sebagai
                portal untuk memudahkan informasi seputar perlombaan
              </q>
            </p>
            <p className="italic mt-10">- Joan The Creator</p>
          </div>
          <img className="w-72 rounded-lg" src="joan.jpg" alt="" />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-white text-4xl font-bold">Frequently Asked Question</h2>
          <h3 className="text-white text-base mt-3">Beberapa pertanyaan yang dapat membantu kamu!</h3>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
