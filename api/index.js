import express from 'express'; 
import mongoose from 'mongoose';
import dotenv from 'dotenv'; 
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
dotenv.config(); 

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('Connected to MongoDB!'); 
})
.catch((err) => {
        console.log(err); 
 }); 
const app= express(); 


app.use(express.json());

app.listen(3000,()=>{
    console.log("Server is running at port 3000!!!"); 
    }
);


// app.get('/test',(req,res)=>{
//     // res.send('Hello World!');
//     // }
//     // res.json({
//     //     message:"Hare Krishna!",
//     // })
// }
// );


//userRouter humne naam diya hai, user.router.js 
//se  router aa rha hai 
//isme pehle api/user route tk  jaaenge and phir 
//userRouter me jitni bhi routes hongi vo sb tk jaaenge 
app.use("/api/user", userRouter); 

app.use("/api/auth", authRouter);