const numeros = [1, 2, 3, 4, 5, 6];

const doblesNumeros = numeros.map((numero) => numero * 2);

console.log("Array original:", numeros);
console.log("Array de dobles:", doblesNumeros);

const paresNumeros = numeros.filter((numero) => numero % 2 === 0);

console.log("Array de pares:", paresNumeros);

console.log("\nNúmeros pares:");

for (const numero of paresNumeros) {
    console.log(numero);
}