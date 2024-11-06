import React from "react";
import Images from "../../components/Images/Images";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="left">
            <h1>Управление запасами розничного магазина</h1>
            <p>
              Использование сервиса 1С-Товары позволяет значительно упростить
              работу по формированию заявок поставщику.
            </p>
            <button className="headerBtn">Заказать демонстрацию</button>
          </div>
          <div className="right">
            <img src={Images.header} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
