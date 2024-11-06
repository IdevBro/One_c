import React from "react";
import Images from "../Images/Images";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="left">
            <div className="logoBox">
              <img src={Images.logo} alt="" />
              <p>1С-Товары</p>
            </div>
            <div className="contactBox">
              <div className="left">
                <p>Линия консультации</p>
                <p className="number">+7(495)-111-00-10</p>
              </div>
              <div className="left">
                <p>Наш e-mail info@rozn.info</p>
                <p className="number">info@rozn.info</p>
              </div>
              <button className="headerBtn">Заказать звонок</button>
            </div>
            <p className="portalLink">
              Для активации перейдите на <a href="#">portal.1c.ru </a> или
              обратитесь к Вашему партнеру 1С.
            </p>
            <p className="instruktsiya">Инструкция по установке сервиса</p>
          </div>
          <div className="middle">
            <h4>Информация</h4>
            <div className="insTextBox">
              <p className="insText">Как это работает</p>
              <p className="insText">Инструкции</p>
              <p className="insText">Блог</p>
              <p className="insText">О нас</p>
            </div>
          </div>
          <div className="middle">
            <h4>Продукты</h4>
            <div className="insTextBox">
              <p className="insText">1С-Ритейл Чекер Демо</p>
              <p className="insText">
                1С-Товары.Тестовый для магазина на 1 месяц
              </p>
              <p className="insText">1С-Ритейл Чекер</p>
              <p className="insText">1С-Товары 300</p>
              <p className="insText">1С-Товары 30000</p>
            </div>
          </div>
        </div>
        <div className="bottomRow">
          <p>1С-Товары © 2023</p>
          <p>
            Сайт создан - <a href="#">wtstudio.ru</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
