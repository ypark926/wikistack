var express = require('express');
var morgan = require('morgan');
const app = express();
const layout = require("./views/layout");
const models = require('./models');

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(morgan("dev"));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send(layout("hello world"));
});

const PORT = 3000;

const init = async () => {
  await models.User.sync();
  await models.Page.sync();

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}

init();
