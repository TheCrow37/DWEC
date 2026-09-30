function retirarDinero(saldo, cantidadRetirar, tieneTarjetaCredito) {
    if (saldo >= cantidadRetirar) {
        let nuevoSaldo = saldo - cantidadRetirar;
        console.log("Retiro exitoso. Saldo restante: " + nuevoSaldo);
    } else if (tieneTarjetaCredito) {
        console.log("Saldo insuficiente, pagando con tarjeta de crédito");
    } else {
        console.log("Saldo insuficiente");
    }
}

// Ejemplos
retirarDinero(100, 50, false);
// Retiro exitoso. Saldo restante: 50

retirarDinero(100, 150, true);
// Saldo insuficiente, pagando con tarjeta de crédito

retirarDinero(100, 150, false);
// Saldo insuficiente
