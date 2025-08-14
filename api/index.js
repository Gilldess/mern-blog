import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

// menyambungkan ke database di sini pake process.env.MONGO untuk ketika di pus di git hub orang lain tidak bisa mengakses database kita, file .env nya buat sendiri, dan di sini menggunakan then karena prosesnya asyinronus, dan saya membuat codisional jika berhasil dia akan mengconsole connected to database dan jika gagal dia akan mengconsole error
mongoose.connect(process.env.MONGO).then (()=> {
    console.log("Connected to database");
  }
).catch( (error) => {
  console.log(error);
})

// ini untuk mengeksekusi/mejalankan express dan di simpan di dalam variabel app, jadi kita tinggak panggil app secara otomatis express sudah berjalan
const app = express();
app.use(express.json())

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use("/api/user", userRoutes)
app.use("/api/user", authRoutes)

// Middleware untuk menangani error
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    sucsses: false,
    statusCode,
    message,
  })
})
