import illustration from "../images/illustration.png";
import "../index.css"



 

//    sections

function Hero() {
    return (
      <section className="hero">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-left">
              <h1 className="hero-heading">Virtual healthcare for you</h1>
              <p className="hero-desc">
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </p>
              <a className="ovoid" href="#">
                Consult today
              </a>
            </div>
            <img
              src={illustration}
              alt="illustration"
              width="650"
              height="550"
            />
          </div>
        </div>
      </section>
    );
}

//  2 section





export default Hero;