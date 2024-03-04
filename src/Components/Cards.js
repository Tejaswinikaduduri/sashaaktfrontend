import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Change here

import Catch from './Catch';
import Participation from './participation';
import CandyGame from './CandyGame';
import CandyAbout from './CandyAbout';
import CandyHome from './CandyHome';
import CandyEatGame from './CandyEatGame';

const Card = ({ cardNumber, imageUrl, additionalText, bottomText, onClick }) => {
  const cardStyle = {
    width: '250px',
    height: '350px',
    borderRadius: '12px',
    margin: '20px',
    overflow: 'hidden',
    cursor: 'pointer',
    position: 'relative',
    transition: 'box-shadow 0.3s',
    boxShadow: '0 0 0 2px #000',
  };

  const cardContentStyle = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: 'pink',
    color: '#fff',
    borderRadius: '10px',
  };

  const imgStyle = {
    width: '100%',
    height: '80%',
    borderRadius: '10px 10px 0 0',
  };

  const textAtBottomStyle = {
    fontSize: '1rem',
    color: '#fff',
    textAlign: 'center',
    marginTop: '10px',
  };

  return (
    <Link to={cardNumber === 1 ? '/participation' : cardNumber === 2 ? '/candyhome' : cardNumber === 3 ? '/catch' : '/candygame'} style={{ textDecoration: 'none' }}>
      <div style={cardStyle} onClick={() => onClick(cardNumber)}>
        <div style={cardContentStyle}>
          <img src={imageUrl} alt={Image} style={imgStyle} />
          <div style={{ fontSize: '1.5rem', margin: '0' }}>{additionalText}</div>
          <div style={textAtBottomStyle}>{bottomText}</div>
        </div>
      </div>
    </Link>
  );
};

const Cards = () => {
  const [showParticipation, setShowParticipation] = useState(false);
  const [showCatch, setShowCatch] = useState(false);
  const [showCandyComponents, setShowCandyComponents] = useState(false); // Track if Candy-related components should be shown
  const navigate = useNavigate(); // Change here
  const location = useLocation(); // Change here

  useEffect(() => {
    // Determine if Candy-related components should be shown based on the URL
    setShowCandyComponents(location.pathname === '/candyhome');
  }, [location.pathname]);

  const handleCardClick = (cardNumber) => {
    setShowParticipation(cardNumber === 1);
    setShowCatch(cardNumber === 3);
    navigate(cardNumber === 1 ? '/participation' : cardNumber === 2 ? '/candyhome' : cardNumber === 3 ? '/catch' : '/candygame'); // Change here
  };

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '100px',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    fontWeight: 'bold',
    fontSize: '1.5rem',
  };

  const cardData = [
    {
      cardNumber: 1,
      imageUrl: 'https://res.cloudinary.com/dkhfzpkw2/image/upload/v1705883312/2DJsnXt0MmfRWv54GSQGsPriwnYcHr-8H7C-UO3UszgWSKGh9ZuMVtnwoE2itBZH-O8_p2qsez.png',
      bottomText: 'JIGSAW PUZZLE',
    },
    {
      cardNumber: 2,
      imageUrl: 'https://res.cloudinary.com/dkhfzpkw2/image/upload/v1706802384/C067CBE5-49A3-4F38-AD603B09131118DB_source_ev7axa.jpg',
      bottomText: 'CANDY CRUSH',
    },
    {
      cardNumber: 3,
      imageUrl: 'https://res.cloudinary.com/dkhfzpkw2/image/upload/v1705735703/Fate-of-Game-Preservation-Games-GettyImages-1170073827_dw68ba.jpg',
      bottomText: 'CATCH THE RIGHT',
    },
  ];

  return (
    <div>
      <div style={cardContainerStyle}>
        {cardData.map((card) => (
          <Card
            key={card.cardNumber}
            cardNumber={card.cardNumber}
            imageUrl={card.imageUrl}
            additionalText={card.additionalText}
            bottomText={card.bottomText}
            onClick={handleCardClick}
          />
        ))}
      </div>

      {showParticipation && <Participation />}
      {showCatch && <Catch />}
      {/* Only render the Candy-related components if showCandyComponents is true */}
      {showCandyComponents && (
        <>
          <CandyGame />
          <CandyAbout />
          <CandyHome />
          <CandyEatGame />
        </>
      )}
    </div>
  );
};

export default Cards;
