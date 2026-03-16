const express = require('express');
const app = express();

console.log("Hello");

app.use(express.json());

const books = [
    {id:1,title:"1984"},
    {id:2,title:"2020"}
];

app.get('/books',(req,res)=>{
    res.status(200).json({
        books:books
    });
});

app.post('/',(req,res)=>{
    const {id,title} = req.body;
    books.push({id:id,title:title});

    res.status(201).json({
        message:"New book posted"
    }); 
});

app.use((req,res) => {
    res.status(404).json({error:"Route not found"});
});

app.listen(3000,()=>{
    console.log("Server running at Port 3000");
})
