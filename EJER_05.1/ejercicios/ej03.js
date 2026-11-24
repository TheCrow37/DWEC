const textos = [
  '{"nombre":"Ana","edad":19}',
  "{'nombre':'Luis'}",
  '{"activo":true,}',
  '[1, 2, 3]',
  '{nombre:"Marta"}',
  '{"curso":"2DAW"',
];

for (const texto of textos) {
  try {
    const valor = JSON.parse(texto);
    console.log(`✔ ${texto} → ${typeof valor}`);
  } catch (error) {
    console.log(`✘ ${texto} → ${error.name}`);
  }
}

const corregidos = [
  '{"nombre":"Luis"}',
  '{"activo":true}',
  '{"nombre":"Marta"}',
  '{"curso":"2DAW"}',
];
for (const texto of corregidos) JSON.parse(texto);
console.log(`Corregidos válidos: ${corregidos.length}/${corregidos.length}`);
