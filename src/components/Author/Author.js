import "./Author.css";
import avatar from "../../assets/image-avatar.png";

const Author = () => {
  return (
    <div className="author">
      <div className="authorImageContainer">
        <img src={avatar} alt="Avatar" loading="lazy" />
      </div>
      <p>
        <span className="creationText">Creation of</span> <span className="userName">Jules Wyvern </span>
      </p>
    </div>
  );
};

export default Author;
