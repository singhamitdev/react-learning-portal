import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const Header = () => {
  const description = ["Fundamental", "Core", "Crucial"];
  function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  const desc = description[getRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>{desc} React concepts required for building any web application</p>
    </header>
  );
};

export default Header;
