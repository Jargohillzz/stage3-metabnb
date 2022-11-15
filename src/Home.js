import HeroPage from "./HeroPage";
import List from "./List";
import Nft from "./Nft";
import Sponsor from "./Sponsor";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroPage />
      <Sponsor />
      <List />
      <Nft />
    </div>
  );
};

export default Home;
