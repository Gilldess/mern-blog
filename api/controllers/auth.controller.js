import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken"

export const signup = async (req, res, next) => {
    const {name, email, password}= req.body;
    if (!name || !email || !password || name === "" || email === "" || password === "") {
       next(errorHandler(400, "Name, email, and password are required.")); // jika ada yang kosong maka akan mengembalikan error
    }
    // proses endcryption password
    const handlepassword = bcrypt.hashSync(password, 10)

    // menyingkronkan antara module user model untuk di kirim ke back end, disini karena namanya sama maka di panggil langsung atau satu saja namu karena passwor nya di enkripsi dan nama variabelnya beda dengan module backend jadi nya di panggil lagi jadinya "password: handlepassword" password nya berasal dari moduel backend sedangkan handlepassword nya berasal dari inputan di frontend atau dari user
    const newuser = new User({
        name,
        email,
        password: handlepassword
    })

    try {
        await newuser.save()
        res.json('Singup sucsses')
    } catch (error) {
        next(error)
    }
    
};

// code login. pake async karena ambil data dari backend dan perlu prosses ngambil datanya. tahapan pertama buat req body untuk pengguna memasukan data loginnya, setelah itu buat codison jika user mengisi input nya kosong maka akan mengembalikan error,tahap selanjutnya jika pengguna sudah memasukan data kita mulai pengecekan atau penyingkronan data dengan data backend, jika tidak ada yg sama maka mengmbalikan error. kemudia sama juga dengan passowrd bedanya dia haru menggunakan bcrypt.compareSync untuk pengecekan passwordnya. kemudian jwt.sign ini untuk penggembalian cookie.
export const signin = async (req, res, next) => {
    // perhatikan kurung req.body dia kurung kurawal/kurung bengkok
   const {email, password} = req.body;
   if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "All fileds are required.")); // jika ada inputan dari pengguna yang kosong maka akan mengembalikan error
 }
 try {
    // proses pensingkronan inputan user dengan backend User itu wadah data backend, kemudian findOne itu metod untuk mencari data yg sama, dan email ini berasal dari req.body yg berasal dari input pengguna.
    const validUser = await User.findOne({email})
    if (!validUser) {
        return next(errorHandler(404, "Email not found."));
    }
    const validPassword = bcrypt.compareSync(password, validUser.password)
    if (!validPassword) {
        return next(errorHandler(404, "Password not found."));
    }

    const token = jwt.sign(
        // _id samakan dengan penulisan nama variabel di backend
        {id: validUser._id}, process.env.JWT_SECRET);
        // pemisiah passwor agar password tidak di tampilkan di pengguna
        const {password: pass, ...rest} = validUser._doc
        res
        .status(200)
        .cookie("access_token", token, {httpOnly: true}).json(rest)

 } catch (error){
    next(error)
 }
};