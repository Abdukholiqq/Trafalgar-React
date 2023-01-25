

import Trillustration from "../images/trafalgar-illustration sec02 1.png"

function Leading () {
    return (
      <div className="container">
        <div className="img-download">
          <img
            src={Trillustration}
            alt="illustration"
            width="550"
            height="450"
          />
          <div className="download-text">
            <h1 className="hero-heading">Leading healthcare providers</h1>
            <p className="hero-dwld">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone. To us, it's not just
              work. We take pride in the solutions we deliver
            </p> 
              <button className="download learn" href="#">
                Learn More
              </button> 
          </div>
        </div>
      </div>
    );
}
export default Leading;