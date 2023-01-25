// import Hero from "./Main"
import lupa from "../images/lupa.png";
import frame from "../images/Frame.png";
import consultation from "../images/consultation.png";
import personalNetbuk from "../images/personal notebook.png";
import pharmacy from "../images/pharmacy box.png";
import tracking from "../images/Tracking.png"; 

function Table () {
    return ( 
        <section className="Table">
        <div className="container">
          <div className="table-text-container">
            <div className="Table-text-our">
              <h2>Our services</h2>
              <hr />
              <p>
                We provide to you the best choiches for you.Adjust it to your
                health needs and make sure your undergo treatment with our
                highly qualified doctors you can consult with us which type of
                service is suitable for your health
              </p>
            </div>
          </div>
          <div className="Table-box">
            <div className="Table-text">
              <img className="table-img" src={lupa} alt="lupa" />
              <h3 className="name">Search doctor</h3>
              <p className="table-paragraph">
                Choose your doctor from thousands of specialist, general, and
                trusted hospitals
              </p>
            </div>

            <div className="Table-text">
              <img className="table-img" src={frame} alt="drag" />
              <h3 className="name">Online pharmacy</h3>
              <p className="table-paragraph">
                Buy your medicines with our mobile application with a simple
                delivery system
              </p>
            </div>

            <div className="Table-text">
              <img
                className="table-img"
                src={consultation}
                alt="consultation"
              />
              <h3 className="name">Consultation</h3>
              <p className="table-paragraph">
                Free consultation with our trusted doctors and get the best
                recomendations
              </p>
            </div>
          </div>
          <div className="Table-box">
            <div className="Table-text">
              <img
                className="table-img"
                src={personalNetbuk}
                alt="Details info"
              />
              <h3 className="name">Details info</h3>
              <p className="table-paragraph">
                Free consultation with our trusted doctors and get the best
                recomendations
              </p>
            </div>

            <div className="Table-text">
              <img
                className="table-img"
                src={pharmacy}
                alt="Emergency care"
              />
              <h3 className="name">Emergency care</h3>
              <p className="table-paragraph">
                You can get 24/7 urgent care for yourself or your children and
                your lovely family
              </p>
            </div>

            <div className="Table-text">
              <img className="table-img" src={tracking} alt="Tracking" />
              <h3 className="name">Tracking</h3>
              <p className="table-paragraph">
                Track and save your medical history and health data
              </p>
            </div>
          </div>
          
            <button className="learn" href="Learn More">Learn More</button>
          
        </div>
      </section> 
    )
}
export default Table;