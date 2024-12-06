import  { useState, useEffect, useRef } from "react";
import "./reef-repair.css";

const ReefRepair = () => {
  const [damagedZones, setDamagedZones] = useState<{ id: number; x: number; y: number }[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [intervalTime, setIntervalTime] = useState(2000); // Temps initial de génération des zones
  const intervalId = useRef<ReturnType<typeof setInterval> | null>(null); // Pour garder une référence à l'intervalle

  // Fonction pour générer des zones endommagées aléatoires
  const generateDamagedZones = () => {
    if (gameOver) return;

    const newZone = {
      id: Date.now(),
      x: Math.random() * 100,
      y: Math.random() * 100,
    };

    setDamagedZones((prevZones) => {
      const updatedZones = [...prevZones, newZone];
      
      // Vérifier si le nombre de zones endommagées dépasse 25
      if (updatedZones.length > 18) {
        setGameOver(true);
        if (intervalId.current !== null) {
          clearInterval(intervalId.current); // Arrêter l'intervalle à la fin du jeu
        }
      }

      return updatedZones;
    });

    // Accélérer le jeu : réduire l'intervalle de génération des zones
    if (intervalTime > 500) { // Ne pas réduire l'intervalle en dessous de 500ms
      setIntervalTime((prevTime) => prevTime - 100); // Réduire de 100ms
    }
  };

  // Fonction pour réparer une zone
interface DamagedZone {
    id: number;
    x: number;
    y: number;
}

const repairZone = (id: number) => {
    if (gameOver) return;

    setDamagedZones((prevZones: DamagedZone[]) => prevZones.filter((zone) => zone.id !== id));
    setScore((prevScore: number) => prevScore + 1);
};

  // Initialiser l'intervalle pour générer les zones
  useEffect(() => {
    if (!gameOver) {
      intervalId.current = setInterval(generateDamagedZones, intervalTime);
      return () => {
        if (intervalId.current !== null) {
          clearInterval(intervalId.current); // Nettoyer l'intervalle à la fin
        }
      };
    }
  }, [gameOver, intervalTime]);

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="font-bold">Récif en Réparation</h1>
        <p>Cliquez sur les zones endommagées du récif pour les régénérer avant que de nouvelles zones ne soient abîmées.</p>
      </div>
      <div className="reef-container">
        <h1>Récif en Réparation</h1>
        <p>Score: {score}</p>
        <div className="reef">
          {damagedZones.map((zone) => (
            <div
              key={zone.id}
              className="damaged-zone"
              style={{
                left: `${zone.x}%`,
                top: `${zone.y}%`,
              }}
              onClick={() => repairZone(zone.id)}
            />
          ))}
        </div>
        {gameOver && <div className="game-over">Game Over! Final Score: {score}</div>}
      </div>
    </>
  );
};

export default ReefRepair;
