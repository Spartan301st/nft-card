import "./CardContainer.css";
import cube from "../../assets/image-equilibrium.jpg";
import CardHeader from "../CardHeaders/CardHeader";
import CardParagraph from "../CardParagraph/CardParagraph";
import Author from "../Author/Author";
import eye from "../../assets/icon-view.svg";

const CardContainer = () => {
  return (
    <div className="cardContainer">
      <div className="cubeImgContainer">
        <img src={cube} alt="cube" />
        <div className="imgCyanCover">
          <img src={eye} alt="view" />
        </div>
      </div>
      <CardHeader />
      <CardParagraph />
      <hr />
      <Author />
    </div>
  );
};

export default CardContainer;
