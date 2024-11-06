import React from "react";

const Support = () => {
  return (
    <div className="support">
      <div className="container">
        <div className="row">
          <div className="left">
            <h3>Предоставляем техподдержку для наших клиентов</h3>
            <p>
              Если у вас возникнут сложности с использованием 1С-Товары,
              обращайтесь в нашу техподдержку. Техподдержка работает
              круглосуточно. Вы можете связаться с нами любыми удобными для Вас
              способами. При использовании техпомощи просим соблюдать{" "}
              <a href="#">правила обращения.</a>
            </p>
          </div>
          <div className="right">
            <p>
              Вы можете связаться с нами через <a href="#">1С-Коннект</a> и
              <a href="#"> 1С-Товары. Поддержка пользователей</a>
            </p>
            <div className="phoneMail">
              <div className="phoneBox">
                <p className="nameText">Телефон техподдержки </p>
                <p className="numberText">+7-495-111-00-10</p>
              </div>
              <div className="mailBox">
                <p className="nameText">E-mail техподдержки </p>
                <p className="numberText">info@rozn.info</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
