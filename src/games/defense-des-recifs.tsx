import {useEffect, useState} from "react";
import './defense-des-recifs.css'

export interface Pollutant {
    id: number;
    x: number;
    y: number;
}

export default function DefenseDesRecifs () {
    const [pollutants, setPollutants] = useState<Pollutant[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);


    useEffect(() => {
        // Ajouter des polluants toutes les 2 secondes
        const interval = setInterval(() => {
            setPollutants((prev) => [
                ...prev,
                {
                    id: Date.now(),
                    x: Math.random() * 90, // Position aléatoire (0% à 90%)
                    y: 0, // Départ en haut
                },
            ]);
        }, 2000);

        // Nettoyage à la fin du jeu
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Faire descendre les polluants toutes les 100ms
        const interval = setInterval(() => {
            setPollutants((prev) =>
                prev.map((p) => ({ ...p, y: p.y + 5 })) // Descente progressive
            );
        }, 500);

        // Nettoyage à la fin
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const reachedRiff = pollutants.some((p) => p.y > 90); // Si un polluant atteint le bas
        if (reachedRiff) {
            setGameOver(true);
        }
    }, [pollutants]);

    const handlePollutantClick = (id: number) => {
        setPollutants((prev) => prev.filter((p) => p.id !== id)); // Retirer le polluant cliqué
        setScore((prev) => prev + 1); // Ajouter un point
    };

    if (gameOver) {
        return (
            <div className="game-over">
                <h2>Game Over!</h2>
                <p>Score final : {score}</p>
                <button onClick={() => window.location.reload()}>Rejouer</button>
            </div>
        );
    }

    return (
        <div className="defense-game">
            <h2>Défense des Récifs</h2>
            <p>Score : {score}</p>
            <div className="reef-area">
                {pollutants.map((pollutant) => (
                    <div
                        key={pollutant.id}
                        className="pollutant"
                        style={{left: `${pollutant.x}%`, top: `${pollutant.y}%`}}
                        onClick={() => handlePollutantClick(pollutant.id)}
                    ></div>
                ))}
                <div className="coral-bar">
                    <div className="coral"></div>
                    <div className="coral"></div>
                    <div className="coral"></div>
                </div>
            </div>
        </div>
    );

}