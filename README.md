# Projeto Clima + Galeria

Este projeto é uma página web construída em HTML, CSS e JavaScript, com backend em Node.js e Express, focado em práticas modernas de desenvolvimento web. Ele oferece uma experiência visual com sliders e galeria de imagens, além de consultar o clima em tempo real via API.

## 🔧 Funcionalidades

- **Slider interativo** com imagens;
- **Galeria de fotos com modal** para visualização em destaque;
- **Consulta de clima atual** via API do OpenWeather, com backend Node.js para proteção da chave;
- **Design responsivo** com foco na experiência do usuário;
- Estrutura organizada com pastas para imagens, scripts e estilos.

## 🚀 Tecnologias utilizadas

### Frontend
- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API

### Backend
- Node.js
- Express
- dotenv
- node-fetch

## 🗂️ Estrutura do projeto

public/
├── assets/ # Imagens e ícones
├── css/ # Arquivos de estilo
├── js/ # Scripts de slider, modal e integração
├── index.html # Página principal
server.js # Servidor Express
.env # Variáveis de ambiente (não versionado)
.gitignore # Ignora node_modules e .env



## 🌦️ API de Clima

- **OpenWeather**: [https://openweathermap.org/api](https://openweathermap.org/api)  
  A API é acessada de forma segura via backend para proteger a chave pessoal de acesso.

## 🛠️ Como executar localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/GleberC/cagnoni_guitar


2. Instale as dependências:

npm install

3. Crie um arquivo .env na raiz do projeto com sua chave da API:

API_KEY=sua_chave_aqui

4. Inicie o servidor em modo de desenvolvimento:

npm run dev

5. Acesse o projeto em: http://localhost:3000

🌐 Deploy
O projeto está publicado na Vercel com deploy contínuo via GitHub.

[https://cagnoni-guitar.vercel.app/](https://cagnoni-guitar.vercel.app/)  



Feito por GleberC 🎸




