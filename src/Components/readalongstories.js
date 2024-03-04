import React from 'react';
import { useNavigate } from 'react-router-dom';

const Readalongstories = ({ openQuiz }) => {
  const navigate = useNavigate();

  const containerStyle = {
    width: '70%',
    margin: 'auto',
  };

  const imageUrls = [
    "https://res.cloudinary.com/dkhfzpkw2/image/upload/v1700276265/Screenshot_73_nfilsx.png",
    "https://res.cloudinary.com/dkhfzpkw2/image/upload/v1700276286/Screenshot_74_daqryp.png",
    "https://res.cloudinary.com/dkhfzpkw2/image/upload/v1700276308/Screenshot_75_lcdra7.png",
    "https://res.cloudinary.com/dkhfzpkw2/image/upload/v1700276333/Screenshot_76_oop80c.png",
    "https://res.cloudinary.com/dkhfzpkw2/image/upload/v1700276349/Screenshot_77_ehispr.png",
    "https://res.cloudinary.com/dkhfzpkw2/image/upload/v1700276366/Screenshot_78_wjnwp5.png",
    "https://res.cloudinary.com/dkhfzpkw2/image/upload/v1700276381/Screenshot_79_hjisoi.png",
  ];

  const handleNextButtonClick = () => {
    navigate('/read2'); // Navigate to the Read2 component
  };

  const handleQuizButtonClick = () => {
    openQuiz();
    navigate('/question'); // Navigate to the Question component
  };

  return (
    <div style={containerStyle}>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        data-bs-interval="3000"
      >
        <ol className="carousel-indicators">
          {imageUrls.map((url, index) => (
            <li
              key={index}
              data-target="#carouselExampleIndicators"
              data-slide-to={index}
              className={index === 0 ? 'active' : ''}
            ></li>
          ))}
        </ol>

        <div className="carousel-inner">
          {imageUrls.map((url, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img
                className="d-block w-100"
                src={url}
                alt={`Slide ${index + 1}`}
              />
              {index === imageUrls.length - 1 && (
                <div className="carousel-caption d-flex align-items-center justify-content-between">
                  <button className="btn btn-primary btn-lg" onClick={handleQuizButtonClick}>
                    Click Me
                  </button>
                  <div className="custom-button-container">
                    {/* Custom button at bottom right corner of the last slide */}
                    <button className="btn btn-success btn-lg" onClick={handleNextButtonClick}>
                      NEXT
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Readalongstories;
