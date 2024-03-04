import React from 'react';
import { Link } from 'react-router-dom';

const Read2 = () => {
  return (
    <div>
      <div className="heading-box text-center mb">
        <h1>READ ALONG...</h1>
      </div>
      <div className="main">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-interval="false">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://res.cloudinary.com/djpqj3nhr/image/upload/v1705846769/Screenshot_2024-01-21_192207_sigjws.png"
                className="d-block w-100" height="500" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src="https://res.cloudinary.com/djpqj3nhr/image/upload/v1705846897/Screenshot_2024-01-21_192243_ljogwt.png"
                className="d-block w-100" height="500" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img src="https://res.cloudinary.com/djpqj3nhr/image/upload/v1705846908/Screenshot_2024-01-21_192255_g58t3e.png"
                className="d-block w-100" height="500" alt="Slide 3" />
            </div>
            <div className="carousel-item">
              <img src="https://res.cloudinary.com/djpqj3nhr/image/upload/v1705846942/Screenshot_2024-01-21_192315_entsot.png"
                className="d-block w-100" height="500" alt="Slide 4" />
            </div>
            <div className="carousel-item">
              <img src="https://res.cloudinary.com/djpqj3nhr/image/upload/v1705846956/Screenshot_2024-01-21_192334_h2exnl.png"
                className="d-block w-100" height="500" alt="Slide 5" />
            </div>
            <div className="carousel-item">
              <img src="https://res.cloudinary.com/djpqj3nhr/image/upload/v1705846989/Screenshot_2024-01-21_192354_qu5qis.png"
                className="d-block w-100" height="500" alt="Slide 6" />
            </div>
            <div className="carousel-item">
              <img src="https://res.cloudinary.com/djpqj3nhr/image/upload/v1705847003/Screenshot_2024-01-21_192418_abdmio.png"
                className="d-block w-100" height="500" alt="Slide 7" />
            </div>
            <div className="carousel-item">
              <img src="https://res.cloudinary.com/djpqj3nhr/image/upload/v1705847025/Screenshot_2024-01-21_192444_io8r3l.png"
                className="d-block w-100" height="500" alt="Slide 8" />
            </div>
            <div className="carousel-item">
              <img src="https://res.cloudinary.com/djpqj3nhr/image/upload/v1705847072/Screenshot_2024-01-21_192504_hdvziy.png"
                className="d-block w-100" height="500" alt="Slide 9" />
            </div>
            <div className="carousel-item">
              <img src="https://res.cloudinary.com/djpqj3nhr/image/upload/v1705847056/Screenshot_2024-01-21_192517_alseim.png"
                className="d-block w-100" height="500" alt="Slide 10" />
            </div>
            {/* Add more carousel items with different images if needed */}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="text-center mt-4">
        <h1>Did we get it right??</h1>
        <Link to="/quiz2" className="btn btn-warning">
          Let's See
        </Link>
      </div>
    </div>
  );
};

export default Read2;
