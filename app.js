var express = require('express');
var morgan = require('morgan');
const app = express();
const layout = require("./views/layout");
const models = require('./models');

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(morgan("dev"));
app.use(express.static(__dirname + '/public'));
app.use("/user", require("./routes/user"));
app.use("/wiki", require("./routes/wiki"));

app.get('/', function (req, res) {
  res.redirect("/wiki");;
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
