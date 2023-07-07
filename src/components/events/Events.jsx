import EVENT0 from "../../assets/imgs/eventoJeisel.jpeg";
import EVENT1 from "../../assets/imgs/evento2.jpg";
import EVENT2 from "../../assets/imgs/evento1.jpg";
import EVENT3 from "../../assets/imgs/evento.jpg";
import EVENT4 from "../../assets/imgs/fla.jpeg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./events.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

const Events = () => {
  return (
    <section className="events" id="events">
      <h3 className="section__subtitle" data-aos="zoom-in">
        Eventos
      </h3>
      <div className="events__slider" data-aos="zoom-in">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[Autoplay, EffectCoverflow, Pagination]}
        >
          <SwiperSlide>
            <img className="img__gale" src={EVENT4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={EVENT0} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img__gale" src={EVENT1} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img__gale" src={EVENT2} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img__gale" src={EVENT3} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Events;
