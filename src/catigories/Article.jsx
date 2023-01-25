import MaskGroup from "../images/Mask Group.png";
import labaratory from "../images/labaratory.png";
import mask from "../images/Mask.png";

function Article () {
    return (
      <div className="container">
        <div className="article">
          <h2>
            <center>Check out our latest article</center>
          </h2>
          <div className="image">
            <div className="article-image">
              <img className="article-img" src={MaskGroup} alt="#" />
              <h3>Disease detection, check up in the laboratory</h3>
              <br />
              <p>
                In this case, the role of the health laboratory is very
                important to do a disease detection...
              </p>
              <br />
              <a className="Read more" href="#">
                Read more
              </a>
            </div>
            <div className="article-image">
              <img className="article-img" src={labaratory} alt="#" />
              <h3>Herbal medicines that are safe for consumption</h3>
              <br />
              <p>
                Herbal medicine is very widely used at this time because of its
                very good for your health...
              </p>
              <br />
              <a className="Read more" href="#">
                Read more
              </a>
            </div>
            <div className="article-image">
              <img className="article-img" src={mask} alt="#" />
              <h3>Natural care for healthy facial skin</h3>
              <br />
              <p>
                A healthy lifestyle should start from now and also for your skin
                health.There are some...
              </p>
              <br />
              <br />
              <a className="Read more" href="#">
                Read more
              </a>
            </div>
          </div>
          <br />
          <br />
          <br />
          <a className="View-all learn" href="View all">
            View all
          </a>
        </div>
      </div>
    );
}
export default Article;