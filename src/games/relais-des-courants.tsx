import { useState } from 'react';

const Grid = () => {
  const rows = 10;
  const columns = 10;

  // Grille cible (les couleurs que vous attendez)
  const gridPattern = [
    ['green', 'darkblue', 'darkblue', 'darkblue', 'darkblue', 'red', 'red', 'red', 'red', 'red'],
    ['green', 'darkblue', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'darkblue', 'red'],
    ['green', 'darkblue', 'lightblue', 'lightblue', 'lightblue', 'lightblue', 'lightblue', 'lightblue', 'darkblue', 'red'],
    ['green', 'darkblue', 'lightblue', 'purple', 'purple', 'purple', 'purple', 'purple', 'darkblue', 'red'],
    ['green', 'darkblue', 'lightblue', 'purple', 'pink', 'pink', 'pink', 'pink', 'darkblue', 'red'],
    ['green', 'darkblue', 'lightblue', 'purple', 'pink', 'purple', 'purple', 'lightblue', 'darkblue', 'red'],
    ['green', 'darkblue', 'lightblue', 'purple', 'purple', 'purple', 'purple', 'lightblue', 'darkblue', 'red'],
    ['green', 'darkblue', 'lightblue', 'lightblue', 'lightblue', 'lightblue', 'lightblue', 'lightblue', 'darkblue', 'red'],
    ['green', 'darkblue', 'darkblue', 'darkblue', 'darkblue', 'darkblue', 'darkblue', 'darkblue', 'darkblue', 'red'],
    ['green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green']
  ];

  // Positions spécifiques pour les couleurs initiales
  const colorPositions = {
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

  // Initialisation de la grille avec les couleurs correctes selon colorPositions
  const initializeGrid = () => {
    const initialGrid = Array(rows * columns).fill('#f0f0f0');
    for (const color in colorPositions) {
      const positions = colorPositions[color as keyof typeof colorPositions];
      positions.forEach(([r, c]) => {
        const index = r * columns + c;
        initialGrid[index] = color; // Affecter la couleur spécifique à la position
      });
    }
    return initialGrid;
  };

  const [gridColors, setGridColors] = useState(initializeGrid()); // Grille avec couleurs initiales
  const [selectedColor, setSelectedColor] = useState('purple'); // Par défaut, la couleur sélectionnée est purple

  // Fonction de changement de couleur d'une cellule
  const handleCellClick = (index: number) => {
    const newGridColors = [...gridColors];
    newGridColors[index] = selectedColor; // Changer la couleur de la cellule sélectionnée
    setGridColors(newGridColors);
  };

  // Fonction pour changer la couleur sélectionnée
  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  // Fonction pour vérifier si la grille correspond à la grille cible
  const checkGridMatch = () => {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const index = row * columns + col;
        const currentColor = gridColors[index];
        const expectedColor = gridPattern[row][col];
        if (currentColor !== expectedColor) {
          return false; // Si une couleur ne correspond pas, retourner false
        }
      }
    }
    return true; // Si toutes les couleurs correspondent, retourner true
  };

  // Fonction pour lancer la vérification de la grille
  const handleCheckGrid = () => {
    const isMatch = checkGridMatch();
    if (isMatch) {
      alert('Succès ! La grille est correcte.');
    } else {
      alert('Échec ! La grille ne correspond pas.');
    }
  };


  return (
    <div>
      {/* Palette de couleurs */}
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleColorSelect('purple')} style={{ backgroundColor: 'purple', width: '30px', height: '30px', margin: '5px' }} />
        <button onClick={() => handleColorSelect('pink')} style={{ backgroundColor: 'pink', width: '30px', height: '30px', margin: '5px' }} />
        <button onClick={() => handleColorSelect('lightblue')} style={{ backgroundColor: 'lightblue', width: '30px', height: '30px', margin: '5px' }} />
        <button onClick={() => handleColorSelect('orange')} style={{ backgroundColor: 'orange', width: '30px', height: '30px', margin: '5px' }} />
        <button onClick={() => handleColorSelect('darkblue')} style={{ backgroundColor: 'darkblue', width: '30px', height: '30px', margin: '5px' }} />
        <button onClick={() => handleColorSelect('red')} style={{ backgroundColor: 'red', width: '30px', height: '30px', margin: '5px' }} />
        <button onClick={() => handleColorSelect('green')} style={{ backgroundColor: 'green', width: '30px', height: '30px', margin: '5px' }} />
      </div>

      {/* Grille */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 40px)`,
          gap: '0',
        }}
      >
        {Array.from({ length: rows * columns }).map((_, index) => {
          const color = gridColors[index]; // Utiliser la couleur actuelle de la cellule

          return (
            <div
              key={index}
              onClick={() => handleCellClick(index)}
              style={{
                backgroundColor: color,
                border: '1px solid #ddd',
                cursor: 'pointer',
              }}
            ></div>
          );
        })}
      </div>

      

      {/* Bouton pour lancer la vérification */}
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleCheckGrid} style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
          Vérifier la grille
        </button>
      </div>
    </div>
  );
};

export default Grid;
