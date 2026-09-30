const coche = {
    marca: "chevrolet",
    modelo: "Corvette c8",
    año: 2020,
    estaDisponible: false
};

console.table(coche);

const {marca, modelo} = coche;
console.log(marca, modelo);

coche.estaDisponible = true;

coche.color = "verde";

delete coche.año;

console.table(coche);