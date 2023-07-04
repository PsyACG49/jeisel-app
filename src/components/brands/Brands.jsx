import BRAND0 from "../../assets/imgs/brand0.png";
import BRAND1 from "../../assets/imgs/brand1.png";
import BRAND2 from "../../assets/imgs/brand2.png";
import BRAND3 from "../../assets/imgs/brand3.png";
import BRAND4 from "../../assets/imgs/brand4.png";
import BRAND5 from "../../assets/imgs/brand5.png";
import BRAND6 from "../../assets/imgs/brand6.png";
import BRAND7 from "../../assets/imgs/brand7.png";
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
            <img src={BRAND0} alt="logotipo de marca patrocinadora" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img__brand"
              src={BRAND1}
              alt="logotipo de marca patrocinadora"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img__brand"
              src={BRAND2}
              alt="logotipo de marca patrocinadora"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img__brand"
              src={BRAND3}
              alt="logotipo de marca patrocinadora"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img__brand"
              src={BRAND4}
              alt="logotipo de marca patrocinadora"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img__brand"
              src={BRAND5}
              alt="logotipo de marca patrocinadora"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img__brand"
              src={BRAND6}
              alt="logotipo de marca patrocinadora"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img__brand"
              src={BRAND7}
              alt="logotipo de marca patrocinadora"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Brands;
