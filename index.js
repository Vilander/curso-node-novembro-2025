const express = require("express");
const app = express();

app.use(express.json());

const herois = [
  {
    id: 1,
    nome: "Mulher Maravilha",
    editora: "DC Comics",
    foto: "https://upload.wikimedia.org/wikipedia/pt/f/f6/Mulher-Maravilha.jpg",
    criador: "William Moulton Marston",
  },
  {
    id: 2,
    nome: "Superman",
    editora: "DC Comics",
    foto: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png",
    criador: "Jerry Siegel & Joe Shuster",
  },
  {
    id: 3,
    nome: "Batman",
    editora: "DC Comics",
    foto: "https://static.dc.com/2025-02/Batman_1_preview_2.jpg",
    criador: "Bob Kane & Bill Finger",
  },
  {
    id: 4,
    nome: "Homem Aranha",
    editora: "Marvel Comics",
    foto: "https://upload.wikimedia.org/wikipedia/pt/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
    criador: "Stan Lee & Steve Ditko",
  },
  {
    id: 5,
    nome: "Capitã Marvel",
    editora: "Marvel Comics",
    foto: "https://upload.wikimedia.org/wikipedia/pt/0/02/Carol_Danvers_-_%28evolution%29.jpg",
    criador: "Roy Thomas & Gene Colan",
  },
  {
    id: 6,
    nome: "Homem de Ferro",
    editora: "Marvel Comics",
    foto: "https://upload.wikimedia.org/wikipedia/pt/5/59/Iron_Man_%282020%29.png",
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
