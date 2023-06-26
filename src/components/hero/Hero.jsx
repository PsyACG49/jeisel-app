import IMGJEISEL from "../../assets/imgs/jeiselHero.png";
import IMG from "../../assets/imgs/helps.png";
import IMG2 from "../../assets/imgs/helps2.png";

import "./hero.css";
const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__front"></div>
      <div className="hero__graphics">
        <div className="graphics__container">
          <img
            src={IMG}
            alt="notas de animacion"
            className="graphics__graphic-notes"
          />
          <img
            src={IMG2}
            className="graphics__graphic-instruments"
            alt="instrumentos de animacion"
          />
        </div>
      </div>
      <div className="hero__image" data-aos="fade-right">
        <img
          src={IMGJEISEL}
          alt="Cantautor Jeisél Torres tocando violin"
          className="image__img"
        />
      </div>
      <div className="hero__text" data-aos="fade-left">
        <h1 className="text__title">Jeisél Torres Semblanza</h1>
        <p className="text__subtitle">
          Cantautor, arreglista, productor y multi-instrumentista.
        </p>
      </div>
    </section>
  );
};

export default Hero;
