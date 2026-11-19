
/**
 * Modulo C: Detector y Analizador de Secuencias
 * Detecta patrones aritmeticos, geometricos, cuadraticos y duales.
 */

// Comparacion numerica con tolerancia
function casiIguales(a, b) {
  const tolerancia = 1e-9 * Math.max(1, Math.abs(a), Math.abs(b));
  return Math.abs(a - b) <= tolerancia;
}

// Detectar progresiones aritmeticas o geometricas
function detectarProgresion(arr) {
  if (arr.length < 3) return null;

  const diferencias = arr.slice(1).map((n, i) => n - arr[i]);

  if (diferencias.every(d => casiIguales(d, diferencias[0]))) {
    return {
      tipo: "ARITMETICA",
      diferencia: diferencias[0],
      siguiente: arr[arr.length - 1] + diferencias[0]
    };
  }

  let razon;

  if (arr[0] !== 0) {
    razon = arr[1] / arr[0];
  } else if (arr.every(n => n === 0)) {
    razon = 0;
  } else {
    return null;
  }

  if (arr.slice(1).every((n, i) =>
    casiIguales(n, arr[i] * razon)
  )) {
    return {
      tipo: "GEOMETRICA",
      razon,
      siguiente: arr[arr.length - 1] * razon
    };
  }

  return null;
}

/**
 * Analizar una secuencia numerica
 */
export function analizarSecuencia(arr) {

  if (!Array.isArray(arr) || arr.length < 3) {
    throw new Error("Se requieren al menos 3 terminos.");
  }

  if (!arr.every(n => typeof n === "number" && Number.isFinite(n))) {
    throw new Error("Todos los terminos deben ser numeros validos.");
  }

  const n = arr.length;

  // 1. Detectar progresion geometrica o aritmetica
  const progresion = detectarProgresion(arr);

  if (progresion) {
    if (progresion.tipo === "ARITMETICA") {
      return {
        tipo: "ARITMETICA",
        descripcion: `Progresion aritmetica con diferencia d = ${progresion.diferencia}`,
        diferencia: progresion.diferencia,
        siguienteTermino: progresion.siguiente
      };
    }

    return {
      tipo: "GEOMETRICA",
      descripcion: `Progresion geometrica con razon r = ${progresion.razon}`,
      razon: progresion.razon,
      siguienteTermino: progresion.siguiente
    };
  }

  // 2. Calcular primeras diferencias
  const d1 = [];

  for (let i = 0; i < n - 1; i++) {
    d1.push(arr[i + 1] - arr[i]);
  }

  // 3. Calcular segundas diferencias
  const d2 = [];

  for (let i = 0; i < d1.length - 1; i++) {
    d2.push(d1[i + 1] - d1[i]);
  }

  // 4. Detectar sucesion cuadratica de segundo orden
  const d2Constante = d2.length > 0 &&
    d2.every(d => casiIguales(d, d2[0]));

  if (d2Constante) {
    const siguienteDiferencia = d1[d1.length - 1] + d2[0];
    const siguiente = arr[n - 1] + siguienteDiferencia;

    return {
      tipo: "CUADRATICA_2DO_ORDEN",
      descripcion: `Secuencia de segundo orden con segunda diferencia ${d2[0]}`,
      primeraDiferencia: d1,
      segundaDiferencia: d2[0],
      siguienteDiferencia,
      siguienteTermino: siguiente
    };
  }

  // 5. Detectar secuencias duales o alternadas
  if (n >= 6) {
    const pares = arr.filter((_, i) => i % 2 === 0);
    const impares = arr.filter((_, i) => i % 2 !== 0);

    const patronPares = detectarProgresion(pares);
    const patronImpares = detectarProgresion(impares);

    if (patronPares && patronImpares) {
      const siguiente = n % 2 === 0
        ? patronPares.siguiente
        : patronImpares.siguiente;

      return {
        tipo: "DUAL",
        descripcion: "Secuencia dual con dos patrones intercalados",
        patronPares: patronPares.tipo,
        patronImpares: patronImpares.tipo,
        siguienteTermino: siguiente
      };
    }
  }

  // 6. No se encontro un patron conocido
  return {
    tipo: "PATRON_COMPLEJO",
    descripcion: "No se encontro una regla matematica sencilla.",
    siguienteTermino: null
  };
}
