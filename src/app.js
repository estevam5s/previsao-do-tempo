const express = require('express');
const weatherRoutes = require('./routes/weatherRoutes');
const logger = require('./utils/logger');

const app = express();

app.use(express.json());

// Rota da API de Clima
app.use('/api/weather', weatherRoutes);

// Porta do Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    logger.info(`Server running on port ${PORT}`);
});
