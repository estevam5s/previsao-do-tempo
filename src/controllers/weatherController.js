const weatherService = require('../services/weatherService');

exports.getWeatherForecast = async (req, res) => {
    try {
        const city = req.params.city;
        const forecastData = await weatherService.getWeatherForecast(city);
        
        // Formatar a resposta
        const formattedResponse = {
            cidade: forecastData.results.city_name,
            temperatura: forecastData.results.temp + "°C",
            descrição: forecastData.results.description,
            umidade: forecastData.results.humidity + "%",
            velocidade_do_vento: forecastData.results.wind_speedy,
            nascer_do_sol: forecastData.results.sunrise,
            pôr_do_sol: forecastData.results.sunset,
            previsão: forecastData.results.forecast.map(f => ({
                data: f.date,
                máxima: f.max + "°C",
                mínima: f.min + "°C",
                descrição: f.description
            }))
        };

        res.json(formattedResponse);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
