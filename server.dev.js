// ⚠️ OBS: Este servidor Express é usado apenas para testes locais.
// Em produção (Vercel), a API de clima foi migrada para uma função serverless em /api/weather.js


import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/weather", async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
    res.status(500).json({ error: "Erro ao buscar dados da API" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
