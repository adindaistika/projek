import React, { useState } from "react";
import Button from "@/components/Button";

const Table = () => {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState({
    idMitra: "",
    nama: "",
    email: "",
    whatsapp: "",
    alamat: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submit = (event) => {
    event.preventDefault();

    const newEntry = { ...inputData };


    setData([...data, newEntry]);

    setInputData({
      idMitra: "",
      nama: "",
      email: "",
      whatsapp: "",
      alamat: "",
      password: "",
    });
  };

  return (
    <div className="md:flex">
      <section className="md:w-1/2 grid place-items-center bg-gradient-to-tr from-pink-300 to-blue-300 bg-sky-500 h-screen w-full">
        <div className="bg-white p-8 w-full">
          <table className="border-collapse w-full">
            <thead>
              <tr>
                <th className="border p-2 text-black">ID Mitra</th>
                <th className="border p-2 text-black">Nama</th>
                <th className="border p-2 text-black">Email</th>
                <th className="border p-2 text-black">No Whatsapp</th>
                <th className="border p-2 text-black">Alamat</th>
                <th className="border p-2 text-black">Password</th>
              </tr>
            </thead>
            {data.length > 0 ? (
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="border p-2 text-black">{item.idMitra}</td>
                    <td className="border p-2 text-black">{item.nama}</td>
                    <td className="border p-2 text-black">{item.email}</td>
                    <td className="border p-2 text-black">{item.whatsapp}</td>
                    <td className="border p-2 text-black">{item.alamat}</td>
                    <td className="border p-2 text-black">{item.password}</td>
                  </tr>
                ))}
              </tbody>
            ) : null}
          </table>
        </div>

      </section>
      <section className="p-5 md:w-1/2 bg-white">
        <h1 className="font-bold mb-3 text-lg text-black">DAFTAR AKUN</h1>
        <form onSubmit={submit}>
          <div className="md:flex gap-3 w-full">
            <label className="flex my-2 flex-col gap-1 text-xs w-full">
              <span className="text-xs text-black">Id Mitra</span>
              <input
                className="p-3 w-full rounded-md outline-none border border-slate-900 text-black"
                type='text'
                required
                placeholder='Masukan Id Mitra'
                name='idMitra'
                id='IdMitra'
                onChange={handleInputChange}
              />
            </label>
            <label className="flex my-2 flex-col gap-1 text-xs w-full">
              <span className="text-xs text-black">Nama</span>
              <input
                className="p-3 w-full rounded-md outline-none border border-slate-900 text-black"
                type='text'
                required
                placeholder='Masukan Id Nama'
                name='nama'
                id='Nama'
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="md:flex gap-3 w-full">
            <label className="flex my-2 flex-col gap-1 text-xs w-full" >
              <span className="text-xs text-black">Email</span>
              <input
                className="p-3 w-full rounded-md outline-none border border-slate-900 text-black"
                type='email'
                required
                placeholder='Masukan Email'
                name='email'
                id='Email'
                onChange={handleInputChange}
              />
            </label>
            <label className="flex my-2 flex-col gap-1 text-xs w-full">
              <span className="text-xs text-black">No Whatsapp</span>
              <input
                className="p-3 w-full rounded-md outline-none border border-slate-900 text-black"
                type='text'
                required
                placeholder='Masukan No Whatsapp'
                name='whatsapp'
                id='No Whatsapp'
                onChange={handleInputChange}
              />
            </label>
          </div>
          <label className="flex my-2 flex-col gap-1 text-xs w-full" >
            <span className="text-xs text-black">Alamat Lengkap</span>
            <textarea
              className="p-3 w-full rounded-md outline-none border border-slate-900 text-black"
              name={"alamat"}
              required
              id={"alamatlengkap"}
              placeholder='Masukan Alamat lengkap'
              cols="30"
              rows="2"
              onChange={handleInputChange}
            ></textarea>
          </label>
          <div className="md:flex gap-3 w-full">
            <label className="flex my-2 flex-col gap-1 text-xs w-full">
              <span className="text-xs text-black">Password</span>
              <input
                className="p-3 w-full rounded-md outline-none border border-slate-900 text-black"
                type='password'
                required
                placeholder='Masukan password'
                name='password'
                id='password'
                onChange={handleInputChange}
              />
            </label>
            <label className="flex my-2 flex-col gap-1 text-xs w-full">
              <span className="text-xs text-black">Konfirmasi Password</span>
              <input
                className="p-3 w-full rounded-md outline-none border border-slate-900 text-black"
                type='password'
                required
                placeholder='Konfirmasi password'
                name='konfirmasipassword'
                id='konfirmasipassword'
                onChange={handleInputChange}
              />
            </label>
          </div>
          <label
            className="text-xs flex items-center gap-2 my-2 text-black"
            htmlFor="check" >
            <input type="checkbox" name="check" id="check" />
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde asperiores ex voluptatem placeat quo consectetur nobis quam commodi odit ad! Distinctio libero veritatis temporibus, voluptas fuga ipsum quasi voluptatem dolorum.</span>
          </label>
          <Button type="submit">Buat Akun</Button>
        </form>
      </section>
    </div>
  );
};

export default Table;