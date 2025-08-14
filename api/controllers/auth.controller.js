import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    const {name, email, password}= req.body;
    if (!name || !email || !password || name === "" || email === "" || password === "") {
       next(errorHandler(400, "Name, email, and password are required.")); // jika ada yang kosong maka akan mengembalikan error
    }
    // proses endcryption password
    const handlepassword = bcrypt.hashSync(password, 10)

    // menyingkronkan 
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