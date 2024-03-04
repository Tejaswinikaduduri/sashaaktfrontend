import React, { useState, useEffect, useRef } from 'react';
import basketImage from './basket.jpg'; // Import your basket image

const Catch = () => {
  const [score, setScore] = useState(0);
  const [misses, setMisses] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const basketRef = useRef(null);
  const [fallingItems, setFallingItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isGameOver || !basketRef.current) return;

      const basketWidth = basketRef.current.offsetWidth;
      const halfBasketWidth = basketWidth / 2;
      const mouseX = e.clientX;

      let basketX = mouseX - halfBasketWidth;

      if (basketX < 0) {
        basketX = 0;
      } else if (basketX + basketWidth > window.innerWidth) {
        basketX = window.innerWidth - basketWidth;
      }

      basketRef.current.style.left = basketX + 'px';
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isGameOver]);

  const fallingItemImages = [
    'https://res.cloudinary.com/dkhfzpkw2/image/upload/v1699902754/hero-bangladesh-humanitarian-crises-86628_pfpkv7.jpg',
    'https://res.cloudinary.com/dkhfzpkw2/image/upload/v1699954899/UNI458388_Med-res_2C_with_credit_watermark_0_xgldvq.jpg',
    'https://res.cloudinary.com/dkhfzpkw2/image/upload/v1705578186/joining-forces-graphic-300x127_t6p4ec.png',
    // Add more image paths as needed
  ];

  const createFallingItem = () => {
    if (isGameOver || !basketRef.current) return;

    const randomImagePath =
      fallingItemImages[Math.floor(Math.random() * fallingItemImages.length)];

    const newItem = {
      id: Date.now(),
      left: Math.random() * (window.innerWidth - 80),
      top: -60,
      imagePath: randomImagePath,
      speed: Math.floor(Math.random() * 5) + 2, // Adjust the falling speed as needed
    };

    setFallingItems((prevItems) => [...prevItems, newItem]);
  };

  const updateScore = () => {
    document.title = `Score: ${score}`;
  };

  const endGame = () => {
    setIsGameOver(true);
    setShowPopup(true);
  };

  const resetGame = () => {
    setScore(0);
    setMisses(0);
    setIsGameOver(false);
    setShowPopup(false);
    document.title = 'Catch the Rights';
    createFallingItem();
  };

  const closePopup = () => {
    setShowPopup(false);
    resetGame();
  };

  useEffect(() => {
    const intervalId = setInterval(createFallingItem, 1000);
    return () => clearInterval(intervalId);
  }, [isGameOver]);

  useEffect(() => {
    const fallingItemInterval = setInterval(() => {
      setFallingItems((prevItems) =>
        prevItems.map((item) => ({
          ...item,
          top: item.top + item.speed * 1.5, // Adjust the falling speed as needed
        }))
      );
    }, 50);

    return () => clearInterval(fallingItemInterval);
  }, []);

  useEffect(() => {
    const newFallingItems = fallingItems.filter((item) => item.top <= window.innerHeight);
    setFallingItems(newFallingItems);

    if (newFallingItems.length === 0 && !isGameOver) {
      createFallingItem();
    }
  }, [fallingItems, isGameOver]);

  useEffect(() => {
    fallingItems.forEach((item) => {
      const basketX = parseInt(basketRef.current.style.left);
      const basketY = parseInt(basketRef.current.style.bottom);
      const itemX = parseInt(item.left);

      if (
        itemX >= basketX &&
        itemX <= basketX + basketRef.current.offsetWidth &&
        basketY <= 60
      ) {
        setScore((prevScore) => prevScore + 1);
        updateScore();
        setFallingItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
      }
    });
  }, [fallingItems]);

  useEffect(() => {
    if (misses >= 10 || score >= 10) {
      endGame();
    }
  }, [misses, score]);

  return (
    <div>
      <header style={{ textAlign: 'center' }}>
        <h1>Catch the Rights</h1>
      </header>

      <main style={{ position: 'relative', height: '400px' }}>
        {fallingItems.map((item) => (
          <div
            key={item.id}
            className="falling-item"
            style={{
              position: 'absolute',
              width: '80px',
              left: `${item.left}px`,
              top: `${item.top}px`,
              textAlign: 'center',
            }}
          >
            <img
              src={item.imagePath}
              alt="Falling Item"
              style={{ width: '100%', borderRadius: '50%' }}
            />
            <div style={{ fontSize: '10px', marginTop: '5px' }}>Child Right</div>
          </div>
        ))}
        <img
          ref={basketRef}
          src={basketImage}
          alt="Basket"
          id="basket"
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '120px',
            height: '100px',
          }}
        />
      </main>

      {showPopup && (
        <div
          id="popup"
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            width: '100%',
            height: '100%',
            zIndex: 999,
          }}
        >
          <div
            id="popup-content"
            style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '10px',
              textAlign: 'left',
              position: 'relative',
            }}
          >
            <span
              id="close-popup"
              onClick={closePopup}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                cursor: 'pointer',
              }}
            >
              X
            </span>
            <p>Child Rights Information:</p>
            <p>- Right to Education: Every child has the right to education.</p>
            <img
              src="https://res.cloudinary.com/dkhfzpkw2/image/upload/v1699902754/hero-bangladesh-humanitarian-crises-86628_pfpkv7.jpg"
              alt="Education"
              width="100"
            />
            <p>- Right to Health: Children have the right to good health and healthcare.</p>
            <img
              src="https://res.cloudinary.com/dkhfzpkw2/image/upload/v1699902751/UN0321665_0_ifoffr.jpg"
              alt="Health"
              width="100"
            />
            <p>- Right to Play: Children have the right to play and rest.</p>
            <img
              src="https://res.cloudinary.com/dkhfzpkw2/image/upload/v1705715604/large-group-of-joyful-kids-running-with-a-kite-in-springtime--1185810377-dcb01232039742648e6c978b22d94991_vvke3o.jpg"
              alt="Play"
              width="100"
            />
            {/* Add more rights-related information and images as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Catch;
