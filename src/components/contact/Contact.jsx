import { useRef, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import emailjs from "@emailjs/browser";
import LOADER from "../../assets/imgs/loader.svg";

import "./contact.css";

const Contact = () => {
  const [loader, setLoader] = useState(false);
  const [sended, setSended] = useState(false);
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    emailjs
      .sendForm(
        "service_vsyc2gw",
        "template_e57qycw",
        form.current,
        "PBmdkAK_PuaLgbldv"
      )
      .then((res) => {
        if (res.status === 200) {
          setLoader(false);
          setSended(true);
          setTimeout(() => {
            setSended(false);
          }, 4000);
        }
      })
      .catch((error) => console.log(error));
    form.current.reset();
  };
  return (
    <section className="contact" id="contact">
      <div className="contact__socials">
        <h3 className="section__subtitle">Redes sociales:</h3>
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
      <form ref={form} className="contact__form" onSubmit={handleSubmit}>
        <h3 className="section__subtitle">Contacto</h3>
        <div className="form__input">
          <label htmlFor="name">Nombre :</label>
          <input name="name" type="text" id="name" required />
        </div>
        <div className="form__input">
          <label htmlFor="email">Correo :</label>
          <input name="email" type="email" id="email" required />
        </div>
        <div className="form__input">
          <label htmlFor="message" className="label__textarea">
            Mensaje :
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            required
          ></textarea>
        </div>
        <button className="form__btn">Enviar</button>
        {loader && <img src={LOADER} alt="loader de pagina" />}
        {sended && <p>Mensaje enviado</p>}
      </form>
    </section>
  );
};

export default Contact;
