import image1 from "./assets/Frame 151.png";
import image2 from "./assets/Frame 151 (1).png";
import image3 from "./assets/Frame 151 (2).png";
import image4 from "./assets/Frame 151 (3).png";
import image5 from "./assets/Frame 151 (4).png";
import image6 from "./assets/Frame 151 (5).png";
import image7 from "./assets/Frame 151 (6).png";
import image8 from "./assets/Frame 151 (7).png";
import image9 from "./assets/Frame 151 (8).png";
import image10 from "./assets/Frame 151 (9).png";
import image11 from "./assets/Frame 151 (10).png";
import image12 from "./assets/Frame 151 (11).png";
import image13 from "./assets/Frame 151 (12).png";
import image14 from "./assets/Frame 151 (13).png";
import image15 from "./assets/Frame 151 (14).png";
import image16 from "./assets/Frame 151 (15).png";
import filter from "./assets/setting-5.png";
import star from "./assets/Star 2.png";

import Navbar from "./Navbar";

const Places = () => {
  const fullList = [
    {
      id: "1",
      image: image1,
    },
    {
      id: "2",
      image: image2,
    },
    {
      id: "3",
      image: image3,
    },
    {
      id: "4",
      image: image4,
    },
    {
      id: "5",
      image: image5,
    },
    {
      id: "6",
      image: image6,
    },
    {
      id: "7",
      image: image7,
    },
    {
      id: "8",
      image: image8,
    },
    {
      id: "9",
      image: image9,
    },
    {
      id: "10",
      image: image10,
    },
    {
      id: "11",
      image: image11,
    },
    {
      id: "12",
      image: image12,
    },
    {
      id: "13",
      image: image13,
    },
    {
      id: "14",
      image: image14,
    },
    {
      id: "15",
      image: image15,
    },
    {
      id: "16",
      image: image16,
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="location container">
        <div className="location-names">
          <h4>restaurant</h4>
          <h4>cottage</h4>
          <h4>castle</h4>
          <h4>fantast city</h4>
          <h4>beach</h4>
          <h4>carbins</h4>
          <h4>off-grid</h4>
          <h4>farm</h4>
        </div>
        <div className="location-filter">
          <h5>location</h5>
          <img src={filter} alt="filter" />
        </div>
      </div>
      <div className="full-place">
        {fullList.map((list) => {
          const { id, image } = list;
          return (
            <div className="adv-list" key={id}>
              <img src={image} alt="places" />
              <div className="card-text">
                <div className="card-text-flex">
                  <h3>Desert king</h3>
                  <h3 className="bold">1MBT per night</h3>
                </div>
                <div className="card-text-flex">
                  <h3>2345km away</h3>
                  <h3>available for 2weeks stay</h3>
                </div>
                <div className="card-stars">
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Places;
