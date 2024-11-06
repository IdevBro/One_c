import React from "react";
import ServiceCards from "../ServiceCards/ServiceCards";
import Icons from "../Icons/Icons";
const SectionCards = () => {
  const closeObj = [
    { text: "Лишний товар складируется и не продается" },

    {
      text: " Постоянно приходится думать какой продукт будет актуален, а какой стоит выводить из ассортимента",
    },
    { text: " Лишний товар складируется и не продается" },
    {
      text: " Постоянно приходится думать какой продукт будет актуален, а какой стоит выводить из ассортимента",
    },
    { text: "Лишний товар складируется и не продается " },
    {
      text: " Постоянно приходится думать какой продукт будет актуален, а какой стоит выводить из ассортимента",
    },
    { text: " Лишний товар складируется и не продается" },
  ];

  const checkObj = [
    { text: " Организованная система остатков" },
    {
      text: "В магазине есть определенная ассортиментная матрица, поддерживающая актуальный ассортимент  ",
    },
    { text: " Рассчитанный прогноз спроса" },
    {
      text: " В магазине есть определенная ассортиментная матрица, поддерживающая актуальный ассортимент ",
    },
    { text: "Организованная система остатков " },
    {
      text: " В магазине есть определенная ассортиментная матрица, поддерживающая актуальный ассортимент ",
    },
    { text: " Система контроля упущенных продаж" },
  ];
  return (
    <div className="sectionCards">
      <div className="container">
        <div className="row">
          <div className="top">
            <ServiceCards
              icon={<Icons.card1 />}
              title={"Управление запасами"}
              text={
                "Сервис 1С-Товары позволяет рассчитать необходимое количество товаров на полках (уровень запасов), помогает организовать систему контроля за остатками товаров, а также вовремя и в нужном количестве закупать у поставщиков."
              }
            />{" "}
            <ServiceCards
              icon={<Icons.card2 />}
              title={"Автозаказ товаров"}
              text={
                "Сервис 1С-Товары позволяет рассчитать прогноз спроса. Сервис работает с равномерным и редким спросом для разных видов товаров. Автоматически подбирает подходящий метод расчета и позволяет внести корректировки в выполняемые расчеты."
              }
            />
          </div>
          <div className="middle">
            <ServiceCards
              icon={<Icons.card3 />}
              title={"Анализ магазина"}
              text={
                "Система контроля упущенных продаж позволяет увеличить выручку. Средний чек, минимальный чек, максимальный чек - это пример показателей, которые анализирует сервис 1С-Товары, а также предлагает ряд инструментов для управления ценой и торговой наценкой."
              }
              nick={"minCard"}
            />{" "}
            <ServiceCards
              icon={<Icons.card4 />}
              title={"Прогнозирование спроса"}
              text={
                "Сервис 1С-Товары позволяет рассчитать прогноз спроса. Сервис работает с равномерным и редким спросом для разных видов товаров. Автоматически подбирает подходящий метод расчета и позволяет внести корректировки в выполняемые расчеты."
              }
              nick={"minCard"}
            />{" "}
            <ServiceCards
              icon={<Icons.card5 />}
              title={"Управление поставками"}
              text={
                "Сервис 1С-Товары позволяет рассчитать прогноз спроса. Сервис работает с равномерным и редким спросом для разных видов товаров. Автоматически подбирает подходящий метод расчета и позволяет внести корректировки в выполняемые расчеты."
              }
              nick={"minCard"}
            />{" "}
          </div>
          <div className="bottom">
            <ServiceCards
              icon={<Icons.card6 />}
              title={"Управление ассортиментом"}
              text={
                "Сервис 1С-Товары позволяет определить ассортиментную матрицу. Быстро и просто принять решение о том какие товары вывести из ассортимента, а наличие каких увеличить на полках магазина. Сервис позволяет узнать необходимую информацию: динамику продаж и остатков, периоды дефицита, размер оптимального остатка."
              }
            />{" "}
            <ServiceCards
              icon={<Icons.card7 />}
              title={"Управление продажами"}
              text={
                "Система контроля упущенных продаж позволяет увеличить выручку. Средний чек, минимальный чек, максимальный чек - это пример показателей, которые анализирует сервис 1С-Товары, а также предлагает ряд инструментов для управления ценой и торговой наценкой."
              }
            />{" "}
          </div>
        </div>
        <div className="price">
          <div className="left">
            <div>{<Icons.price />}</div>
            <p>
              Подключи любой продукт на 1 месяц бесплатно и оцени наши
              приемущества
            </p>
          </div>
          <button className="headerBtn">Подключить сейчас</button>
        </div>
        <div className="comfort">
          <h3 className="comfortTitle">С нами удобнее</h3>
          <div className="comfortCards">
            <div className="comfortCardClose">
              <h3 className="title">Без 1С-Товары</h3>

              <div>
                {closeObj.map((item, index) => (
                  <div className="text" key={index}>
                    <i>
                      <Icons.close />
                    </i>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="comfortCardCheck">
              <h3>Вместе с 1С-Товары</h3>
              <div>
                {checkObj.map((item, index) => (
                  <div className="text" key={index}>
                    <i>
                      <Icons.check />
                    </i>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCards;