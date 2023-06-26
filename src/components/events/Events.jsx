import EVENT from "../../assets/imgs/eventoJeisel.jpeg";
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
    <section className="events">
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
            <img src={EVENT} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img__gale" src={EVENT} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img__gale" src={EVENT} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Events;
