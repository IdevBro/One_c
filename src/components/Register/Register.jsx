import React from "react";

const Register = () => {
  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="left">
            <h3>Хотите бесплатную консультацию? Оставляйте заявку</h3>
            <p>
              Оставляйте заявку и наши менеджеры свяжутся с Вами в ближайшее
              время{" "}
            </p>
          </div>
          <div className="right">
            <form>
              <div className="label">
                <label htmlFor="name">Ваше имя</label>
              </div>
              <input id="name" type="text" placeholder="Сергей " />
              <div className="label">
                <label htmlFor="phone">Ваш телефон</label>
              </div>
              <input id="phone" type="text" placeholder="Ваш телефон" />
              <div className="label">
                <label htmlFor="email">Ваш e-mail</label>
              </div>
              <input id="email" type="email" placeholder="Ваш e-mail " />
            </form>
            <div className="formBottom">
              <p>
                Нажимая кнопку вы даете согласие на{" "}
                <span>обработку персональных данных </span>в соответствии с
                <span>политикой конфиденциальности</span>
              </p>
              <button>Отправить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
