let resultado;
function celsiusParaFahrenheit(celsius) {
    resultado = (celsius * 9/5) + 32
    return Number(resultado.toFixed(2));
}

function fahrenheitParaCelsius(fahrenheit) {
    resultado = (fahrenheit - 32) * 5/9
    return Number(resultado.toFixed(2));
}

module.exports = {
    celsiusParaFahrenheit,
    fahrenheitParaCelsius
};