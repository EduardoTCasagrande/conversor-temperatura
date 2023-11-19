const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const servico = require('./servico/servico')
const PORT = 8000


app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));





// ...

app.get('/', (req, res) => {
    let dataAtual = new Date();
    res.render('home', { data: dataAtual });
});

app.post('/conversor', (req, res) => {
    const unidadeSelecionada = req.body.conversor;
    const valor = parseFloat(req.body.valor);

    console.log('Unidade:', unidadeSelecionada);
    console.log('Valor:', valor);

    let resultado;

    if (unidadeSelecionada === 'celsiusToFahrenheit') {
        resultado = servico.celsiusParaFahrenheit(valor);
    } else if (unidadeSelecionada === 'fahrenheitToCelsius') {
        resultado = servico.fahrenheitParaCelsius(valor);
    }

    // Retorna o resultado como JSON
    res.render('home', { resultado });
});



app.listen(PORT, () => {
    let data = new Date();
    console.log(`Servidor iniciado na porta: ${PORT} no dia ${data}`)
});