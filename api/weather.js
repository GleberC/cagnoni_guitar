// api/weather.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { city } = req.query;

  if (!city) {
    return res.status(400).json({ error: 'Parâmetro "city" é obrigatório' });
  }

  const apiKey = process.env.API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Erro na resposta da API' });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error('Erro ao buscar clima:', err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}
