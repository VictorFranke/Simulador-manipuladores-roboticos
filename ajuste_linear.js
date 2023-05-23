const math = require('mathjs');

// Define os pontos
const points = [
  [1, 2.5],
  [2, 4.2],
  [3, 6.1],
  [4, 8.0],
  [5, 10.1],
  [6, 12.3],
  [7, 14.5],
  [8, 17.0],
  [9, 19.6],
  [10, 22.3]
];

// Extrai as coordenadas X e Y dos pontos
const xCoords = points.map(point => point[0]);
const yCoords = points.map(point => point[1]);

// Realiza o ajuste polinomial de grau 6
const polyfit = math.polyfit(xCoords, yCoords, 6);

// Imprime os coeficientes do polinômio resultante
console.log(polyfit);