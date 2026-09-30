const producto = {
    nombre: "raton generico",
    precio: 19.99
};

const cliente = {
    nombreCliente: "Pablo",
    esPremium: false
};

const pedido = {...producto, ...cliente};

console.log(pedido);

const cliente2 = {
    nombreCliente: "Issac",
    esPremium: true
};

const pedido2 = {...producto, ...cliente2};

console.log(pedido2);