import React, { useState, useEffect } from "react";
import axios from "axios";

const MenfessBox = () => {
  const [menfessData, setMenfessData] = useState([]);

  useEffect(() => {
    fetchMenfessData();
  }, []);

  const fetchMenfessData = async () => {
    try {
      const response = await axios.get(
        "http://103.186.31.38:30100/api/getmenfessdata",
      );
      setMenfessData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  return (
    <div className="bg-slate-400 p-6 rounded-lg shadow-lg max-w-md mt-6">
      <h2 className="text-white font-bold font-poppins text-2xl mb-4 text-center">
        Menfess Data
      </h2>
      {menfessData.map((item) => (
        <div key={item._id} className="mb-4 bg-slate-200 rounded-lg p-4">
          <p className="font-bold">Nama: {item.nama}</p>
          <p className="font-bold">Pesan: {item.pesan}</p>
        </div>
      ))}
    </div>
  );
};

export default MenfessBox;
