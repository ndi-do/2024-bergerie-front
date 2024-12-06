// src/components/ClosingScreen.tsx
import "./closing-screen.css";

const ClosingScreen = () => {
  return (
    <div className="closing-screen">
      <h1>Bravo vous avez survécu aux différentes étapes du vent des globes</h1>
      <h2>Il faut maintenant prendre autant soin des écosystèmes marins que de votre corps !</h2>
      <p>Vous pouvez maintenant retourner à la page d'accueil</p>
      <button onClick={() => window.location.reload()}>Retourner à l'accueil</button>
    </div>
  );
};

export default ClosingScreen;