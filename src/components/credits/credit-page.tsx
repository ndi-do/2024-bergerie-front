import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

import ContributorCard from './contributor-card';
import './credit-page.css';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const contributors = [
  {
    name: "Sarah Theoulle",
    role: "Contributrice",
    github: "https://github.com/stheoulle",
  },
  {
    name: "Isalyne Llinares--rames",
    role: "Contributrice",
    github: "https://github.com/isalyne34",
  },
  {
    name: "Baptiste Bronsin",
    role: "Contributeur",
    github: "https://github.com/baptistebronsin",
  },
  {
    name: "Hugo Dupeloux",
    role: "Contributeur",
    github: "https://github.com/pontatot",
  },
  {
    name: "Pierre-Louis Leclerc",
    role: "Contributeur",
    github: "https://github.com/Proxyfil",
  },
  {
    name: "Damien Rodriguez ",
    role: "Contributeur",
    github: "https://github.com/RodriguezDamien",
  },
  {
    name: "Thomas Rubini",
    role: "Contributeur",
    github: "https://github.com/thomasrubini",
  },
  {
    name: "Nathael Bonnal",
    role: "Contributeur",
    github: "https://github.com/NathaelB",
  },
];

const CreditPage = () => {

    return (
        <div className={`credit-page`}>
          <h1 className="title">Crédits du Projet</h1>
      
          <div className="contributors-list">
            {contributors.map((contributor, index) => (
              <ContributorCard key={index} contributor={contributor} />
            ))}
          </div>
      
          <div className="contribution-chart">
            <img
              src="assets/credits/image.png"  // Spécifiez le chemin relatif de l'image
              alt="Graphique de participation"
              className="contribution-image" // Ajoutez une classe pour personnaliser l'image via CSS
            />
          </div>
        </div>
      );
      
};

export default CreditPage;
