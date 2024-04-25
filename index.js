const express = require('express');
//allowing cors to pass data on frontend
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors())
app.use(express.json())
const users = [
    {
        id:1,
        name:'Rofique',
        email:'rofiqueAlom@ymail.com'
    },
    {
        id:2,
        name:'salam',
        email:'salam@ymail.com'
    },
    {
        id:3,
        name:'barkot',
        email:'barkot@ymail.com'
    }
]

//api
app.get('/', (req, res) =>{
    res.send('User management server is running')
})

app.get('/users',(req,res)=>{
    res.send(users)
})

app.post('/users',(req,res)=>{
    console.log('post api hitting',req.body);
    users.push(req.body)
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})