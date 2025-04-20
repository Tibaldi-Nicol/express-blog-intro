//importo express 
const express = require('express');
const path = require('path');

//inizializzo express in app cerando la variabile 
const app = express();

//definisco la porta  
const port=3000;

// Configurazione per immagini statiche
app.use('/images', express.static(path.join(__dirname, 'images')));

// Array dei post del blog
const posts = [
  {
    id: 1,
    titolo: "Torta paradiso",
    contenuto: "Dolce soffice e semplice",
    immagine: "/images/torta-paradiso.jpg",
    tags: ["dolce", "colazione"]
  },
  {
    id: 2,
    titolo: "Crackers rosa",
    contenuto: "Antipasto colorato con barbabietola",
    immagine: "/images/crackers-barbabietola.jpg",
    tags: ["antipasto", "aperitivo"]
  },
  {
    id: 3,
    titolo: "Dolcetti fritti",
    contenuto: "Bocconcini dolci fritti con zucchero",
    immagine: "/images/bocconcini-fritti.jpg",
    tags: ["dolce", "merenda"]
  },
  {
    id: 4,
    titolo: "Pasta rosa",
    contenuto: "Pasta colorata alla barbabietola",
    immagine: "/images/pasta-barbabietola.jpg",
    tags: ["primo", "vegetariano"]
  },
  {
    id: 5,
    titolo: "Torta al cioccolato",
    contenuto: "Torta al cioccolato con arancia",
    immagine: "/images/torta-cioccolato.jpg",
    tags: ["dolce", "dessert"]
  }
];

//definisco la rotta di base  
app.get('/',(req, res)=>{
    //console.log("ciao");
    res.send("server del mio blog");
});



//il server qui rimane ad ascoltare 
app.listen(port,()=>{
    console.log("server in ascolto nella porta...")
});