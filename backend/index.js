import express, { response, urlencoded } from "express";
import cors from 'cors'
import connection from "./db/connection.js";
import user from "./models/userSchema.js";
import bcrypt from 'bcrypt'




const app = express()
app.use(express.json());
app.use(cors({origin:"http://localhost:3000"}));
app.use(express.urlencoded({extended:true}))


app.post("/login",async(req,res)=>{
    const username = req.body.username
    const password = req.body.password

    const finduser = await user.findOne({username})
    
     if(finduser){
        const matchpassword = await bcrypt.compare(password, finduser.password)

        if(matchpassword){
            res.status(200).send("varified user")
        }
        else{
            res.status(201).send("wrong password")
        }

    }else{
        res.status(204).send('wrong author')
    }
    
    // console.log(username,password)
    // console.log('hello')
    // res.status(200).send('sb okkkkk')
})


app.post("/register",async(req,res)=>{
    console.log('hello')
    const { name, email, number, username, password } =await req.body;

    const hashedPassword = await bcrypt.hash(password , 10) ;
    const newUser = new user({
        name,
        email,
        number,
        username,
        password: hashedPassword
    })

  const userdata =  await newUser.save()
    console.log(userdata)
    res.status(200).end('Well Done')
})


connection.then(()=>{
    app.listen(8080, ()=> console.log('server is runing on 8080'))
})
