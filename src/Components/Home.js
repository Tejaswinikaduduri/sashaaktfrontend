import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <main>
    <div class="intro">
      <h1>SASHAKTH</h1>
      <p>App for child empowerment.</p>
     
    </div>
    <div class="achievements">
      <div class="work">
        <Link to="/stories" className="work-heading"> 
        <i class="fas fa-atom"></i><b>STORIES.</b>
        
    
      </Link>
        
        <p class="work-text">Stories make learning effective, and that is why children engage so well with storytelling..</p>
      </div>
      <div class="work">
        <Link to ="/play" className="work-heading">
        <i class="fas fa-skiing"></i>
        <i class="work-heading"></i><b>GAMES.</b>
        </Link>
        <p class="work-text">Games helps in enhancing mental health of children.</p>
      </div>
      
      <div class="work">
        <Link to="/see" className="work-heading">
        <i class="fas fa-ethernet"></i>
        <i class="work-heading"></i><b>MULTIMEDIA VISUALS.</b>
        </Link>
        <p class="work-text">Mutlimedia visuals helps grasping things easily .</p>
      </div>

     
     
    </div>
    <div class="AIM-OF-PROJECT">
      <div class="AIM-OF-PROJECT-text">
        <h2>AIM OF PROJECT.</h2>
        <p>To create a fun, interactive, and engaging gamified platform that educates children in
            India about their rights and empowers them to stand up for themselves and others.
            Target audience: The platform is intended for children between the ages of 8 and 16,
            and will be designed to be inclusive and accessible to all children regardless of their
            socio-economic background, gender, or other demographic factors</p>
      </div>
      <img src="https://res.cloudinary.com/dkhfzpkw2/image/upload/v1700126261/9rMz4hyW_400x400_njyovq.png" alt="me"/>
    </div>
  </main>
     );
}
 
export default Home;