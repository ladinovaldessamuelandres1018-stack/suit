
/**
 * Modulo A: Retos Logicos BairesDev
 * Funciones para resolver problemas matematicos,
 * combinatoria, divisibilidad y logistica.
 */

// Validacion general de numeros enteros
function validarEntero(numero, nombre, minimo) {
  if (!Number.isFinite(numero) || !Number.isInteger(numero)) {
    throw new Error(`${nombre} debe ser un numero entero valido.`);
  }

  if (numero < minimo) {
    throw new Error(`${nombre} debe ser mayor o igual a ${minimo}.`);
  }
}

/**
 * Reto 1: Probabilidad de suma de dos dados
 */
export function calcularProbabilidadDados(sumaObjetivo) {
  validarEntero(sumaObjetivo, "La suma", 2);

  if (sumaObjetivo > 12) {
    throw new Error("La suma debe estar entre 2 y 12.");
  }

  let casosFavorables = 0;
  const casosTotales = 36;

  for (let dado1 = 1; dado1 <= 6; dado1++) {
    for (let dado2 = 1; dado2 <= 6; dado2++) {
      if (dado1 + dado2 === sumaObjetivo) {
        casosFavorables++;
      }
    }
  }

  const probabilidad = casosFavorables / casosTotales;
  const porcentaje = (probabilidad * 100).toFixed(2) + "%";

  return {
    casosFavorables,
    casosTotales,
    probabilidad,
    porcentaje
  };
}

/**
 * Reto 2: Partidos de un torneo
 * Formula: C(n, 2) = n * (n - 1) / 2
 */
export function calcularPartidosTorneo(n) {
  validarEntero(n, "La cantidad de equipos", 2);

  return (n * (n - 1)) / 2;
}

/**
 * Reto 3: Contar multiplos menores al limite
 * Complejidad temporal: O(1)
 */
export function contarMultiplosMenores(limite, divisor) {
  validarEntero(limite, "El limite", 1);
  validarEntero(divisor, "El divisor", 1);

  return Math.floor((limite - 1) / divisor);
}

/**
 * Reto 4: Calcular viajes minimos
 * Se utiliza Math.ceil para completar todos los viajes.
 */
export function calcularViajesMinimos(totalItems, capacidadPorViaje) {
  validarEntero(totalItems, "El total de elementos", 0);
  validarEntero(capacidadPorViaje, "La capacidad", 1);

  return Math.ceil(totalItems / capacidadPorViaje);
}
