import nftImage from "./assets/Frame 59546.png";

const Nft = () => {
  return (
    <div className="nft-container">
      <div className="container nft">
        <div className="nft-text">
          <h1>Metabnb NFTs</h1>
          <p>
            Discover our NFT gift cards collection. Loyal customers gets
            ammazing gift cards which are traded as NFTs. these NFTs gives our
            customer access to loads of our exclusive services.
          </p>
          <button className="nft-btn">Learn more</button>
        </div>
        <div className="nft-img">
          <img src={nftImage} alt="nft" />
        </div>
      </div>
    </div>
  );
};

export default Nft;
