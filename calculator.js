const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function add(a, b) {
    return a + b;
  }
  
function subtract(a, b) {
    return a - b;
  }
  
function multiply(a, b) {
    return a * b;
  }
  
function divide(a, b) {
    return a / b;
  }
  
  app.put('/calculate', (req, res) => {
    const operation = req.body.operation;
    const number1 = Number(req.body.number1);
    const number2 = Number(req.body.number2);
  
    let result;
  
    switch (operation) {
      case 'add':
        result = add(number1, number2);
        break;
      case 'subtract':
        result = subtract(number1, number2);
        break;
      case 'multiply':
        result = multiply(number1, number2);
        break;
      case 'divide':
        result = divide(number1, number2);
        break;
      default:
        return res.status(400).send('Invalid operation');
    }
  
    res.send(`The result of ${operation} ${number1} and ${number2} is ${result}`);
  });
  
  
app.listen(port, () => {
  console.log(`Calculator API listening at http://localhost:${port}`);
});