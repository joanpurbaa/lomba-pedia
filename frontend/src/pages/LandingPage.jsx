import { Button, Accordion } from "flowbite-react";
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
            <p className="italic mt-10">- Bob The Creator</p>
          </div>
          <img className="w-72 rounded-lg" src="bob.jpg" alt="" />
        </div>
        <div className="flex flex-col items-center w-full">
          <h2 className="text-white text-4xl font-bold">
            Frequently Asked Question
          </h2>
          <h3 className="text-white text-base mt-3">
            Beberapa pertanyaan yang dapat membantu kamu!
          </h3>
          <div className="w-[50%]">
            <Accordion className="w-full mt-20 border-0" collapseAll>
              <Accordion.Panel>
                <Accordion.Title className="bg-blue-600 hover:bg-blue-600 focus:ring-0 text-white">
                  Bagaimana cara menghapus lomba yang telah kita upload?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    <span className="customUnderline">Pijar pelajar</span>{" "}
                    merupakan platform belajar secara online khususnya skill
                    bidang digital seperti coding, editing, data science,
                    designing, dan banyak course digital lainnya.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="bg-blue-600 hover:bg-blue-600 focus:ring-0 text-white">
                  Tujuan Pijar Pelajar?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Kami hadir untuk membantu banyak{" "}
                    <span className="customUnderline">anak bangsa</span>,
                    khususnya di bidang{" "}
                    <span className="customUnderline">teknologi</span>, agar
                    dapat bersaing di dunia{" "}
                    <span className="customUnderline">modern</span>.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="bg-blue-600 hover:bg-blue-600 focus:ring-0 text-white">
                  Benefit setelah belajar?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Buat kamu yang belajar di{" "}
                    <span className="customUnderline">Pijar Pelajar</span>,
                    selain mendapat skill, dan relasi baru, kamu juga bakal
                    dapat sertifikat kelulusan, dan bagi murid terbaik, maka
                    secara otomatis akan mendapat pekerjaan di Start Up ini.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
