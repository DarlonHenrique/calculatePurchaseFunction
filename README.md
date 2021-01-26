# Desafio Elixir Stone
> Documentação da função CalculatePurchase

## Como criar a **buyList** 
> importante: criar com o exato nome de "buyList" 
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

## Como criar a **emailsList**
> importante: criar com o exato nome de "emailsList" 
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

## funcionameento do codigo

a **buyList** e a **emailsList** vai entrar na função principal chamada de **calculatePurchase**
em seguida a const **total** vai receber o return da function **totalPerItem** com a **buyList** como argumento, então a **calculatePurchase** faz uma verificação simples se a **buyList** ou **emailsList** tem alguma posição vazia, se sim a mensagem "Não há items" ou "Não há emails" será exibida no console, se estiver tudo ok o codigo vai continuar e a const **totalPerPerson** será criada e ela vai receber o resultado da function **divide** que vai receber a const **total** e **emailList**.length como argumentos, a const **map** recebe um objeto do tipo *Map*, logo abaixo a const **mapResult** será criada que receberá o return da function **createMap**, a function **createMap** por sua vez irá receber a **emailsList**, **totalPerPerson** e **map** como argumentos, então um *console.log(mapResult)* irá gerar um mapa como resultado, o mapa deverá ter de tamanho o mesmo numero de posições que a **emailsList** e o email na posição 0 vai receber o resto da divisão para que n falte nenhum centavo, o mapa tambem deverá ter os emails apontando pros valores.