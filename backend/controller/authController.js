const user = require("express");

exports.registerUser = async () => {
    try{
        const {name, email, password} = req.body;

        const existingUser = await user.findOne({email});
        if(!existingUser){
            res.status(401).json({msg:"User already exist"});
        }
        

        const hashedPassword = await bcrypt.hash(password,10)
        

        const newUser = new user({email, password:hashedPassword});
        await newUser.save();
        res.status(201).json({msg:"New user registered"})
    }catch(error){
        res.status(500).json({msg:"server error", error:message})
    }
}