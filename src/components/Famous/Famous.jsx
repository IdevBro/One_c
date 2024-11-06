import React, { useState, useRef, useEffect } from "react";
import Icons from "../Icons/Icons";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Famous = () => {
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
    <div className="famous">
      <div className="container">
        <div className="row">
          <div className="title">
            <h3>Популярные продукты</h3>
            <button className="headerBtn">Все продукты</button>
          </div>
          <Swiper
            // install Swiper modules
            ref={swiperRef}
            modules={[Navigation, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
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
              <div className="titleBox">
                <h3>1С-Товары 30000</h3>
                <button className="sliderBtn">400 руб/мес</button>
              </div>
              <ul>
                <li>
                  Прогноз спроса с использованием сервера прогнозирования
                  (ограничение – 300 товаров)
                </li>
                <li>
                  Контроль товарных остатков и автоматический заказ товаров
                  (ограничение – 300 товаров)
                </li>
                <li>
                  Прогноз спроса с использованием сервера прогнозирования
                  (ограничение – 300 товаров)
                </li>

                <li>
                  Анализ работы розничного магазина или сети магазинов
                  Рекомендации по управлению ассортиментом (1С-Ритейл Чекер)
                </li>
              </ul>
              <div className="link">
                <a href="#">
                  Подробнее
                  <i>
                    <Icons.arrow />
                  </i>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="titleBox">
                <h3>1С-Товары 30000</h3>
                <button className="sliderBtn">400 руб/мес</button>
              </div>
              <ul>
                <li>
                  Прогноз спроса с использованием сервера прогнозирования
                  (ограничение – 300 товаров)
                </li>
                <li>
                  Контроль товарных остатков и автоматический заказ товаров
                  (ограничение – 300 товаров)
                </li>
                <li>
                  Прогноз спроса с использованием сервера прогнозирования
                  (ограничение – 300 товаров)
                </li>

                <li>
                  Анализ работы розничного магазина или сети магазинов
                  Рекомендации по управлению ассортиментом (1С-Ритейл Чекер)
                </li>
              </ul>
              <div className="link">
                <a href="#">
                  Подробнее
                  <i>
                    <Icons.arrow />
                  </i>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="titleBox">
                <h3>1С-Товары 30000</h3>
                <button className="sliderBtn">400 руб/мес</button>
              </div>
              <ul>
                <li>
                  Прогноз спроса с использованием сервера прогнозирования
                  (ограничение – 300 товаров)
                </li>
                <li>
                  Контроль товарных остатков и автоматический заказ товаров
                  (ограничение – 300 товаров)
                </li>
                <li>
                  Прогноз спроса с использованием сервера прогнозирования
                  (ограничение – 300 товаров)
                </li>

                <li>
                  Анализ работы розничного магазина или сети магазинов
                  Рекомендации по управлению ассортиментом (1С-Ритейл Чекер)
                </li>
              </ul>
              <div className="link">
                <a href="#">
                  Подробнее
                  <i>
                    <Icons.arrow />
                  </i>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="titleBox">
                <h3>1С-Товары 30000</h3>
                <button className="sliderBtn">400 руб/мес</button>
              </div>
              <ul>
                <li>
                  Прогноз спроса с использованием сервера прогнозирования
                  (ограничение – 300 товаров)
                </li>
                <li>
                  Контроль товарных остатков и автоматический заказ товаров
                  (ограничение – 300 товаров)
                </li>
                <li>
                  Прогноз спроса с использованием сервера прогнозирования
                  (ограничение – 300 товаров)
                </li>

                <li>
                  Анализ работы розничного магазина или сети магазинов
                  Рекомендации по управлению ассортиментом (1С-Ритейл Чекер)
                </li>
              </ul>
              <div className="link">
                <a href="#">
                  Подробнее
                  <i>
                    <Icons.arrow />
                  </i>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="titleBox">
                <h3>1С-Товары 30000</h3>
                <button className="sliderBtn">400 руб/мес</button>
              </div>
              <ul>
                <li>
                  Прогноз спроса с использованием сервера прогнозирования
                  (ограничение – 300 товаров)
                </li>
                <li>
                  Контроль товарных остатков и автоматический заказ товаров
                  (ограничение – 300 товаров)
                </li>
                <li>
                  Прогноз спроса с использованием сервера прогнозирования
                  (ограничение – 300 товаров)
                </li>

                <li>
                  Анализ работы розничного магазина или сети магазинов
                  Рекомендации по управлению ассортиментом (1С-Ритейл Чекер)
                </li>
              </ul>
              <div className="link">
                <a href="#">
                  Подробнее
                  <i>
                    <Icons.arrow />
                  </i>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="titleBox">
                <h3>1С-Товары 30000</h3>
                <button className="sliderBtn">400 руб/мес</button>
              </div>
              <ul>
                <li>
                  Прогноз спроса с использованием сервера прогнозирования
                  (ограничение – 300 товаров)
                </li>
                <li>
                  Контроль товарных остатков и автоматический заказ товаров
                  (ограничение – 300 товаров)
                </li>
                <li>
                  Прогноз спроса с использованием сервера прогнозирования
                  (ограничение – 300 товаров)
                </li>

                <li>
                  Анализ работы розничного магазина или сети магазинов
                  Рекомендации по управлению ассортиментом (1С-Ритейл Чекер)
                </li>
              </ul>
              <div className="link">
                <a href="#">
                  Подробнее
                  <i>
                    <Icons.arrow />
                  </i>
                </a>
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

export default Famous;
