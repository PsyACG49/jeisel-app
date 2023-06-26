import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

import "./conatct.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__socials">
        <h3 className="section__subtitle">
          Contactame o visita mis redes sociales:
        </h3>
        <div className="socials__container">
          <a
            href="https://www.facebook.com/jeiseltorres"
            className="socials__item"
            target="blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/jeiseltorres"
            className="socials__item"
            target="blank"
            rel="noreferrer"
          >
            <BiLogoInstagramAlt />
          </a>
          <a
            href="https://www.youtube.com/@JeiselTorres"
            className="socials__item"
            target="blank"
            rel="noreferrer"
          >
            <AiFillYoutube />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5215514636164"
            className="socials__item"
            target="blank"
            rel="noreferrer"
          >
            <IoLogoWhatsapp />
          </a>
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
