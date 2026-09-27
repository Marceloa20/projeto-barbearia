import app from "./app.js";

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("API do Projeto Barbearia funcionando");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
