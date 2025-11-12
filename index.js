const express = require("express");
const app = express();

app.use(express.json());

const herois = [
  "Mulher Maravilha",
  "Superman",
  "Batman",
  "Homem Aranha",
  "Capitã Marvel",
  "Homem de Ferro",
];

app.get("/herois", function (req, res) {
  res.send(herois);
});

app.get("/herois/:id", function (req, res) {
  const id = req.params.id;
  res.send(herois[id - 1]);
});

app.post("/herois", function (req, res) {
  let novoHeroi = req.body.nome;
  herois.push(novoHeroi);
  res.send("ok");
});

// app.get("/marvel", function (req, res) {
//   const heroisMarvel = [];
//                          0               1                 2
//   res.send(heroisMarvel);
// });

app.listen(3000);
