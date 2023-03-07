const express = require("express");

const app = express(); // nova express aplikacija

app.use(express.urlencoded({ extended: true })); //funkcija koja ni dozvoluva podatoci od klient da bidat iskoristeni vo server

app.get("/zdravo", (req, res) => {
  res.send("Zdravo svetu");
});

app.get("/zdravo/:ime", (req, res) => {
  res.send(req.params.ime); // req params.ime = :ime
});

app.get("/calculator/:op/:a/:b", (req, res) => {
  switch (req.params.op) {
    case "sobiranje":
      res.send(`${Number(req.params.a) + Number(req.params.b)}`);
    case "odzemanje":
      res.send(`${Number(req.params.a) - Number(req.params.b)}`);
    case "mnozenje":
      res.send(`${Number(req.params.a) * Number(req.params.b)}`);
    case "delenje":
      res.send(`${Number(req.params.a) / Number(req.params.b)}`);
    default:
      res.send("Nepoznat operator!");
  }
});

app.post("/calculator", (req, res) => {
  switch (req.body.operacija) {
    case "sobiranje":
      res.send(`${Number(req.body.a) + Number(req.body.b)}`);
    case "odzemanje":
      res.send(`${Number(req.body.a) - Number(req.body.b)}`);
    case "mnozenje":
      res.send(`${Number(req.body.a) * Number(req.body.b)}`);
    case "delenje":
      res.send(`${Number(req.body.a) / Number(req.body.b)}`);
    default:
      res.send("Nepoznat operator!");
  }
});
app.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log("Server started successfully on port 10000");
});
