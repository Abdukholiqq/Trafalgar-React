
import Edward from "../images/Edward Newgate.png";

function Costumer() {
    return (
      <div className="container">
        <div className="About-Edward-Newgate">
          <h2>What our customer are saying</h2>
          <div className="Newgate-img">
            <img
              src={Edward}
              alt="#"
              width="141"
              height="141"
            />
          </div>
          <div className="Newgate-name">
            Edward Newgate
            <br />
            Founder Circle
          </div>
          <div className="Newgate-coment">
            <p>
              “Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely”
            </p>
          </div>
        </div>
      </div>
    );
}
export default Costumer;