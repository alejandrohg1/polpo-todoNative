
export function arrayFromKeywordString(texto) {
  try {
    const arreglo = JSON.parse(texto);
    const palabras = arreglo.map(palabra => palabra.replace(/\"/g, ''));
    return palabras.map(palabra => palabra.replace(/\[|\]/g, ''));;
  } catch (error) {
    return [];
  }
}