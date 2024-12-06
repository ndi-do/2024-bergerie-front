import { useState, useEffect } from "react";
import "./coral-builder.css";

const CoralBuilder = () => {
  const [blocks, setBlocks] = useState<{ x: number; y: number }[]>([]);
  const [currentBlock, setCurrentBlock] = useState({ x: 50, y: 0 });
  const [speed, setSpeed] = useState(2);
  const [stackHeight, setStackHeight] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false); // Nouvelle variable pour gérer la victoire

  const victoryHeight = 10; // Seuil de victoire (hauteur de la tour en blocs)

  useEffect(() => {
    if (win || gameOver) return; // Si le jeu est terminé, ne pas mettre à jour

    const interval = setInterval(() => {
      setCurrentBlock((prev) => ({
        ...prev,
        x: (prev.x + speed) % 100, // Fait bouger le bloc horizontalement
      }));
    }, 50);

    return () => clearInterval(interval);
  }, [speed, gameOver, win]);

  useEffect(() => {
    if (stackHeight >= victoryHeight) {
      setWin(true); // Déclare la victoire lorsque la hauteur dépasse le seuil
    }
  }, [stackHeight]);

  const handleDrop = () => {
    if (gameOver || win) return; // Si le jeu est terminé, ne rien faire

    const newBlock = { ...currentBlock, y: stackHeight };
    if (stackHeight > 0 && !isAligned(newBlock, blocks[blocks.length - 1])) {
      setGameOver(true);
    } else {
      setBlocks([...blocks, newBlock]);
      setStackHeight((prev) => prev + 1);
      setSpeed((prev) => Math.min(prev + 0.1, 5)); // Augmente la vitesse
    }
  };

  interface Block {
    x: number;
    y: number;
  }

  const isAligned = (block1: Block, block2: Block): boolean => {
    return Math.abs(block1.x - block2.x) < 10; // Tolérance pour alignement
  };

  const handleRestart = () => {
    setBlocks([]);
    setCurrentBlock({ x: 50, y: 0 });
    setSpeed(2);
    setStackHeight(0);
    setGameOver(false);
    setWin(false); // Réinitialiser la victoire
  };

  return (
    <div className="game-container">
      <div className="game-area">
        {blocks.map((block, index) => (
          <div
            key={index}
            className="block"
            style={{ left: `${block.x}%`, bottom: `${block.y * 50}px` }}
          />
        ))}
        {!gameOver && !win && (
          <div
            className="current-block"
            style={{ left: `${currentBlock.x}%`, bottom: `${stackHeight * 50}px` }}
          />
        )}
        {gameOver && <div className="game-over">Game Over! 🎮</div>}
        {win && (
          <div className="win-message">
            Félicitations ! Vous protégez la vie marine grâce à votre barrière de corail 🐠🌊
          </div>
        )}
      </div>
      <button onClick={handleDrop} disabled={gameOver || win}>
        Drop Block
      </button>
      {(gameOver || win) && (
        <button onClick={handleRestart} className="restart-btn">
          Restart
        </button>
      )}
    </div>
  );
};

export default CoralBuilder;
