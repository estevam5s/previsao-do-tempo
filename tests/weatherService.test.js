const weatherService = require('../src/services/weatherService');

describe('Testes do Serviço de Previsão do Tempo', () => {
    test('Deve retornar dados de previsão do tempo para uma cidade válida', async () => {
        const dados = await weatherService.getWeatherForecast('São Paulo');
        expect(dados).toBeDefined();
        expect(dados.results.city_name).toBe('São Paulo');
        // Adicione mais verificações conforme necessário
        console.log(dados); // Para inspecionar a resposta completa
    });
});
