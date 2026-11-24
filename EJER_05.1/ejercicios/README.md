# EJER_05.1 · Soluciones

Ejecutar desde esta carpeta con Node.js 22 o superior, por ejemplo `node ej01.js`. El `package.json` activa módulos ES. Los tiempos del ejercicio 10 pueden variar ligeramente.

## Ejercicio 1 · Predice la salida

**Predicción sin `total`:**

```text
Inicio
Dentro del try 1
Capturado: ReferenceError
Limpieza
Fin
```

La línea `Dentro del try 2` no se ejecuta porque leer `total` produce un `ReferenceError`; el control salta al `catch`. `finally` se ejecuta al salir del `try/catch`, y por eso después también aparece `Fin`.

En `ej01.js` la primera demostración conserva el caso sin declarar `total`. La segunda declara `const total = 0` después de esa demostración y antes del segundo `try`, que imprime:

```text
--- Con total declarado ---
Dentro del try 1
0
Dentro del try 2
Limpieza
Fin
```

Sí: `finally` sigue ejecutándose aunque no haya error.

## Ejercicio 2 · Dividir con seguridad

La función lanza un `RangeError` para divisor cero; el `catch` informa del error y `finally` termina cada operación. Salida:

```text
10 / 2 = 5
Operación terminada
RangeError: No se puede dividir entre cero
Operación terminada
7 / 4 = 1.75
Operación terminada
```

## Ejercicio 3 · Detective de JSON

Son válidos los textos 1 y 4. El 2 usa comillas simples (JSON exige comillas dobles); el 3 tiene una coma final; el 5 no pone el nombre de la propiedad entre comillas dobles; el 6 está incompleto y le falta cerrar el objeto. `ej03.js` muestra el resultado de `JSON.parse` y prueba cuatro versiones corregidas.

## Ejercicio 4 · Ida y vuelta

`ej04.js` muestra el JSON compacto, el formato indentado, el filtrado a `nombre` y `edad`, y el resultado de parsearlo de vuelta. La primera salida es:

```json
{"nombre":"Luna","edad":3,"vacunada":true,"vacunas":["rabia","moquillo"],"fechaAlta":"2026-09-01T10:00:00.000Z"}
```

`apodo` no aparece porque su valor es `undefined`, y JSON no representa ese valor para propiedades de objetos. `Date` se convierte a una cadena ISO al serializar; `JSON.parse` devuelve esa cadena y no reconstruye automáticamente una instancia `Date`. Por eso `typeof vuelta.fechaAlta` da `string`.

## Ejercicio 5 · Validador de alumnos

El validador controla errores de sintaxis, que el valor sea un objeto no nulo ni array, el nombre no vacío y la nota numérica dentro del intervalo 0–10. Solo acepta la primera entrada; el `catch` devuelve `false` para el JSON mal formado.

## Ejercicio 6 · La lista de la compra

- **A:** El original cambia: `igual` y `lista1` son la misma referencia. `lista1 === igual` da `true`.
- **B:** El original conserva `propietario: 'Ana'`, pero su array pasa a `['pan', 'leche', 'queso']`.
- **C:** El original permanece `{ propietario: 'Ana', productos: ['pan', 'leche'] }`; la copia queda `{ propietario: 'Marta', productos: ['pan', 'leche', 'fruta'] }`.

En la copia superficial se crea un objeto exterior nuevo, pero `productos` sigue apuntando al mismo array. En cambio, `propietario` es un valor primitivo y se reemplaza solo en la copia. Si solo hubiera textos y números, usaría copia superficial (`{ ...objeto }`), suficiente para esos valores primitivos.

## Ejercicio 7 · Adivina el orden

Con el código entregado, el orden es **1, 3, 6, 4, 2, 5**. Las instrucciones síncronas (1, 3 y 6) terminan antes de procesar cualquier callback de temporizador. Después se atienden los temporizadores según quedan listos.

Al cambiar los `0` ms del temporizador 4 por `1500` ms, el orden pasa a **1, 3, 6, 2, 5, 4**. El 6 aparece primero porque el callback de `setTimeout` nunca interrumpe el código síncrono en curso; incluso con 0 ms se ejecuta después de que termine el bloque actual.

## Ejercicio 8 · Comprobar el stock

Se envían las dos consultas de inmediato y cada promesa se resuelve o rechaza un segundo después. Las dos líneas `Consulta enviada` salen antes porque el temporizador difiere los resultados mientras el programa continúa con la segunda llamada.

Salida:

```text
Consulta enviada: 5 unidades
Consulta enviada: 0 unidades
✔ Quedan 5 unidades
Consulta terminada
✘ Producto agotado
Consulta terminada
```

## Ejercicio 9 · Buscar varios libros

El `try/catch` está dentro del bucle, así que el id inexistente no impide buscar los siguientes. Cada búsqueda espera 500 ms, de modo que cuatro ids tardan aproximadamente 2 segundos. La función usa `await` de nivel superior, admitido por este paquete ES.

## Ejercicio 10 · Más rápido

Tres esperas consecutivas tardan aproximadamente 1,5 s; las tres solicitudes concurrentes con `Promise.all` tardan aproximadamente 0,5 s. `Promise.allSettled` permite contar dos cumplidas y una rechazada aunque una consulta falle. Salida orientativa:

```text
Una detrás de otra: 1.5 s
Con Promise.all: 0.5 s
allSettled: 2 cumplidas y 1 rechazada
```

## Reto opcional · Informe de libros

El programa convierte los ids desde JSON, lanza todas las búsquedas concurrentemente y conserva el orden original al informar los resultados:

```text
✔ 3 · Fahrenheit 451
✔ 1 · El nombre de la rosa
✘ 99 · No existe ningún libro con id 99
✔ 2 · Cien años de soledad
3 encontrados y 1 no existen
```
