import { useState } from "react";
import {
  Button,
  Label,
  FileInput,
  TextInput,
  Dropdown,
  Textarea,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import axios from "axios";

const UnggahLomba = () => {
  const [poster, setposter] = useState();
  const [nama, setNama] = useState();
  const [penyelenggara, setPenyelenggara] = useState();
  const [kategori, setKategori] = useState([]);
  const [deadline, setDeadline] = useState();
  const [linkPendaftaran, setLinkPendaftaran] = useState();
  const [narahubung, setNarahubung] = useState();
  const [tingkat, setTingkat] = useState();
  const [peserta, setPeserta] = useState([]);
  const [biaya, setBiaya] = useState();
  const [deskripsi, setDeskripsi] = useState();

  // const handleKategorichange = (e) => {
  //   const { value, checked } = e.target;

  //   if (checked) {
  //     setKategori((prevKategori) => [...prevKategori, value]);
  //   } else {

  //   }
  // };

  const uploadData = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:3000/tambahlomba", {
      nama,
      penyelenggara,
      kategori,
      deadline,
      linkPendaftaran,
      narahubung,
      tingkat,
      peserta,
      pendaftaran: biaya,
      deskripsi,
    });
  };

  return (
    <>
      <div className="min-h-dvh items-center text-white p-5">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold">
            Lomba pedia
          </Link>
          <Link target="_blank" to="http://wa.me/6282275338090">
            <Button color="secondary">
              <IoCallOutline className="mr-2 h-5 w-5" />
              Hubungi kami
            </Button>
          </Link>
        </div>
        <form
          className="grid grid-cols-12 gap-x-5 gap-y-5 mt-5"
          onSubmit={uploadData}
        >
          <div className="col-span-4 flex flex-col gap-y-5 w-full sm:h-[89vh]">
            <h2 className="text-xl font-semibold">Unggah poster lomba</h2>
            <Label
              htmlFor="dropzone-file"
              className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 hover:bg-zinc-800"
            >
              <div className="flex flex-col items-center justify-center pb-6 pt-5">
                <svg
                  className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-400">
                  <span className="font-semibold">Klik untuk mengupload</span>{" "}
                  atau drag and drop
                </p>
                <p className="text-xs text-gray-400">PNG, JPG atau JPEG</p>
              </div>
              <FileInput id="dropzone-file" className="hidden" />
            </Label>
          </div>
          <div className="col-span-5">
            <h2 className="text-xl font-semibold">Isi deskripsi lomba</h2>
            <ul className="mt-3 flex flex-col gap-y-8">
              <li>
                <label className="font-semibold" htmlFor="">
                  Nama lomba
                </label>
                <TextInput
                  onChange={(e) => setNama(e.target.value || null)}
                  color="default"
                  className="mt-3"
                  placeholder="Lomba Web Design Universitas..."
                  required
                ></TextInput>
              </li>
              <li>
                <label className="font-semibold" htmlFor="">
                  penyelenggara lomba
                </label>
                <TextInput
                  onChange={(e) => setPenyelenggara(e.target.value || null)}
                  color="default"
                  className="mt-3"
                  placeholder="Universitas..."
                  required
                ></TextInput>
              </li>
              <li>
                <label className="font-semibold" htmlFor="">
                  Kategori lomba
                </label>
                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3">
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={() => setKategori("Design")}
                      className="rounded-full"
                      name="level"
                      id="design"
                      type="checkbox"
                    />
                    <label htmlFor="design">Design</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={() => setKategori("Videography")}
                      className="rounded-full"
                      name="level"
                      id="videography"
                      type="checkbox"
                    />
                    <label htmlFor="videography">Videography</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={() => setKategori("Photography")}
                      className="rounded-full"
                      name="level"
                      id="photography"
                      type="checkbox"
                    />
                    <label htmlFor="photography">Photography</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={() => setKategori("UI/UX")}
                      className="rounded-full"
                      name="level"
                      id="ui/ux"
                      type="checkbox"
                    />
                    <label htmlFor="ui/ux">UI/UX</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={() => setKategori("IT & Technology")}
                      className="rounded-full"
                      name="level"
                      id="itTechnology"
                      type="checkbox"
                    />
                    <label htmlFor="itTechnology">IT & Technology</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={() => setKategori("Esai")}
                      className="rounded-full"
                      name="level"
                      id="esai"
                      type="checkbox"
                    />
                    <label htmlFor="esai">Esai</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={() => setKategori("Puisi")}
                      className="rounded-full"
                      name="level"
                      id="puisi"
                      type="checkbox"
                    />
                    <label htmlFor="puisi">Puisi</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={() => setKategori("Marketing")}
                      className="rounded-full"
                      name="level"
                      id="marketing"
                      type="checkbox"
                    />
                    <label htmlFor="marketing">Marketing</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={() => setKategori("Olahraga")}
                      className="rounded-full"
                      name="level"
                      id="olahraga"
                      type="checkbox"
                    />
                    <label htmlFor="olahraga">Olahraga</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={() => setKategori("Kesehatan")}
                      className="rounded-full"
                      name="level"
                      id="kesehatan"
                      type="checkbox"
                    />
                    <label htmlFor="kesehatan">Kesehatan</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={() => setKategori("Matematika")}
                      className="rounded-full"
                      name="level"
                      id="matematika"
                      type="checkbox"
                    />
                    <label htmlFor="matematika">Matematika</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={() => setKategori("Musik")}
                      className="rounded-full"
                      name="level"
                      id="musik"
                      type="checkbox"
                    />
                    <label htmlFor="musik">Musik</label>
                  </div>
                </div>
              </li>
              <li>
                <label className="font-semibold" htmlFor="">
                  Deadline
                </label>
                <p className="text-gray-400 text-sm">
                  Lomba akan dihapus tepat deadline pendaftaran ditutup
                </p>
                <input
                  className="text-zinc-900 mt-3 border-0 focus:ring-0 rounded-md"
                  type="date"
                  onChange={(e) => setDeadline(e.target.value || null)}
                />
              </li>
              <li>
                <label className="font-semibold" htmlFor="">
                  Link pendaftaran lomba
                </label>
                <TextInput
                  onChange={(e) => setLinkPendaftaran(e.target.value || null)}
                  color="default"
                  className="mt-3"
                  placeholder="https://dafarlombaposter..."
                  required
                ></TextInput>
              </li>
              <li>
                <label className="font-semibold" htmlFor="">
                  Narahubung
                </label>
                <p className="text-gray-400 text-sm">
                  Link narahubung berupa (WhatsApp/Telegram/Instagram)
                </p>
                <TextInput
                  onChange={(e) => setNarahubung(e.target.value || null)}
                  color="default"
                  className="mt-3"
                  placeholder="https://wa.me/628**********"
                  required
                ></TextInput>
              </li>
              <li>
                <label className="font-semibold" htmlFor="">
                  Tingkat lomba
                </label>
                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3">
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={() => setTingkat("Internasional")}
                      className="rounded-full"
                      name="level"
                      id="internasional"
                      type="radio"
                    />
                    <label htmlFor="internasional">Internasional</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={() => setTingkat("Nasional")}
                      className="rounded-full"
                      name="level"
                      id="nasional"
                      type="radio"
                    />
                    <label htmlFor="nasional">Nasional</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={() => setTingkat("Provinsi")}
                      className="rounded-full"
                      name="level"
                      id="provinsi"
                      type="radio"
                    />
                    <label htmlFor="provinsi">Provinsi</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={() => setTingkat("Kabupaten/Kota")}
                      className="rounded-full"
                      name="level"
                      id="kabupaten"
                      type="radio"
                    />
                    <label htmlFor="kabupaten">Kabupaten/Kota</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={() => setTingkat("Umum")}
                      className="rounded-full"
                      name="level"
                      id="umum"
                      type="radio"
                    />
                    <label htmlFor="umum">Umum</label>
                  </div>
                </div>
              </li>
              <li>
                <label className="font-semibold" htmlFor="">
                  Peserta lomba
                </label>
                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3">
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={() => setPeserta("Mahasiswa")}
                      className="rounded-full"
                      name="level"
                      id="mahasiswa"
                      type="checkbox"
                    />
                    <label htmlFor="mahasiswa">Mahasiswa</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={() => setPeserta("SMA Sederajat")}
                      className="rounded-full"
                      name="level"
                      id="sma-smk"
                      type="checkbox"
                    />
                    <label htmlFor="sma-smk">SMA Sederajat</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={() => setPeserta("SMP")}
                      className="rounded-full"
                      name="level"
                      id="smp"
                      type="checkbox"
                    />
                    <label htmlFor="smp">SMP</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={() => setPeserta("SD")}
                      className="rounded-full"
                      name="level"
                      id="sd"
                      type="checkbox"
                    />
                    <label htmlFor="sd">SD</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={() => setPeserta("Umum")}
                      className="rounded-full"
                      name="level"
                      id="umum"
                      type="checkbox"
                    />
                    <label htmlFor="umum">Umum</label>
                  </div>
                </div>
              </li>
              <li>
                <label className="font-semibold" htmlFor="">
                  Biaya pendaftaran lomba
                </label>
                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3">
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={() => setBiaya("Berbayar")}
                      className="rounded-full"
                      name="level"
                      id="berbayar"
                      type="radio"
                    />
                    <label htmlFor="berbayar">Berbayar</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={() => setBiaya("Gratis")}
                      className="rounded-full"
                      name="level"
                      id="gratis"
                      type="radio"
                    />
                    <label htmlFor="gratis">Gratis</label>
                  </div>
                </div>
              </li>
              <li>
                <label className="font-semibold" htmlFor="">
                  Deskripsi lomba
                </label>
                <Textarea
                  onChange={(e) => setDeskripsi(e.target.value || null)}
                  color="default"
                  className="mt-3 resize-none"
                  rows={20}
                  placeholder="Lomba Web Design telah dibuka loh ayo buruan dafar!"
                ></Textarea>
              </li>
              <li>
                <Button type="submit" color="primary" className="w-full">
                  Unggah
                </Button>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </>
  );
};

export default UnggahLomba;
