import { Button, Accordion } from "flowbite-react";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";

const LandingPage = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center pt-5">
        <nav className="w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] 2xl:w-[20%] flex justify-center gap-x-20 bg-zinc-700 py-5 px-14 rounded-full">
          <li className="list-none text-white">
            <a href="#tentang">Tentang</a>
          </li>
          <li className="list-none text-white">
            <a href="#faq">FAQ</a>
          </li>
        </nav>
        <div className="flex flex-col items-center gap-y-6 py-20">
          <p className="text-gray-200 text-lg">Mau lomba? disini aja!</p>
          <h1 className="text-white text-4xl sm:text-7xl font-bold">
            Lomba Pedia
          </h1>
          <p className="text-white text-center text-sm sm:text-xl">
            Temukan Rahasia Menang Lomba di <b>Lomba Pedia!</b>
          </p>
          <Link to="/home">
            <Button className="rounded-full" color="secondary" size="xl">
              See more
            </Button>
          </Link>
        </div>
        <img
          className="my-10 w-[90%] md:w-[60%]"
          src="desktopMockup.png"
          alt=""
        />
        <div
          id="tentang"
          className="w-[90%] xl:w-[70%] 2xl:w-[60%] my-20 flex flex-col md:flex-row items-start md:items-center bg-white text-zinc-900 rounded-lg p-5 md:p-10"
        >
          <div className="">
            <p className="font-semibold text-md sm:text-xl italic">
              <q>
                Aku suka lomba, tapi kendala ku ya keterbatasan informasi, biasa
                lewat timeline Instagram tapi seringan udah telat gitu sampe nya
                informasi ke aku. Ya dari itu aku buat website ini sebagai
                portal untuk memudahkan informasi seputar perlombaan
              </q>
            </p>
            <p className="italic mt-10">- The Creator</p>
          </div>
          <img className="w-full md:w-72 rounded-lg" src="joan.jpg" alt="" />
        </div>
        <div className="flex flex-col items-center w-full my-20">
          <h2 className="text-white text-xl md:text-4xl font-bold">
            Frequently Asked Question
          </h2>
          <h3 className="text-white text-center text-sm sm:text-base mt-3">
            Beberapa pertanyaan yang dapat membantu kamu!
          </h3>
          <div id="faq" className="w-[90%] lg:w-[50%]">
            <Accordion className="w-full mt-20 border-0" collapseAll>
              <Accordion.Panel>
                <Accordion.Title className="bg-blue-600 hover:bg-blue-600 focus:ring-0 text-white">
                  Bagaimana cara menghapus atau mengedit lomba yang telah kita
                  upload?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-white">
                    Kalau kamu ingin menghapus lomba yang telah kamu unggah,
                    kamu dapat menghubungi kontak admin, dan memberitahu pada
                    lomba yang mana dan alasan mengapa kamu ingin menghapus
                    lomba tersebut. Dan untuk mengedit, kamu juga dapat
                    melakukan hal yang sama yaitu dengan menghubungi admin.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="bg-blue-600 hover:bg-blue-600 focus:ring-0 text-white">
                  Tujuan dibuatnya Lomba Pedia?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-white">
                    Tujuan utama saya untuk membuat platform ini adalah karena
                    kesulitan saya dalam mencari tahu tentang lomba. Yang biasa
                    saya gampang ketinggalan informasi seputar lomba, saya rasa
                    saya perlu membuat 1 portal untuk mengakses banyak lomba.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="bg-blue-600 hover:bg-blue-600 focus:ring-0 text-white">
                  Apakah diizinkan mengikuti banyak lomba sekaligus?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-white">
                    Tentu saja boleh! tapi harus diingat bahwa kamu juga harus
                    baik dalam mengatur waktu untuk lomba, dan waktu hal
                    lainnya.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>
        <div className="w-full flex justify-center bg-zinc-800 py-10">
          <div className="w-[90%] flex flex-col justify-center  md:flex-row sm:justify-between md:justify-around md:items-start gap-y-20">
            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-white">
                Lomba Pedia
              </h1>
              <p className="text-white mt-3">
                Temukan lomba yang kamu inginkan!
              </p>
            </div>
            <div>
              <h1 className="text-lg sm:text-2xl font-medium text-white">
                Menu
              </h1>
              <nav className="mt-3">
                <ul className="space-y-3">
                  <li>
                    <a
                      className="text-white text-sm sm:text-base"
                      href="#tentang"
                    >
                      Tentang
                    </a>
                  </li>
                  <li>
                    <a className="text-white text-sm sm:text-base" href="#faq">
                      FAQ
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <h1 className="text-lg sm:text-2xl font-medium text-white">
                Kontak
              </h1>
              <nav className="mt-3">
                <ul className="space-y-3">
                  <li className="flex items-center gap-x-3">
                    <IoCall className="text-white w-7 h-7" />
                    <a
                      className="text-white text-sm sm:text-base"
                      href="#tentang"
                    >
                      +6282275338090
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
