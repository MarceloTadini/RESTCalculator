# Calculadora REST em Node

Essa é uma calculadora REST em Node com as operações de soma, subtração, multiplicação e divisão.

## Instalação

Para instalar as dependências, execute o seguinte comando no terminal:
```
npm install

```
## Como utilizar

Para iniciar a calculadora,entre na pasta raíz es execute o seguinte comando no terminal:

```
node calculator.js

```

*A calculadora irá escutar na porta 3000. Você pode enviar solicitações PUT para a calculadora com o nome da operação e os dois números que serão usados na operação. As operações disponíveis são: add (soma), subtract (subtração), multiply (multiplicação) e divide (divisão).

### Exemplo

Para somar os números 2 e 3, envie uma solicitação PUT para `http://localhost:3000/calculate` com o seguinte corpo:

```json
{
  "operation": "add",
  "number1": 2,
  "number2": 3
}

The result of add 2 and 3 is 5
