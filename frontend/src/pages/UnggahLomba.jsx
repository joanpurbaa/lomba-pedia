import { useState } from "react";
import { Button, Label, FileInput, TextInput, Textarea } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const UnggahLomba = () => {
  const navigate = useNavigate();

  const [nama, setNama] = useState();
  const [penyelenggara, setPenyelenggara] = useState();
  const [deadline, setDeadline] = useState(undefined);
  const [biaya, setBiaya] = useState(undefined);
  const [tingkat, setTingkat] = useState(undefined);
  const [kategori, setkategori] = useState([]);
  const [peserta, setPeserta] = useState([]);
  const [narahubung, setNarahubung] = useState();
  const [linkPendaftaran, setLinkPendaftaran] = useState();
  let [poster, setPoster] = useState(undefined);
  const [deskripsi, setDeskripsi] = useState();
  const [preview, setPreview] = useState();
  const [biayaPendaftaran, setBiayaPendaftaran] = useState(false);

  const handleKategoriChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setkategori((prevKategori) => [...prevKategori, value]);
    } else {
      setkategori((prevKategori) =>
        prevKategori.filter((item) => item !== value)
      );
    }
  };

  const handlePesertaChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setPeserta((prevPeserta) => [...prevPeserta, value]);
    } else {
      setPeserta((prevPeserta) => prevPeserta.filter((item) => item !== value));
    }
  };

  const loadPoster = (e) => {
    setPoster(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const uploadData = async (e) => {
    e.preventDefault();

    if (poster == undefined) {
      toast.error("Unggah poster lomba", {
        className: "text-zinc-700 font-semibold",
      });
    } else if (kategori.length == 0) {
      toast.error("Pilih kategori lomba", {
        className: "text-zinc-700 font-semibold",
      });
    } else if (deadline == undefined) {
      toast.error("Masukkan deadline lomba", {
        className: "text-zinc-700 font-semibold",
      });
    } else if (tingkat == undefined) {
      toast.error("Tentukan tingkat lomba", {
        className: "text-zinc-700 font-semibold",
      });
    } else if (peserta.length == 0) {
      toast.error("Tentukan peserta lomba", {
        className: "text-zinc-700 font-semibold",
      });
    } else if (biaya == undefined) {
      toast.error("Tentukan biaya lomba", {
        className: "text-zinc-700 font-semibold",
      });
    } else {
      const file = poster;
      let posterDataType = poster.type;
      let acceptedImageDataType = ["jpg", "jpeg", "png"];

      posterDataType = posterDataType.split("/")[1];

      if (!acceptedImageDataType.includes(posterDataType)) {
        toast.error("Jenis file poster yang diterima hanya jpg, jpeg dan png", {
          className: "text-zinc-700 font-semibold",
        });
      } else {
        const formData = new FormData();

        formData.append("nama", nama);
        formData.append("penyelenggara", penyelenggara);
        formData.append("kategori", JSON.stringify(kategori));
        formData.append("deadline", deadline);
        formData.append("linkPendaftaran", linkPendaftaran);
        formData.append("narahubung", narahubung);
        formData.append("tingkat", tingkat);
        formData.append("peserta", JSON.stringify(peserta));
        formData.append("pendaftaran", biaya);
        formData.append("poster", file);
        formData.append("deskripsi", deskripsi);
        formData.append("biayaPendaftaran", biayaPendaftaran);

        await axios.post(
          "https://lomba-pedia-api.vercel.app/tambahlomba",
          formData
        );

        navigate("/");
      }
    }
  };

  return (
    <>
      <ToastContainer />
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
          method="post"
          className="grid grid-cols-12 gap-x-5 gap-y-5 mt-5"
          onSubmit={uploadData}
          encType="multipart/form-data"
        >
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-y-5 w-full h-[70vh] lg:h-[89vh]">
            <h2 className="text-xl font-semibold">Unggah poster lomba</h2>
            <Label
              htmlFor="dropzone-file"
              className="flex flex-col justify-center items-center h-full w-full cursor-pointer rounded-lg border-2 border-dashed border-gray-300 hover:bg-zinc-800"
            >
              {preview ? (
                <img
                  className="h-full lg:h-[60%]"
                  src={preview}
                  alt="Preview"
                />
              ) : (
                <>
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
                </>
              )}
              <FileInput
                onChange={loadPoster}
                id="dropzone-file"
                className="hidden"
                name="poster"
              />
            </Label>
          </div>
          <div className="col-span-12 lg:col-span-8 xl:col-span-5 mt-10">
            <h2 className="text-xl font-semibold">Isi deskripsi lomba</h2>
            <ul className="mt-3 flex flex-col gap-y-8">
              <li>
                <label className="font-semibold" htmlFor="">
                  Nama lomba
                </label>
                <TextInput
                  onChange={(e) => setNama(e.target.value)}
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
                  onChange={(e) => setPenyelenggara(e.target.value)}
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
                      onChange={handleKategoriChange}
                      value="Design"
                      className="rounded-full"
                      name="level"
                      id="design"
                      type="checkbox"
                    />
                    <label htmlFor="design">Design</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={handleKategoriChange}
                      value="Videography"
                      className="rounded-full"
                      name="level"
                      id="videography"
                      type="checkbox"
                    />
                    <label htmlFor="videography">Videography</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={handleKategoriChange}
                      value="Photography"
                      className="rounded-full"
                      name="level"
                      id="photography"
                      type="checkbox"
                    />
                    <label htmlFor="photography">Photography</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={handleKategoriChange}
                      value="UI/UX"
                      className="rounded-full"
                      name="level"
                      id="ui/ux"
                      type="checkbox"
                    />
                    <label htmlFor="ui/ux">UI/UX</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={handleKategoriChange}
                      value="IT & Technology"
                      className="rounded-full"
                      name="level"
                      id="itTechnology"
                      type="checkbox"
                    />
                    <label htmlFor="itTechnology">IT & Technology</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={handleKategoriChange}
                      value="Esai"
                      className="rounded-full"
                      name="level"
                      id="esai"
                      type="checkbox"
                    />
                    <label htmlFor="esai">Esai</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={handleKategoriChange}
                      value="Puisi"
                      className="rounded-full"
                      name="level"
                      id="puisi"
                      type="checkbox"
                    />
                    <label htmlFor="puisi">Puisi</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={handleKategoriChange}
                      value="Marketing"
                      className="rounded-full"
                      name="level"
                      id="marketing"
                      type="checkbox"
                    />
                    <label htmlFor="marketing">Marketing</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={handleKategoriChange}
                      value="Olahraga"
                      className="rounded-full"
                      name="level"
                      id="olahraga"
                      type="checkbox"
                    />
                    <label htmlFor="olahraga">Olahraga</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={handleKategoriChange}
                      value="Kesehatan"
                      className="rounded-full"
                      name="level"
                      id="kesehatan"
                      type="checkbox"
                    />
                    <label htmlFor="kesehatan">Kesehatan</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={handleKategoriChange}
                      value="Matematika"
                      className="rounded-full"
                      name="level"
                      id="matematika"
                      type="checkbox"
                    />
                    <label htmlFor="matematika">Matematika</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={handleKategoriChange}
                      value="Musik"
                      className="rounded-full"
                      name="level"
                      id="musik"
                      type="checkbox"
                    />
                    <label htmlFor="musik">Musik</label>
                  </div>
                </div>
              </li>
              <li className="flex flex-col items-start">
                <label className="font-semibold" htmlFor="">
                  Deadline
                </label>
                <input
                  className="text-zinc-900 mt-3 border-0 focus:ring-0 rounded-md"
                  type="date"
                  onChange={(e) => setDeadline(e.target.value)}
                />
              </li>
              <li>
                <label className="font-semibold" htmlFor="">
                  Link pendaftaran lomba
                </label>
                <TextInput
                  onChange={(e) => setLinkPendaftaran(e.target.value)}
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
                  onChange={(e) => setNarahubung(e.target.value)}
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
                      onChange={handlePesertaChange}
                      value="Mahasiswa"
                      className="rounded-full"
                      name="level"
                      id="mahasiswa"
                      type="checkbox"
                    />
                    <label htmlFor="mahasiswa">Mahasiswa</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={handlePesertaChange}
                      value="SMA Sederajat"
                      className="rounded-full"
                      name="level"
                      id="smaSederajat"
                      type="checkbox"
                    />
                    <label htmlFor="smaSederajat">SMA Sederajat</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={handlePesertaChange}
                      value="SMP"
                      className="rounded-full"
                      name="level"
                      id="smp"
                      type="checkbox"
                    />
                    <label htmlFor="smp">SMP</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={handlePesertaChange}
                      value="SD"
                      className="rounded-full"
                      name="level"
                      id="sd"
                      type="checkbox"
                    />
                    <label htmlFor="sd">SD</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={handlePesertaChange}
                      value="Umum"
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
                      onChange={() => {
                        setBiaya("Berbayar");
                        setBiayaPendaftaran(true);
                      }}
                      className="rounded-full"
                      name="level"
                      id="berbayar"
                      type="radio"
                    />
                    <label htmlFor="berbayar">Berbayar</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      onChange={() => {
                        setBiaya("Gratis");
                        setBiayaPendaftaran(false);
                      }}
                      className="rounded-full"
                      name="level"
                      id="gratis"
                      type="radio"
                    />
                    <label htmlFor="gratis">Gratis</label>
                  </div>
                </div>
              </li>
              {biayaPendaftaran ? (
                <li>
                  <label className="font-semibold" htmlFor="">
                    Biaya pendaftaran
                  </label>
                  <p className="text-gray-400 text-sm">
                    Masukkan nominal *contoh : Rp50.000
                  </p>
                  <TextInput
                    onChange={(e) =>
                      setBiayaPendaftaran(e.target.value)
                    }
                    color="default"
                    className="mt-3"
                    placeholder="Rp50.000"
                    required
                  ></TextInput>
                </li>
              ) : (
                ""
              )}
              <li>
                <label className="font-semibold" htmlFor="">
                  Deskripsi lomba
                </label>
                <Textarea
                  onChange={(e) => setDeskripsi(e.target.value)}
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
