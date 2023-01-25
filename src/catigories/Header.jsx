import logo from "../images/logo.svg"

function Header() {
    return (
      <header className="header">
        <div className="container">
          <div className="header-werapper">
            <a className="logo" href="./Trafalgar-Flex.html">
              <img
                src={logo}
                alt="Trafalgar logo"
                width="160"
                height="41"
              />
            </a>
            <nav className="site-nav">
              <ul className="nav-list">
                <li className="nav-items" href="#">
                  Home
                </li>
                <li className="nav-items" href="#">
                  Apps
                </li>
                <li className="nav-items" href="#">
                  Find a doctor
                </li>
                <li className="nav-items" href="#">
                  Testimonials
                </li>
                <li className="nav-items" href="#">
                  Abaut us
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
}
export default Header;