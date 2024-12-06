import React, { useState, useEffect } from 'react';

const TemperatureGame = () => {
  // Température initiale et plage idéale
  const [temperature, setTemperature] = useState(20);
  const [sunHeat, setSunHeat] = useState(0);
  const [volcanicHeat, setVolcanicHeat] = useState(0);
  const [humanActivity, setHumanActivity] = useState(0);
  const [score, setScore] = useState(0);

  const targetMinTemperature = 18;
  const targetMaxTemperature = 22;

  // Événements aléatoires qui affectent la température
  const [randomEvent, setRandomEvent] = useState('');
  const [eventEffect, setEventEffect] = useState(0);

  // Fonction pour générer des événements aléatoires
  const generateRandomEvent = () => {
    const events = [
      { name: 'Tempête solaire', effect: 2 },
      { name: 'Éruption volcanique', effect: 3 },
      { name: 'Réduction de l\'activité humaine', effect: -1 },
      { name: 'Période de refroidissement', effect: -2 },
      { name: 'Aucune perturbation', effect: 0 }
    ];
    const randomEventIndex = Math.floor(Math.random() * events.length);
    setRandomEvent(events[randomEventIndex].name);
    setEventEffect(events[randomEventIndex].effect);
  };

  // Mise à jour de la température en fonction des sources et des événements
  useEffect(() => {
    // Applique les effets des sources et des événements
    const newTemperature = 20 + sunHeat + volcanicHeat + humanActivity + eventEffect;
    setTemperature(newTemperature);
    // Met à jour le score en fonction de l'ajustement réussi de la température
    if (newTemperature >= targetMinTemperature && newTemperature <= targetMaxTemperature) {
      setScore(prevScore => prevScore + 1);
    }
  }, [sunHeat, volcanicHeat, humanActivity, eventEffect]);

  // Fonction pour ajuster la chaleur du soleil
const handleSunHeatChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSunHeat(Number(event.target.value));
};

  // Fonction pour ajuster la chaleur des volcans
  const handleVolcanicHeatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolcanicHeat(Number(event.target.value));
  };

  // Fonction pour ajuster la chaleur de l'activité humaine
  const handleHumanActivityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHumanActivity(Number(event.target.value));
  };

  // Vérifier si la température est dans la plage idéale
  const isTemperatureIdeal = temperature >= targetMinTemperature && temperature <= targetMaxTemperature;

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Jeu de Température de la Planète</h1>
      <p>Température actuelle : {temperature}°C</p>
      <p>Plage idéale : {targetMinTemperature}°C - {targetMaxTemperature}°C</p>
      <div style={{ margin: '20px 0' }}>
        <p>Ajuster la chaleur du soleil :</p>
        <input
          type="range"
          min="-5"
          max="5"
          value={sunHeat}
          onChange={handleSunHeatChange}
        />
        <p>Chaleur du soleil : {sunHeat}</p>
      </div>
      <div style={{ margin: '20px 0' }}>
        <p>Ajuster la chaleur des volcans :</p>
        <input
          type="range"
          min="-5"
          max="5"
          value={volcanicHeat}
          onChange={handleVolcanicHeatChange}
        />
        <p>Chaleur des volcans : {volcanicHeat}</p>
      </div>
      <div style={{ margin: '20px 0' }}>
        <p>Ajuster l'activité humaine :</p>
        <input
          type="range"
          min="-5"
          max="5"
          value={humanActivity}
          onChange={handleHumanActivityChange}
        />
        <p>Chaleur de l'activité humaine : {humanActivity}</p>
      </div>
      <div style={{ marginTop: '20px' }}>
        {isTemperatureIdeal ? (
          <p style={{ color: 'green', fontWeight: 'bold' }}>Température idéale atteinte ! 🎉</p>
        ) : (
          <p style={{ color: 'red' }}>
            Température actuelle : {temperature}°C. Ajustez les éléments !
          </p>
        )}
      </div>
      <div style={{ marginTop: '20px' }}>
        <p>Événement actuel : {randomEvent}</p>
        <button onClick={generateRandomEvent}>Générer un événement</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <p style={{ fontSize: '18px' }}>Score : {score}</p>
      </div>
    </div>
  );
};

export default TemperatureGame;
