import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "./assets/Vector (1).png";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import PopUp from "./PopUp";

const Navbar = () => {
  const navRef = useRef();
  const [isModal, setIsModal] = useState(false);
  const handleModal = () => {
    document.querySelector("#root").parentElement.classList.toggle("no-scroll");
    setIsModal(!isModal);
    navRef.current.classList.remove("show-links");
  };

  const handleToggle = () => {
    console.log(navRef.current);
    navRef.current.classList.toggle("show-links");
  };
  const links = [
    {
      id: 1,
      url: "/",
      text: "Home",
    },
    {
      id: 2,
      url: "/place-to-stay",
      text: "Place to Stay",
    },
    {
      id: 3,
      url: "/",
      text: "NFTs",
    },
    {
      id: 4,
      url: "/",
      text: "communities",
    },
  ];
  return (
    <div className="navbar container">
      <div className="nav-header">
        <img src={logo} alt="logo" />
        <button className="btn-toggle" onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} className="bars" />
        </button>
      </div>
      <div className="links-container">
        <div className="linkss" ref={navRef}>
          <ul className="links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={url} className="link">
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="connect">
            <button className="connect-btn" onClick={handleModal}>
              connect wallet
            </button>
          </div>
        </div>
        <PopUp
          trigger={isModal}
          setTrigger={setIsModal}
          handleModal={handleModal}
        />
      </div>
    </div>
  );
};

export default Navbar;
