const express = require("express");
const app = express();

app.use(express.json());

const herois = [
  {
    id: 1,
    nome: "Mulher Maravilha",
    editora: "DC Comics",
    foto: "https://exemplo.com/mulher-maravilha.jpg",
    criador: "William Moulton Marston",
  },
  {
    id: 2,
    nome: "Superman",
    editora: "DC Comics",
    foto: "https://exemplo.com/superman.jpg",
    criador: "Jerry Siegel & Joe Shuster",
  },
  {
    id: 3,
    nome: "Batman",
    editora: "DC Comics",
    foto: "https://exemplo.com/batman.jpg",
    criador: "Bob Kane & Bill Finger",
  },
  {
    id: 4,
    nome: "Homem Aranha",
    editora: "Marvel Comics",
    foto: "https://exemplo.com/homem-aranha.jpg",
    criador: "Stan Lee & Steve Ditko",
  },
  {
    id: 5,
    nome: "Capitã Marvel",
    editora: "Marvel Comics",
    foto: "https://exemplo.com/capita-marvel.jpg",
    criador: "Roy Thomas & Gene Colan",
  },
  {
    id: 6,
    nome: "Homem de Ferro",
    editora: "Marvel Comics",
    foto: "https://exemplo.com/homem-de-ferro.jpg",
    criador: "Stan Lee, Larry Lieber, Don Heck & Jack Kirby",
  },
];

app.get("/herois", function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(herois);
});

app.get("/herois/:id", function (req, res) {
  const id = req.params.id;
  res.send(herois[id - 1]);
});

app.post("/herois", function (req, res) {
  let novoHeroi = req.body.nome;
  herois.push(novoHeroi);
  res.send(herois);
});

// app.get("/marvel", function (req, res) {
//   const heroisMarvel = [];
//                          0               1                 2
//   res.send(heroisMarvel);
// });

app.listen(3000);
