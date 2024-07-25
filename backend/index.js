const express=require('express');
const mysql=require('mysql2');
const cors=require('cors');
const bodyparser=require('body-parser');

const app=express();


//setting up bodyparser
app.use(bodyparser.urlencoded({extended:false}));

app.use(express.json());

//setting up cors for cross port communication
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true
}));

//setting updatabase connection

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Trishala@99',
    database:'swiftdb'
});

connection.connect((err)=>{
    if(err){
        console.log(`Could not connect to database because of error: ${err}`);
    }

    console.log('Connected to database');
});


//Signup code

app.post('/signup', (req,res)=>{

const {email, password, num}=req.body;

const sql='insert into signup (email, password, num) values (?, ?, ?);';

connection.query(sql, [email, password, num], (err, results)=>{

if(err){
    console.log(`Could not insert data into table due to error ${err}`);
    res.status(500).send('Signup unsuccessful');
    return;
}

res.status(200).send('Signup Successful');
});

});


//login code

app.post('/login', (req,res)=>{

const {email, password}=req.body;

const sql='select * from signup where email=? and password=?;';

connection.query(sql, [email, password], (err,results)=>{

if(err){
    console.log(`Error ${err} occurred!`)
   res.status(500).json({success:false});
   return;
}
res.status(200).json({success:true});
});

});


//Testing server

app.use('/',(req,res)=>{

    res.send('Server is running');
});

//Setting up port

const Port=5000;

app.listen(Port, ()=>{
    console.log(`Server is running on port ${Port}`);
})