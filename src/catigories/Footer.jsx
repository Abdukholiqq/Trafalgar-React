import logo from "../images/logo.svg";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footur">
          <div className="footur-1">
            <a className="logo" href="http://localhost:3000/">
              <img src={logo} alt="Trafalgar logo" width="160" height="41" />
            </a>
            <br />
            <h4>
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </h4>
            <br />
            <a href="#">©Trafalgar PTY LTD 2020. All rights reserved</a>
          </div>

          <div className="footur-1">
            <ul className="footur-ul">
              <li>
                <strong> Company</strong>
              </li>
              <li>About</li>
              <li>Testimonials</li>
              <li>Find a doctor</li>
              <li>Apps</li>
            </ul>
          </div>
          <div className="footur-1">
            <ul className="footur-ul">
              <li>
                <strong> Region</strong>
              </li>
              <li>Indonesia</li>
              <li>Sengapore</li>
              <li>Hongkong</li>
              <li>Canada</li>
            </ul>
          </div>
          <div className="footur-1">
            <ul className="footur-ul">
              <li>
                <strong> Help</strong>
              </li>
              <li>Help center</li>
              <li>Contact support</li>
              <li>Instructions</li>
              <li>How it works</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;