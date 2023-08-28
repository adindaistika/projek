"use client";

import Button from "@/components/Button";
import { useState } from "react";

const Daftarakun = () => {
  const [data, setData] = useState(null);
  const submit = (data) => {
    data.preventDefault();
    const mitraId = data.target[0].value;
    const nama = data.target[1].value;
    const email = data.target[2].value;
    const whatsapp = data.target[3].value;
    const alamat = data.target[4].value;
    const password = data.target[5].value;

    setData({
      mitraId,
      nama,
      email,
      whatsapp,
      alamat,
      password,
    });
  };

  return (
 <div className="md:flex">
    <section className="md:w-1/2 grid place-items-center bg-gradient-to-tr from-pink-300 to-blue-300 bg-sky-500 h-screen w-full">
    {data != null ? (
   <div className="bg-white p-8">
     <table cellPadding={5}>
              <tr>
                <td>ID Mitra</td>
                <td>: {data.mitraId}</td>
              </tr>
              <tr>
                <td>Nama</td>
                <td>: {data.nama}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>: {data.whatsapp}</td>
              </tr>
              <tr>
                <td>Alamat</td>
                <td>: {data.alamat}</td>
              </tr>
              <tr>
                <td>Password</td>
                <td>: {data.password}</td>
              </tr>
            </table>
          </div>
        ) : null}
      </section>
      <section className="p-5 md:w-1/2">
        <h1 className="font-bold mb-3 text-lg">DAFTAR AKUN</h1>
        <form action="" onSubmit={submit} method="post">
          <div className="md:flex gap-3 w-full">
          <label className="flex my-2 flex-col gap-1 text-xs w-full">
              <span className="text-xs">Id Mitra</span>
              <input
                className="p-3 w-full rounded-md outline-none border border-slate-900"
                type='text'
                required
                placeholder='Masukan Id Mitra'
                name='idmitra'
                id='IdMitra'
              />
            </label>
            <label className="flex my-2 flex-col gap-1 text-xs w-full">
              <span className="text-xs">Nama</span>
              <input
                className="p-3 w-full rounded-md outline-none border border-slate-900"
                type='text'
                required
                placeholder='Masukan Nama'
                name='nama'
                id='Nama'
              />
            </label>
          </div>
          <div className="md:flex gap-3 w-full">
            <label className="flex my-2 flex-col gap-1 text-xs w-full" >
              <span className="text-xs">Email</span>
              <input
                className="p-3 w-full rounded-md outline-none border border-slate-900"
                type='email'
                required
                placeholder='Masukan Email'
                name='email'
                id='Email'
              />
            </label>
            <label className="flex my-2 flex-col gap-1 text-xs w-full">
              <span className="text-xs">No Whatsapp</span>
              <input
                className="p-3 w-full rounded-md outline-none border border-slate-900"
                type='text'
                required
                placeholder='Masukan No Whatsapp'
                name='no whatsapp'
                id='No Whatsapp'
              />
            </label>
          </div>
          <label className="flex my-2 flex-col gap-1 text-xs w-full" >
            <span className="text-xs">Alamat Lengkap</span>
            <textarea
              className="p-3 w-full rounded-md outline-none border border-slate-900"
              name={"alamatlengkap"}
              required
              id={"alamatlengkap"}
              placeholder='Masukan Alamat lengkap'
              cols="30"
              rows="2"
            ></textarea>
          </label>
          <div className="md:flex gap-3 w-full">
          <label className="flex my-2 flex-col gap-1 text-xs w-full">
              <span className="text-xs">Password</span>
              <input
                className="p-3 w-full rounded-md outline-none border border-slate-900"
                type='password'
                required
                placeholder='Masukan password'
                name='password'
                id='password'
              />
            </label>
            <label className="flex my-2 flex-col gap-1 text-xs w-full">
              <span className="text-xs">Konfirmasi Password</span>
              <input
                className="p-3 w-full rounded-md outline-none border border-slate-900"
                type='password'
                required
                placeholder='Konfirmasi password'
                name='konfirmasipassword'
                id='konfirmasipassword'
              />
            </label>
          </div>
          <label
            className="text-xs flex items-center gap-2 my-2"
            htmlFor="check" >
            <input type="checkbox" name="check" id="check" />
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde asperiores ex voluptatem placeat quo consectetur nobis quam commodi odit ad! Distinctio libero veritatis temporibus, voluptas fuga ipsum quasi voluptatem dolorum.</span>
          </label>
          <Button>Buat Akun</Button>
          <p className="text-xs my-2">
            Sudah punya akun?{" "}
            <a className="font-semibold" href="#">
              Login disini
            </a>
          </p>
        </form>
      </section>
    </div>
  );
};

export default Daftarakun;