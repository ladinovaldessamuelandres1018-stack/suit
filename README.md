
# 🧮 Suite Matemática y Algorítmica

![Build](https://img.shields.io/badge/build-passing-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-orange)
![CSS3](https://img.shields.io/badge/CSS3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

Aplicación web interactiva desarrollada como proyecto integrador para resolver retos matemáticos y lógicos mediante programación, utilizando HTML5, CSS3 y JavaScript.

## 🎯 Objetivo del proyecto

Desarrollar una suite de herramientas matemáticas que permita resolver problemas de lógica, ecuaciones cuadráticas y sucesiones numéricas, incorporando validaciones, precisión numérica y pruebas automatizadas.

## 🚀 Módulos del proyecto

### Módulo A: Simulador BairesDev
- Probabilidad de dos dados.
- Cálculo de partidos en torneos.
- Conteo de múltiplos y divisores.
- Cálculo de viajes mínimos de logística.

### Módulo B: Motor Cuadrático
- Resolución de ecuaciones de segundo grado.
- Identificación de raíces reales y complejas.
- Cálculo del discriminante y vértice.
- Representación gráfica de parábolas mediante Canvas.

### Módulo C: Detector de Secuencias
- Sucesiones aritméticas.
- Sucesiones geométricas.
- Sucesiones de segundo orden.
- Detección de patrones duales.
- Predicción del siguiente término.

### Módulo D: Suite de Autoevaluación
- Ejecución de 10 pruebas automatizadas.
- Identificación de resultados PASS y FAIL.
- Verificación de casos especiales.
- Control de errores y precisión numérica.

## 🏗️ Arquitectura del proyecto

El proyecto utiliza una arquitectura modular para separar la interfaz visual de la lógica matemática.

```text
PROYECTO-WEB/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   │
│   └── modules/
│       ├── bairesdev.js
│       ├── cuadratica.js
│       ├── secuencias.js
│       └── test-suite.js
│
└── README.md
```

### Tecnologías utilizadas
- HTML5: estructura de la aplicación.
- CSS3: diseño visual y adaptación a diferentes pantallas.
- JavaScript ES6+: lógica, cálculos y validaciones.
- Canvas: representación gráfica de las parábolas.
- Git y GitHub: control de versiones y almacenamiento del proyecto.

## ⚙️ Instalación y ejecución local

1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto.
3. Iniciar un servidor HTTP local.

Comando:

```bash
python3 -m http.server 8000
```

4. Abrir el navegador en:

```text
http://localhost:8000
```

## 📊 Análisis de complejidad algorítmica

| Algoritmo | Tiempo | Espacio |
|---|---|---|
| Probabilidad de dados | O(1) | O(1) |
| Partidos de torneo | O(1) | O(1) |
| Conteo de múltiplos | O(1) | O(1) |
| Viajes mínimos | O(1) | O(1) |
| Ecuación cuadrática | O(1) | O(1) |
| Análisis de secuencias | O(n) | O(n) |
| Pruebas automatizadas | O(t) | O(t) |

Donde:
- n representa la cantidad de términos de una secuencia.
- t representa la cantidad de pruebas ejecutadas.

## 🧠 Precisión numérica y casos especiales

El proyecto contempla situaciones especiales para mejorar la confiabilidad de los resultados:

1. Cancelación catastrófica: uso de la fórmula estable de Citardauq para calcular raíces cuadráticas.
2. Ecuaciones degeneradas: validación cuando el coeficiente a es igual a cero.
3. Precisión IEEE-754: uso de tolerancias numéricas para comparar resultados decimales.

## 🔀 Control de versiones

El proyecto utiliza GitHub para registrar los avances mediante commits organizados con la convención Conventional Commits:

- feat: nuevas funcionalidades.
- fix: correcciones de errores.
- style: mejoras visuales.
- test: pruebas automatizadas.
- docs: documentación.

## 📌 Autor

Proyecto académico individual.

Desarrollado como práctica de lógica computacional, matemáticas y desarrollo web.

---

**Suite Matemática y Algorítmica - Proyecto Integrador Web.**
