import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";

import "./conatct.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__socials">
        <h3 className="section__subtitle">
          Contactame o visita mis redes sociales:
        </h3>
        <div className="socials__container">
          <div className="socials__item">
            <FaFacebook />
          </div>
          <div className="socials__item">
            <BiLogoInstagramAlt />
          </div>
          <div className="socials__item">
            <AiFillYoutube />
          </div>
        </div>
      </div>
      <form className="contact__form">
        <div className="form__input">
          <label htmlFor="name">Nombre :</label>
          <input type="text" id="name" />
        </div>
        <div className="form__input">
          <label htmlFor="email">Correo :</label>
          <input type="email" id="email" />
        </div>
        <div className="form__input">
          <label htmlFor="message" className="label__textarea">
            Mensaje :
          </label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>

        <button className="form__btn">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
