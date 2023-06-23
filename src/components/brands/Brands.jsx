import BRAND from "../../assets/imgs/image.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./brands.css";

// import required modules
import { Autoplay } from "swiper";

const Brands = () => {
  return (
    <section className="brands">
      <h3 className="section__subtitle">Patrocinadores</h3>
      <div className="brands__slider">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={BRAND} alt="logotipo de marca patrocinadora" />
          </SwiperSlide>
          <var>
            <SwiperSlide>
              <img
                className="img__brand"
                src={BRAND}
                alt="logotipo de marca patrocinadora"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img__brand"
                src={BRAND}
                alt="logotipo de marca patrocinadora"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img__brand"
                src={BRAND}
                alt="logotipo de marca patrocinadora"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img__brand"
                src={BRAND}
                alt="logotipo de marca patrocinadora"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img__brand"
                src={BRAND}
                alt="logotipo de marca patrocinadora"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img__brand"
                src={BRAND}
                alt="logotipo de marca patrocinadora"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img__brand"
                src={BRAND}
                alt="logotipo de marca patrocinadora"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img__brand"
                src={BRAND}
                alt="logotipo de marca patrocinadora"
              />
            </SwiperSlide>
          </var>
        </Swiper>
      </div>
    </section>
  );
};

export default Brands;
