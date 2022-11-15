import footerLogo from "./assets/Vector (3).png";
import footerName from "./assets/Vector (4).png";
import fb from "./assets/Vector (5).png";
import tw from "./assets/Vector (6).png";
import ig from "./assets/instagram-216-721958.png";
import c from "./assets/Vector (7).png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer-container">
      <div className="container footer">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={footerLogo} className="logo-house" alt="footer house" />
            <img src={footerName} className="logo-metabnb" alt="meta" />
          </div>
          <div className="footer-social">
            <img src={fb} alt="social" />
            <img src={ig} alt="social" />
            <img src={tw} alt="social" />
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-tab">
            <h4>Community</h4>
            <p>NFTs</p>
            <p>Tokens</p>
            <p>Lanlords</p>
            <p>Discord</p>
          </div>
          <div className="footer-tab">
            <h4>Places</h4>
            <p>Castle</p>
            <p>Farms</p>
            <p>Beach</p>
            <p>Learn more</p>
          </div>
          <div className="footer-tab">
            <h4>About us</h4>
            <p>Road map</p>
            <p>Creators</p>
            <p>Career</p>
            <p>COntact us</p>
          </div>
        </div>
      </div>
      <h4>
        <img src={c} alt="" /> {year} Metabnb
      </h4>
    </div>
  );
};

export default Footer;
