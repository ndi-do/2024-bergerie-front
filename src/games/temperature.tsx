import { useState, useEffect } from "react";

const TemperatureGame = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [position, setPosition] = useState(0); // Position de la barre
  const [lunarPhase, setLunarPhase] = useState(0); // Position de la lune, 0 à 100 (plein cycle lunaire)
  const [score, setScore] = useState(0); // Suivi du score
  const [gameOver, setGameOver] = useState(false);


  useEffect(() => {
    // Mettre à jour la position de la barre à intervalle régulier
    const interval = setInterval(() => {
      setPosition((prevPosition) => (prevPosition + 1) % 100);
    }, 100);

    // Timer pour la lune (simulation d'un cycle lunaire)
    const lunarTimer = setInterval(() => {
      setLunarPhase((prevPhase) => (prevPhase + 1) % 100);
    }, 400); // Chaque 300ms, la lune se déplace

    return () => {
      clearInterval(interval);
      clearInterval(lunarTimer);
    };
  }, []);

  const handleClick = () => {
    setIsClicked(true);

    // Vérification si le clic est synchronisé avec la lune
    if (Math.abs(position - lunarPhase) < 10) {
      setIsCorrect(true);
      setScore((prevScore) => prevScore + 1); // Augmenter le score en cas de succès
    } else {
      setIsCorrect(false);
    }

    setTimeout(() => {
      setIsClicked(false);
      setIsCorrect(null);
    }, 1000); // Réinitialiser l'état après un court délai
  };

  // Condition de victoire : 3 bonnes réponses
  const checkVictory = () => {
    if (score >= 3) {
        setGameOver(true); // Marquer la fin du jeu

      return <div className="victory-message">Vous avez gagné ! 🎉</div>;
    }
    return null;
  };

  if (gameOver) {
    return (
        <div className="game-over">
            <h2>Partie terminée!</h2>
            <button onClick={() => window.location.reload()}>Rejouer</button>
        </div>
    );
}

  return (
    <div className="game-container">
      <h1>Synchronisation des Marées</h1>
      <p>Essayez de synchroniser la marée avec la lune en cliquant au bon moment !</p>
      
      <div className="moon-phase" style={{ left: `${lunarPhase}%` }}>
        🌙
      </div>
      
      <div className="bar-container">
        <div className="bar" style={{ width: `${position}%` }}></div>
      </div>

      <button onClick={handleClick} disabled={isClicked}>
        {isClicked ? "Attendez..." : "Cliquez au bon moment"}
      </button>

      {isCorrect !== null && (
        <div className={`result ${isCorrect ? "correct" : "incorrect"}`}>
          {isCorrect ? "Correct!" : "Faux! Essayez encore!"}
        </div>
      )}

      {checkVictory()} {/* Affiche le message de victoire si le score est >= 3 */}
      
      <div className="score">Score: {score}</div>
    </div>
  );
};

export default TemperatureGame;
