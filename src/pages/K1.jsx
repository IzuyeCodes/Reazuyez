import React, { useState } from 'react';
import axios from "axios";
import Card from "../components/Elements/Cards.jsx";
import {IconReload} from "@tabler/icons-react";
import clsx from "clsx";

const githubRawUrl = "https://raw.githubusercontent.com/VideFrelan/motivasi/main/motivasi.txt";

function K1() {
    const [generatedText, setGeneratedText] = useState('');

    const onClick = () => {
        axios.get(githubRawUrl)
            .then(response => {
                if (response.status === 200) {
                    // Pisahkan teks berdasarkan baris
                    const lines = response.data.split('\n');

                    // Ambil teks acak dari baris-baris tersebut
                    const randomIndex = Math.floor(Math.random() * lines.length);
                    const randomText = lines[randomIndex];

                    // Perbarui state dengan teks yang diambil
                    setGeneratedText(randomText);
                } else {
                    console.error(`Gagal mengambil teks. Kode status: ${response.status}`);
                }
            })
            .catch(error => {
                console.error('Terjadi kesalahan:', error.message);
            });
    }
    return (
        <div className={"bg-slate-300 grid place-content-center min-h-screen"}
        style={{ backgroundImage: `url("https://ik.imagekit.io/izdevs/w-gallery/sunzet1.jpg?updatedAt=1695207108175")`, backgroundSize: 'cover' }}>
            <Card>
                <Card.Title>Kata Kata</Card.Title>
                <Card.Body>
                    <div><p className={"text-white font-mono text-xl italic text-center mx-auto max-w-md"}>{generatedText? `" ${generatedText}"` : "Click Button to Generate"}</p></div>
                </Card.Body>
            </Card>

            <div className={'grid gap-x-0 gap-y-4 grid-cols-1 justify-items-center justify-center pt-6'}>
                <Button className={"bg-sky-500 hover:bg-sky-700 mt-4"} onClick={onClick}>
                    <IconReload /> Generate
                </Button>
            </div>
        </div>

    );
}

function Button(props) {
  const { className, children, text, type = 'submit' } = props;

  return (
    <button
      {...props}
      type={type}
      className={clsx(
        className,
        'h-8 stroke-1 flex items-center gap-x-2 text-white px-4 py-2 rounded'
      )}
    >
      {text || children}
    </button>
  );
}

export default K1;