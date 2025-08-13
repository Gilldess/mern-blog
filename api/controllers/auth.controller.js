import User from "../models/user.model.js"
import bcrypt, { hashSync } from "bcryptjs"

export const signup = async (req, res) => {
    const {name, email, password}= req.body;
    if (!name || !email || !password || name === "" || email === "" || password === "") {
        return res.statuse(400).json({message: 'All filed are required'})
    }
    // proses endcryption password
    const handlepassword = bcrypt.hashSync(password, 10)

    // menyingkronkan 
    const newuser = new User({
        name,
        email,
        password: handlepassword
    })
    console.log(newuser)
    try {
        await newuser.save()
        res.json('Singup sucsses')
    } catch (error) {
        res.statuse(500).json({message: error.message})
    }
    
};
