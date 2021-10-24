const express =require('express');
const cors=require('cors');
const app=express();

app.use(cors())
app.use(express.json());
const port = 5000;
app.get('/',(req,res)=>{
    res.send('WOW! hello Im learning node');
});
const users=[
    {id:0,name:'sabana',email:'sabana@gmail.com',phone:'0182345677'},
    {id:1,name:'sab',email:'sab@gmail.com',phone:'01744343422'},
    {id:2,name:'abir',email:'abir@gmail.com',phone:'0163443322'},
    {id:3,name:'karim',email:'karim@gmail.com',phone:'01854534322'},
    {id:4,name:'Amir',email:'Amir@gmail.com',phone:'0132122422322'},
]
app.get('/users',(req,res)=>{
    const search=req.query.search;
    if(search){
         const searchResult=users.filter(user=>user.name.toLowerCase().includes(search));
         res.send(searchResult);
    }
    else{
        res.send(users)
    }
    
})

app.post('/users',(req,res)=>{
    const newUser=req.body;
    newUser.id=users.length;
    users.push(newUser)
    console.log('hitting the post',req.body);
    // res.send('inside post')
    res.json(newUser)
})
app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    const user=users[id];
    res.send(user);
})
app.get('/fruits',(req,res)=>{
    res.send(['mango','apple','orange','banana'])
})
app.get('/fruits/mangoes/fazil',(req,res)=>{
    res.send('yummy yummy');
})
app.listen(port,()=>{
    console.log('listening to port',port);
})