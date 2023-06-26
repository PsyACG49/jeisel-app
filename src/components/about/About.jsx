import IMG from "../../assets/imgs/jeiselAbout.png";
import "./about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <h3 className="section__subtitle">Un poco de Jeisél</h3>
      <div className="about__content">
        <p className="about__text">
          En la Casa de la Cultura Infantil del Instituto Tecnológico de
          Veracruz aprendió a tocar jarana, arpa y requinto jarochos.
          Posteriormente estudió Talleres de piano y guitarra en la Escuela
          Libre de Música del Instituto Veracruzano de la Cultura, así como
          dirección coral, ensamble, canto y arreglos musicales para grupos
          escolares, en cursos impartidos por el Instituto Nacional de Bellas
          Artes y el Consejo Nacional para la Cultura y las Artes. <br />
          En febrero de 2013, Eugenia León lo invitó a participar en el
          concierto realizado en el Palacio Nacional de Bellas Artes para
          celebrar los 30 años de carrera artística.
          <br /> La fundación "Hermes Music" le otorgó un reconocimiento por ser
          uno de los músicos mas importantes e innovadores de la música regional
          en México. En Noviembre del mismo año, La asociación MUSICTEC A.C. Lo
          lleva a la feria del libro "Gabriel Garcia Marquez" en la ciudad de
          Bogotá Colombia. Fue invitado para participar en el Homenaje a Abraham
          Laboriel dentro del Festival de Jazz de la CDMX y a la expo soundcheck
          2016 en el World Trade Center Ciudad de México.
          <br /> En el 2015 fue galardonado en varias ocasiones como de los
          mejores espectáculos con raíz en México por Hermes Music, lo que le
          valió ser patrocinado por mas de 15 de reconocido prestigio en la
          industria artística; Audio Technica, JBL, guitarras Babilon, Pianos
          Nord etc. además de ser embajador en México de la misma fundación.
          viajando con ello a diferentes paises del mundo son su propuesta
          musical, como Rusia, Brasil, Eu, Francia, Colombia, guatemala, peru.
          etc.
          <br /> Es invitado al programa “Mexicano Rifado” de Fernanda Familiar
          y la Academia Nacional de Historia y Geografía de la UNAM lo nombra
          Académico honorario por su trayectoria y aportación a la música
          mexicana. Fue becario en el rubro, “Músicos mexicanos que renuevan la
          tradición” del Sistema de apoyos a la creación y proyectos culturales,
          (antes FONCA).
          <br /> Ha desempeñado cargos politicos en el medio de la cultura así
          como en la enseñanza dentro de las máximas casas de estudio del país,
          como el Instituto politecnico Nacional y la Universidad Nacional
          Autonoma de México. Actualmente es patrocinado por prestigiadas
          guitarras "Godin y Takamine" su música la encuentras en todas las
          plataformas digitales.
        </p>
        <img src={IMG} alt="Jeisel en una silla" className="about__img" />
      </div>
    </section>
  );
};

export default About;
