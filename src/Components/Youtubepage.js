import { Link } from "react-router-dom";
import './Youtubepage.css'; // Import the CSS file for styling

const Youtubepage = () => {
  return (
    <div>
      <div>
        <div class="container mt-5">
          <div class="row">
            <div class="col-lg-4 mb-3">
              <Link to="/yt/N14_XNH8Mqs">
                <div class="card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                  <div class="card-body">
                    <img src="https://res.cloudinary.com/dkhfzpkw2/image/upload/v1705513373/NICCY_All-children-have-rights-group-scaled_jks6nm.jpg" className="img-fluid" alt="Video Thumbnail"/>
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-lg-4 mb-3">
              <Link to="/yt/jg1O9hjtj58">
                <div class="card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                  <div class="card-body">
                    <img src="https://res.cloudinary.com/dkhfzpkw2/image/upload/v1703780527/photo-1502086223501-7ea6ecd79368_jtpuhl.jpg" className="img-fluid" alt="Video Thumbnail" />
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-lg-4 mb-3">
              <Link to="/yt/ZtKPr1tpsQ0">
                <div class="card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                  <div class="card-body">
                    <img src="https://res.cloudinary.com/dkhfzpkw2/image/upload/v1704447120/two-kids-hugging-earth-globe-cartoon-style_1308-126936.jpg_ixn9re.jpg" className="img-fluid" alt="Video Thumbnail"/>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div class="container mt-5">
          <div class="row">
            <div class="col-lg-4 mb-3">
              <Link to="/yt/gS9xOczDEZY">
                <div class="card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                  <div class="card-body">
                    <img src="https://res.cloudinary.com/dkhfzpkw2/image/upload/v1699902751/UN0321665_0_ifoffr.jpg" className="img-fluid" alt="Video Thumbnail"/>
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-lg-4 mb-3">
              <Link to="/yt/_cp1aiGFVHc">
                <div class="card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                  <div class="card-body">
                    <img src="https://res.cloudinary.com/dkhfzpkw2/image/upload/v1699902754/hero-bangladesh-humanitarian-crises-86628_pfpkv7.jpg" className="img-fluid" alt="Video Thumbnail"/>
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-lg-4 mb-3">
              <Link to="/yt/QGLnnk46UQ0">
                <div class="card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                  <div class="card-body">
                    <img src="https://res.cloudinary.com/dkhfzpkw2/image/upload/v1699902205/9c1d402e-ed9e-49e3-874b-dd86d5500408-f33c93f671fd.small_ktvmgc.jpg" className="img-fluid" alt="Video Thumbnail"/>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtubepage;
