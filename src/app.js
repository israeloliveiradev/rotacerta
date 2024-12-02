require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const entregaRoutes = require('./routes/entregaRoutes');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'))


app.use('/', entregaRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { error: 'Ocorreu um erro no servidor' });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});