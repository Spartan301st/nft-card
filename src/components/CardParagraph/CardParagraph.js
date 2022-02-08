import "./CardParagraph.css";
import eth from "../../assets/icon-ethereum.svg";
import clock from "../../assets/icon-clock.svg";

const CardParagraph = () => {
  return (
    <div className="cardParagraph">
      <p className="left-p">
        <img src={eth} alt="ethereum" loading="lazy" />
        0.041 ETH
      </p>
      <p className="right-p">
        <img src={clock} alt="clock" loading="lazy" />3 days left
      </p>
    </div>
  );
};

export default CardParagraph;
