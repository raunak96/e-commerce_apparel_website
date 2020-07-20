const express=require('express');
const app=express(); 
const cors=require('cors');
const bodyParser = require('body-parser');
const path= require('path');

if(process.env.NODE_ENV !== 'production') 
    require('dotenv').config();

const stripe=require('stripe')(process.env.STRIPE_SECRET_KEY);

const PORT=process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

if(process.env.NODE_ENV== 'production'){
    // basically it tells express app to serve all static files from curr_dir/client/build (Our react app in production is present in build folder after it is built an then this folder is deployed )
    app.use(express.static(path.join(__dirname,'client/build'))); 

    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"client/build","index.html"));  // if we get a GET request at any API(*) then send index.html file which contains our React Code(root Component)
    });
}

app.post("/payment",(req,res)=>{
    const body={
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'inr'
    };
    stripe.charges.create(body,(err,stripeRes)=>{
        if(err)
            res.status(500).send({error:err});
        else
            res.status(200).send({success:stripeRes});
    })
})

app.listen(PORT,error=>{
    if(error)
        throw error;
    console.log(`Server is starting on port ${PORT}`);
})