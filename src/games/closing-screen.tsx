// src/components/ClosingScreen.tsx
import "./closing-screen.css";
import { scroller } from 'react-scroll';

const ClosingScreen = () => {
  return (
    <div className="closing-screen">
      <h1>Bravo vous avez survécu aux différentes étapes du Vendée Globe</h1>
      <h2>Il faut maintenant prendre autant soin des écosystèmes marins que de votre corps !</h2>
      <p>Vous pouvez maintenant retourner à la page d'accueil</p>
      <button onClick={() => {
        scroller.scrollTo('homepage', {
          duration: 0,
          smooth: 'easeInOutQuart',
        })
        window.location.reload();
      }}>Retourner à l'accueil</button>
    </div>
  );
};

export default ClosingScreen;