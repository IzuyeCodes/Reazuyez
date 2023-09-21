import clsx from "clsx";
import React, { useState, useEffect } from "react";
import Card from "../components/Elements/Cards.jsx";
import axios from "axios";
import MenfessBox from "../components/MenfessBox.jsx";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Fess() {
  useEffect(() => {
    document.title = "Fess"; // Mengatur judul halaman
  }, []);

  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");

  const handleKirim = async (e) => {
    e.preventDefault(); // Menghentikan perilaku default form

    try {
      const response = await axios.post(
        "http://103.186.31.38:30100/api/savedatamenfess",
        { nama, pesan },
      );
      console.log(response);

      if (response.status === 200) {
        // Tampilkan notifikasi jika berhasil
        alert("Data berhasil terkirim.");
      } else {
        // Tampilkan pesan kesalahan jika tidak berhasil
        alert("Terjadi kesalahan saat mengirim data.");
      }
    } catch (error) {
      alert("Terjadi kesalahan: " + error.message);
    }
  };

  // Notifiy
  const notify = () => toast("Terkirim!");

  const headStyle = {
    fontFamily: "Borel",
  };

  return (
    <div className="bg-slate-950 min-h-screen flex flex-col items-center justify-center">
      <div
        className="text-white font-bold font-poppins text-4xl tracking-wide subpixel-antialiased mb-6 mt-10"
        style={headStyle}
      >
        Menfess
      </div>

      <div className="container mx-auto bg-slate-400 p-6 rounded-lg shadow-lg max-w-md">
        <form
          onSubmit={handleKirim}
          className="flex flex-col mx-auto max-w-md font-poppins"
        >
          <div className="mb-4 pt-2">
            <p className={"font-bold subpixel-antialiased"}>Nama :</p>
            <input
              type="text"
              id="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="border rounded p-2 w-full bg-slate-300"
            />
          </div>
          <div className="mb-4 pt-2">
            <p className={"font-bold subpixel-antialiased"}>Pesan :</p>
            <textarea
              id="pesan"
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              className="border rounded p-2 h-32 w-full bg-slate-300"
            ></textarea>
          </div>
          <button
            onClick={notify}
            type="submit"
            className="bg-blue-500 text-white py-2 rounded w-full"
          >
            Kirim
          </button>
        </form>
      </div>

      <div className="container mx-auto bg-slate-400 p-6 rounded-lg shadow-lg max-w-md mt-8">
        <MenfessBox />
      </div>
    </div>
  );
}

export default Fess;
