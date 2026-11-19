
/**
 * Modulo B: Motor de Ecuaciones Cuadraticas
 * Validacion y precision numerica mejorada.
 */

// Resolver ecuaciones de segundo grado
export function resolverCuadratica(a, b, c) {

  // Validar que los coeficientes sean numeros validos
  if (![a, b, c].every(Number.isFinite)) {
    throw new Error("Todos los coeficientes deben ser numeros validos.");
  }

  // Caso degenerado: ecuacion no cuadratica
  if (a === 0) {

    if (b === 0) {
      if (c === 0) {
        return {
          tipo: "INFINITAS_SOLUCIONES",
          descripcion: "Infinitas soluciones",
          raices: []
        };
      }

      return {
        tipo: "SIN_SOLUCION",
        descripcion: "La ecuacion no tiene solucion",
        raices: []
      };
    }

    return {
      tipo: "LINEAL_DEGENERADA",
      descripcion: "Ecuacion lineal",
      raices: [-c / b],
      vertice: null,
      discriminante: null
    };
  }

  // Calcular discriminante
  const delta = b * b - 4 * a * c;

  if (!Number.isFinite(delta)) {
    throw new Error("Los coeficientes producen un resultado fuera del rango numerico.");
  }

  // Calcular tolerancia numerica
  const tolerancia = 8 * Number.EPSILON *
    (Math.abs(b * b) + Math.abs(4 * a * c));

  // Calcular vertice
  const h = -b / (2 * a);
  const k = evaluarPolinomio(a, b, c, h);

  const vertice = { h, k };

  // Caso 1: Raices complejas
  if (delta < -tolerancia) {
    const parteReal = -b / (2 * a);
    const parteImag = Math.sqrt(-delta) / Math.abs(2 * a);

    return {
      tipo: "COMPLEJAS_CONJUGADAS",
      descripcion: "Dos raices complejas conjugadas",
      discriminante: delta,
      vertice,
      raices: [
        {
          real: parteReal,
          imag: parteImag,
          texto: `${parteReal.toFixed(4)} + ${parteImag.toFixed(4)}i`
        },
        {
          real: parteReal,
          imag: -parteImag,
          texto: `${parteReal.toFixed(4)} - ${parteImag.toFixed(4)}i`
        }
      ]
    };
  }

  // Caso 2: Una raiz doble
  if (Math.abs(delta) <= tolerancia) {
    const x = -b / (2 * a);

    return {
      tipo: "RAIZ_DOBLE",
      descripcion: "Una raiz real doble",
      discriminante: 0,
      vertice,
      raices: [x, x]
    };
  }

  // Caso 3: Dos raices reales distintas
  // Formula numericamente estable de Citardauq
  const raizDelta = Math.sqrt(delta);
  const signo = b >= 0 ? 1 : -1;

  const q = -0.5 * (b + signo * raizDelta);

  const x1 = q / a;
  const x2 = c / q;

  return {
    tipo: "REALES_DISTINTAS",
    descripcion: "Dos raices reales distintas",
    discriminante: delta,
    vertice,
    raices: [Math.max(x1, x2), Math.min(x1, x2)]
  };
}

// Evaluar polinomio usando el metodo de Horner
export function evaluarPolinomio(a, b, c, x) {
  return (a * x + b) * x + c;
}
