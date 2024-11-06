import React, { useState, useRef, useEffect } from "react";
import Icons from "../Icons/Icons";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
import { Navigation, Autoplay } from "swiper/modules";
import Images from "../Images/Images";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Stati = () => {
  const swiperRef = React.useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;

      const updateButtonStates = () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      };

      swiperInstance.on("slideChange", updateButtonStates);

      updateButtonStates();

      return () => {
        swiperInstance.off("slideChange", updateButtonStates);
      };
    }
  }, []);
  return (
    <div className="stati">
      <div className="container">
        <div className="row">
          <div className="title">
            <h3>База знаний </h3>
            <button className="headerBtn">Все статьи</button>
          </div>
          <Swiper
            // install Swiper modules
            ref={swiperRef}
            modules={[Navigation, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
          >
            <SwiperSlide>
              <div className="imgBox">
                <img src={Images.slider1} alt="" />
              </div>
              <div className="textBox">
                <p>Методы и формулы расчета торговой наценки</p>
                <a href="#">Читать статью</a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="imgBox">
                <img src={Images.slider2} alt="" />
              </div>
              <div className="textBox">
                <p>Ассортимент продуктового ассортимента</p>
                <a href="#">Читать статью</a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="imgBox">
                <img src={Images.slider3} alt="" />
              </div>
              <div className="textBox">
                <p>Методы и формулы расчета торговой наценки</p>
                <a href="#">Читать статью</a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="imgBox">
                <img src={Images.slider1} alt="" />
              </div>
              <div className="textBox">
                <p>Методы и формулы расчета торговой наценки</p>
                <a href="#">Читать статью</a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="imgBox">
                <img src={Images.slider2} alt="" />
              </div>
              <div className="textBox">
                <p>Методы и формулы расчета торговой наценки</p>
                <a href="#">Читать статью</a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="imgBox">
                <img src={Images.slider3} alt="" />
              </div>
              <div className="textBox">
                <p>Методы и формулы расчета торговой наценки</p>
                <a href="#">Читать статью</a>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="navigation">
            <button
              className={`prev ${isBeginning ? "disabled" : ""}`}
              onClick={() => swiperRef.current.swiper.slidePrev()}
              disabled={isBeginning}
            >
              <Icons.prev />
            </button>
            <button
              className={`next ${isEnd ? "disabled" : ""}`}
              onClick={() => swiperRef.current.swiper.slideNext()}
              disabled={isEnd}
            >
              <Icons.next />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stati;
