# Desafio Elixir Stone
> Documentação da função CalculatePurchase

## Crie uma lista de compras conforme a estrutura a seguir:
```
const buyList = [
  {
    name : "camisa",
    quantity : 3,
    price : 2000
  },
  {
    name : "shorts",
    quantity : 2,
    price : 2700
  },
  {
    name : "meia",
    quantity : 10,
    price : 500
  }
]
```

## Crie uma lista de emails conforme a estrutura a seguir:
```
const emailsList = [
  "email1@stone.com",
  "email2@stone.com",
  "email3@stone.com",
  "email4@stone.com",
  "email5@stone.com",
  "email6@stone.com",
  "email7@stone.com",
  "email8@stone.com",
  "email9@stone.com",
]
```

## como eu testo a função

eu coloco o arquivo index.js dentro de uma pasta e abro no vscode atraves do terminal integrado do vscode eu executo *node index.js* o resultado vai ser gerado pelo *console.log(mapa)*

## mensagens de erro 

"Não há itens" - ocorre quando uma posição do array da Lista de compras não foi preenchida. Para resolver preencha todas as posições do array Lista de compras

"Não há Emails" - ocorre quando uma posição do array da Lista de emails não foi preenchida. Para resolver preencha todas as posições do array Lista de emails

## funcionamento da função

A função receberá uma lista de compras e uma lista de emails como parâmetros, em seguida irá verificar se existem campos vazios nos arrays recebidos como parâmetro, se todas as posiçoes dos arrays recebidos estiverem preenchidos, a função irá somar o total da lista de compras invocando a função externa **_totalPerItem_** e atribuindo o total em uma const, em seguida a função externa **_divide_** será requisitada e receberá como argumentos a const com o retorno da função **_totalPerItens_** e o atributo Length da Lista de emails, a função **_divide_** irá nos retornar um array com total da Lista de compras dividido pelo tamanho da Lista de emails, a função também vai gerar o resto da divisão e adicionar a posição 0 do array de retorno, em seguida um objeto vazio do tipo *Map* será criado e atribuido a uma const, então a função **_createMap_** será invocada que irá criar um mapa com o mesmo tamanho que a nossa Lista de emails, usando o email como chave apotando para o valor que será o resultado da função **_divide_**, então esse mapa será atribuido a uma const, essa const com o mapa atribuido vai ser inserida dentro de um **console.log()** e o resultado da função calculatePurchase será exibido no console.
