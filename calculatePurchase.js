//criando uma lista de compras
const buyList = [
  {
    name: "camisa",
    quantity: 3,
    price: 2000
  },
  {
    name: "shorts",
    quantity: 2,
    price: 2700
  },
  {
    name: "meia",
    quantity: 10,
    price: 500
  },
  {
    name: "sapato",
    quantity: 2,
    price: 7800
  },
  {
    name: "calça",
    quantity: 2,
    price: 4500
  }
]

//criando uma lista de emails
const emailsList = [
  "email1@stone.com",
  "email2@stone.com",
  "email3@stone.com",
  "email4@stone.com",
  "email5@stone.com",
  "email9@stone.com"
]

//criando uma função que soma o total de cada item
const totalPerItem = (buyList) => {
  //o [l] abaixo signfica lista, e o preço de cada item está sendo multiplicado pela quantidade de cada item
  const product = buyList.map(l => l.price * l.quantity)

  //aqui faço um reduce para somar os produtos das multiplicações feitas pelo map
  const total = product.reduce((value, itens) => value + itens, 0)
  return total
}

//criando uma função que divide o valor por pessoa e atribuindo o resto a pessoa na poisção 0 do array para evitar dizimas infinitas
const divide = (value, emails) => {
  const div = Math.floor(value / emails);

  const remainder = Number((value - emails * div).toFixed(2));

  const values = Array(emails).fill(div)

  values[0] += remainder
  return values;
}

//criando a função que gera o map
const createMap = (emails, total, map) => {
  const [first, second] = total;

  if (first === second) {
    emails.forEach((mail) => map.set(mail, first));
  }

  map.set(emails[0], first);
  for (let i = 1; i < emails.length; i++) {
    map.set(emails[i], second);
  }

  return map;
};

//chamando a função principal e passando a lista de compras e a lista de emails como parametro
calculatePurchase(buyList, emailsList)

function calculatePurchase(buyList, emailsList) {

  if (buyList.length == 0 || emailsList.some(emails => emails == "")) {
    console.log('Não há itens');
    return;
  }
   if (emailsList.length == 0 || emailsList.some(emails => emails == "")) {
     console.log('Não há emails');
     return;
   }

  const total = totalPerItem(buyList)

  const totalPerPerson = divide(total, emailsList.length)

  const map = new Map()

  const mapResult = createMap(emailsList, totalPerPerson, map)

  console.log(mapResult)
}