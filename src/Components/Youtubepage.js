import { Link } from "react-router-dom";
import './Youtubepage.css'; // Import the CSS file for styling

const Youtubepage = () => {
  return (
    <div className="ytbackground-image">
      <div>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-lg-4 mb-3">
                    <Link to="/yt/N14_XNH8Mqs">
                    <div class="card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div class="card-body">
                            <img  src="vi.jpg" className="img-fluid" alt="Video Thumbnail"/>
                        </div>
                    </div>
                    </Link>
                </div>
                
                
                <div class="col-lg-4 mb-3">
                    <Link to="/yt/jg1O9hjtj58">
                    <div class="card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div class="card-body">
                            <img  src="rig.jpg" className="img-fluid" alt="Video Thumbnail" />
                        </div>
                    </div>
                    </Link>
                </div>
                <div class="col-lg-4 mb-3">
                    <Link to="/yt/ZtKPr1tpsQ0">
                    <div class="card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div class="card-body">
                            <img  src="righ.jpg" className="img-fluid" alt="Video Thumbnail"/>
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
                            <img  src="right.jpg" className="img-fluid" alt="Video Thumbnail"/>
                        </div>
                    </div>
                    </Link>
                </div>
                <div class="col-lg-4 mb-3">
                    <Link to="/yt/_cp1aiGFVHc">
                    <div class="card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div class="card-body">
                            <img  src="c-right.jpg" className="img-fluid" alt="Video Thumbnail"/>
                        </div>
                    </div>
                    </Link>
                </div>
                <div class="col-lg-4 mb-3">
                    <Link to="/yt/QGLnnk46UQ0">
                    <div class="card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div class="card-body">
                            <img  src="child.jpg" className="img-fluid" alt="Video Thumbnail"/>
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