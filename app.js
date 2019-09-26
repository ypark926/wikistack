var express = require('express');
var morgan = require('morgan');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(morgan("dev"));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send("hello world");
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
})
