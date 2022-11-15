import image1 from "./assets/Frame 151.png";
import image2 from "./assets/Frame 151 (1).png";
import image3 from "./assets/Frame 151 (2).png";
import image4 from "./assets/Frame 151 (3).png";
import image5 from "./assets/Frame 151 (4).png";
import image6 from "./assets/Frame 151 (5).png";
import image7 from "./assets/Frame 151 (6).png";
import image8 from "./assets/Frame 151 (7).png";
import star from "./assets/Star 2.png";

const List = () => {
  const lists = [
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
  ];
  return (
    <div className="adv-lists">
      <h2 className="adv-text">inspiration for your next adventure</h2>
      <div className="adv-lists-container">
        {lists.map((list) => {
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

export default List;
