import illustration3 from "../images/trafalgar-illustration sec03 1.png";

function DownloadMobile () {
    return (
      <div className="container">
        <div className="img-download">
          <div className="download-text">
            <h1 className="hero-heading">Download our mobile apps</h1>
            <p className="hero-dwld">
              Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely
            </p>
             
              <button className="download learn" href="#">
                Download
              </button>
             
          </div>
          <img
            src={illustration3}
            alt="illustration"
            width="550"
            height="450"
          />
        </div>
      </div>
    );
}
export default DownloadMobile;