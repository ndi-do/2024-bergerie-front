import { useEffect, useState } from "react";
import "./collecte-plancton.css";

export interface Pollutant {
    id: number;
    x: number;
    y: number;
    type: "good" | "bad";
}

export default function Plancton() {
    const [pollutants, setPollutants] = useState<Pollutant[]>([]);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60); // Timer à 60 secondes
    const [bucketX, setBucketX] = useState(45); // Position du récipient (en %)
    const [gameOver, setGameOver] = useState(false);


    useEffect(() => {
        // Ajouter des polluants toutes les 2 secondes
        const interval = setInterval(() => {
            setPollutants((prev) => [
                ...prev,
                {
                    id: Date.now(),
                    x: Math.random() * 90,
                    y: 0,
                    type: Math.random() > 0.5 ? "good" : "bad",
                },
            ]);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Faire descendre les polluants
        const interval = setInterval(() => {
            setPollutants((prev) =>
                prev
                    .map((p) => ({ ...p, y: p.y + 5 })) // Descendre tous les polluants
                    .filter((p) => p.y <= 100) // Supprimer ceux qui sortent de l'écran
            );
        }, 500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Décompte du temps
        const timerInterval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timerInterval);
                    setGameOver(true); // Marquer la fin du jeu
                    setPollutants([]); // Supprimer les polluants
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);


    useEffect(() => {
        // Détection des touches pour déplacer le récipient
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") setBucketX((prev) => Math.max(prev - 5, 0));
            if (e.key === "ArrowRight") setBucketX((prev) => Math.min(prev + 5, 90));
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Détecter les collisions entre le récipient et les polluants
    useEffect(() => {
        setInterval(() => {
            const bucketWidth = 10; // Largeur du récipient en pourcentage
            setPollutants((prev) =>
                prev.filter((p) => {
                    if (p.y >= 95 && p.x >= bucketX && p.x <= bucketX + bucketWidth) {
                        // Collision détectée
                        if (p.type === "good") setScore((prev) => prev + 1);
                        if (p.type === "bad") setScore((prev) => prev - 1);
                        return false; // Supprimer le polluant
                    }
                    return true; // Garder le polluant
                })
            );
        }, 500)
    }, [bucketX, pollutants]);

    if (gameOver) {
        return (
            <div className="game-over">
                <h2>Partie terminée!</h2>
                <p>Score final : {score}</p>
                <button onClick={() => window.location.reload()}>Rejouer</button>
            </div>
        );
    }

    return (
        <div className="defense-game">
            <h1 className="font-bold">Collecte de planctons</h1>
            <p>Attrapez les bonnes bactéries (vertes) qui tombent, tout en évitant les mauvaises (rouges) en vous aidant des flèches de votre clavier.            </p>
            <p>Score : {score}</p>
            <p>Temps restant : {timeLeft}s</p>
            <div className="reef-area">
                {pollutants.map((pollutant) => (
                    <div
                        key={pollutant.id}
                        className={`pollutant ${pollutant.type}`}
                        style={{ left: `${pollutant.x}%`, top: `${pollutant.y}%` }}
                    ></div>
                ))}
                <div
                    className="bucket"
                    style={{ left: `${bucketX}%` }}
                ></div>
            </div>
        </div>
    );
}
