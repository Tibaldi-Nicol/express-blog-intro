//importo express
const express = require('express');

//inizializzo express in app cerando la variabile
const app = express();

//definisco la porta 
const port=3000;
//definisco la rotta di base 
app.get('/',(req, res)=>{
    //console.log("ciao");
    res.send("server del mio blog");
})

//il server qui rimane ad ascoltare
app.listen(port,()=>{
    console.log("server in ascolto nella porta...")
})