import React, { useState } from "react";
import Icons from "../Icons/Icons";
const Dropdown = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Har bir dropdownni boshqarish
  const handleToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="dropdown">
      <div className="container">
        <h3 className="dropTitle">Ответы на вопросы</h3>
        <div
          className={`row ${openDropdown === 1 ? "open" : ""}`}
          onClick={() => handleToggle(1)}
        >
          <button className="dropdown-button">
            С чего начать работу с 1С-Товары?{<i>{<Icons.next />}</i>}
          </button>
          <div className="dropdown-content">
            <p>Для этого подключите бесплатно новый тариф «1С-Ритейл Чекер».</p>
            <p>
              Каждую неделю вам на почту будет приходить письмо с
              рекомендациями:
            </p>
            <ul>
              <li>
                какие товары необходимо срочно купить, чтобы избежать упущенной
                прибыли из-за пустых полок;
              </li>
              <li>
                какие товары у вас в избытке, а какие следует отнести к
                неликвидам;
              </li>
              <li>
                какие товары стоит пересчитать, чтобы быть уверенным в
                правильности учета.
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`row ${openDropdown === 2 ? "open" : ""}`}
          onClick={() => handleToggle(2)}
        >
          <button className="dropdown-button">
            Средний чек, о чем нам может рассказать?{<i>{<Icons.next />}</i>}
          </button>
          <div className="dropdown-content">
            <p>Для этого подключите бесплатно новый тариф «1С-Ритейл Чекер».</p>
            <p>
              Каждую неделю вам на почту будет приходить письмо с
              рекомендациями:
            </p>
            <ul>
              <li>
                какие товары необходимо срочно купить, чтобы избежать упущенной
                прибыли из-за пустых полок;
              </li>
              <li>
                какие товары у вас в избытке, а какие следует отнести к
                неликвидам;
              </li>
              <li>
                какие товары стоит пересчитать, чтобы быть уверенным в
                правильности учета.
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`row ${openDropdown === 3 ? "open" : ""}`}
          onClick={() => handleToggle(3)}
        >
          <button className="dropdown-button">
            Сценарии автозаказа сервиса 1С-Товары{<i>{<Icons.next />}</i>}
          </button>
          <div className="dropdown-content">
            <h3>Как подключить 1С-Ритейл Чекер* и 1С-Товары?</h3>
            <p>Для этого подключите бесплатно новый тариф «1С-Ритейл Чекер».</p>
            <p>
              Каждую неделю вам на почту будет приходить письмо с
              рекомендациями:
            </p>
            <ul>
              <li>
                какие товары необходимо срочно купить, чтобы избежать упущенной
                прибыли из-за пустых полок;
              </li>
              <li>
                какие товары у вас в избытке, а какие следует отнести к
                неликвидам;
              </li>
              <li>
                какие товары стоит пересчитать, чтобы быть уверенным в
                правильности учета.
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`row ${openDropdown === 4 ? "open" : ""}`}
          onClick={() => handleToggle(4)}
        >
          <button className="dropdown-button">
            Как подключить 1С-Ритейл Чекер* и 1С-Товары?
            {<i>{<Icons.next />}</i>}
          </button>
          <div className="dropdown-content">
            <p>Для этого подключите бесплатно новый тариф «1С-Ритейл Чекер».</p>
            <p>
              Каждую неделю вам на почту будет приходить письмо с
              рекомендациями:
            </p>
            <ul>
              <li>
                какие товары необходимо срочно купить, чтобы избежать упущенной
                прибыли из-за пустых полок;
              </li>
              <li>
                какие товары у вас в избытке, а какие следует отнести к
                неликвидам;
              </li>
              <li>
                какие товары стоит пересчитать, чтобы быть уверенным в
                правильности учета.
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`row ${openDropdown === 5 ? "open" : ""}`}
          onClick={() => handleToggle(5)}
        >
          <button className="dropdown-button">
            Методы и формулы расчета торговой наценки{<i>{<Icons.next />}</i>}
          </button>
          <div className="dropdown-content">
            <p>Для этого подключите бесплатно новый тариф «1С-Ритейл Чекер».</p>
            <p>
              Каждую неделю вам на почту будет приходить письмо с
              рекомендациями:
            </p>
            <ul>
              <li>
                какие товары необходимо срочно купить, чтобы избежать упущенной
                прибыли из-за пустых полок;
              </li>
              <li>
                какие товары у вас в избытке, а какие следует отнести к
                неликвидам;
              </li>
              <li>
                какие товары стоит пересчитать, чтобы быть уверенным в
                правильности учета.
              </li>
            </ul>
          </div>
        </div>
        <div className="notDrop">
          <p>
            Переходи в раздел “Как это работает” , что бы получить больше
            полезной информации Как это работает
          </p>
          <button>Как это работает</button>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
