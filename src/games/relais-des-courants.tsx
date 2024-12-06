import React from 'react';

const Grid = () => {
  const rows = 10;
  const columns = 10;

  // Positions spécifiques pour les couleurs

  // Fonction pour déterminer la couleur d'une cellule
interface ColorPositions {
    [key: string]: [number, number][];
}

const colorPositions: ColorPositions = {
    purple: [
        [3, 7], [5, 5],
    ],
    pink: [
        [4, 7], [5, 4],
    ],
    lightblue: [
        [2, 7], [5, 7],
    ],
    orange: [
        [1, 2], [1, 7],
    ],
    darkblue: [
        [0, 4], [1, 8],
    ],
    red: [
        [0, 5], [8, 9],
    ],
    green: [
        [0, 0], [9, 9],
    ],
};

const getColor = (row: number, col: number): string => {
    for (const color in colorPositions) {
        const positions = colorPositions[color];
        if (positions.some(([r, c]) => r === row && c === col)) {
            return color; // Si la position correspond, on retourne la couleur
        }
    }
    return '#f0f0f0'; // Couleur de fond par défaut
};

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 40px)`,
        gap: '0',
      }}
    >
      {Array.from({ length: rows * columns }).map((_, index) => {
        const row = Math.floor(index / columns);
        const col = index % columns;
        const color = getColor(row, col);

        return (
          <div
            key={index}
            style={{
              backgroundColor: color,
              border: '1px solid #ddd',
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Grid;
