// Este es un ejercicio de una funcion recursiva
// para convertir un numero a un numero Binario

function convertir(num) {
  if (num < 0) return null;
  if (num === 1 || num === 0) return (num % 2) + "";
  return convertir(Math.floor(num / 2)) + (num % 2);
}
console.log(convertir(45));

function recursion(dato) {
  if (dato < 0) return null;
  console.log(dato);
  return recursion(dato - 1) + 4;
}

console.log(recursion(5));

function numeroPrueba(num) {
  if (num === 10) return num + "";
  return numeroPrueba(num + 2) + 1;
}

console.log(numeroPrueba(2));

let nombres = ["juan", "maria", "pedro"];
nombres.edad = 10;

for (let index in nombres) {
  console.log(index);
}

console.log(typeof nombres);

let objetos = {
  nombre: "Luis",
  edad: 15,
  data: "Hola aa ",
};
let nuevoArray = [];
for (let item in objetos) {
  nuevoArray.push(item);
}

console.log(nuevoArray);

console.log(convertir(45));

function numeroPrueba2(num) {
  if (num === 10) return num + "";
  return numeroPrueba(num + 1) + 1;
}

console.log(numeroPrueba2(5));
