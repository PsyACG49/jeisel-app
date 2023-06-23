import IMGJEISEL from "../../assets/imgs/jeiselHero.png";
import "./hero.css";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__front"></div>
      <div className="hero__image">
        <img
          src={IMGJEISEL}
          alt="Cantautor Jeisél Torres tocando violin"
          className="image__img"
        />
      </div>
      <div className="hero__text">
        <h1 className="text__title">Jeisél Torres Semblanza</h1>
        <p className="text__subtitle">
          Cantautor, arreglista, productor y multi-instrumentista.
        </p>
      </div>
    </section>
  );
};

export default Hero;
