const express = require('express');
const fs=require('fs/promises')
const app = express();
app.use(express.json())
let users=[];
const readdata = async ()=>{
    users=JSON.parse(await fs.readFile('./user.json','utf8'))
}

const writedata = async()=>{
    await fs.writeFile('./user.json',JSON.stringify(users))
}
readdata();

app.get('/getdata',async(req,res)=>{
    res.json(users)
    
})

app.post('/users',(req,res)=>{
    // const {name,age}= req.body;
    // const newid=users.length>0?users[users.length-1].id+1:1;
    // const newuser={id:newid,name,age};
    // users.push(newuser);
    // writedata()
    // res.status(200).json
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})