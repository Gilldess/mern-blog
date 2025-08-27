import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// sudah selesai signup

export default function SingUp() {
  // foramData disini untuk menampung dan menyusun menjadi json karena isinya foramData berisi json, datanya dari handleData yg mana hanleData data nya dari onchange yg di isi User. lakah berikutnya setelah selsai merubah data jadi json kita buat handleSubmit. setelah itu buat errorMessage dan loading
  const [foramData, setFormData] = useState({});
  // ini untuk berpindah halaman jika proses signup nya berhasil
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  // sampe loading masih ada yg error ada yg ga berjalan massage error nya ga mau muncul

  //  handleData disini untuk mengambil data dari handelchange pd input, nama handleData bisa saja di rubah handleChange tetapi kmu haru samakan pd froam onchange kamu contohnya onchange={handlechange}, nah di sini handledata menangkap inputan onchange namu bentuk nya masih belum berupa json sehingga kita membuat [froamData, setFormData]= useState({}); dan sini isi dari froamData adalah json sehingga nanti kita sambungkan ke handelData agar datanya berubah menjadi json
  const handleData = (e) => {
    //nah disini kita pasang peribahnya yaitu setFormData disini kita tambahkan target.id untuk mengambil id nya dan target.value untuk mengambil value nya. dot trim() disini untuk menghapus spasi
    setFormData({ ...foramData, [e.target.id]: e.target.value.trim() });
  };

  // handleSubmit disini untuk mengirim data json ke backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    //  disni pengecekan jika ada yg kosong maka akan mengembalikan error
    if (!foramData.name || !foramData.email || !foramData.password) {
      return setErrorMessage("All fill out all required.");
    }
    // han ini kita menyambungkan atau mensingkronkan request kita ke backend
    try {
      //  disini setLoading true karena ketika mengirim data kita buat ada efek loadingnya
      setLoading(true);
      setErrorMessage(null);
      //  fetch disini path yg sama seperti yg kita buat di backend, namu di sini localhost nya berbeda frontend dan backend. sehingga di vite.config.js kita menambahkan proxy. namu di sini bisa saja kita menulis langsung di bawah sini localhost:3000/api/user/signup.
      const res = await fetch("/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(foramData),
      });
      const data = await res.json();
      // jika di sini pengriman data nya error maka dia akan mentriger setErrorMessage dan menjalankan data.message.success di sini berasal dari backend
      if (data.success === false) {
        // data.message ini juga berasal dari backend yg kita buat
        return setErrorMessage(data.message);
      }
      // nah disini kenapa setLoading false karena setelah berhasil menjalankan fungsi" di atas maka oding nya berhenti
      setLoading(false);
      //  di bawah loading ketika loading selesai atau false maka dia akan berpindah ke halaman login
      if (res.ok) {
        navigate("/signin");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen mt-20 ">
      <div className="flex gap-5 p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="text-4xl font-bold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-sky-400 via-blue-500 to-yellow-500 rounded-lg text-white">
              Shope
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            molestias quos autem similique rerum repellendus hic perspiciatis!
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <Label>Your name</Label>
              <TextInput
                type="text"
                placeholder="Username"
                id="name"
                onChange={handleData}
              />
            </div>
            <div>
              <Label>Your email</Label>
              <TextInput
                type="email"
                placeholder="exsample@gmail.com"
                id="email"
                onChange={handleData}
              />
            </div>
            <div>
              <Label>Your password</Label>
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleData}
              />
            </div>
            <Button
              className="bg-gradient-to-r from-pink-500 via-purple-400 to-sky-500 hover:text-black"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/signin" className="text-blue-500">
              Sign In
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
