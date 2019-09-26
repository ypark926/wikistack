var express = require('express');
var morgan = require('morgan');
const app = express();
const layout = require("./views/layout")

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(morgan("dev"));
app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
  res.send(layout("hello world"));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
})
