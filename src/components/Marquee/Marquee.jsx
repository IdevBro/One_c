import React from "react";
import Images from "../Images/Images";

const Marquee = () => {
  return (
    <>
      <div className="container">
        <h3 className="marqueTitle">Компании которые выбирают 1С-Товары</h3>
      </div>
      <div className="marquee">
        <div className="logos">
          {[...Array(4)].map((_, i) => (
            <div className="support" key={i}>
              <div className="imgMarquee">
                <img src={Images.support1} alt="Support 1" />
              </div>
              <div className="imgMarquee">
                <img src={Images.support2} alt="Support 2" />
              </div>
              <div className="imgMarquee">
                <img src={Images.support3} alt="Support 3" />
              </div>
              <div className="imgMarquee">
                <img src={Images.support4} alt="Support 4" />
              </div>
              <div className="imgMarquee">
                <img src={Images.support5} alt="Support 5" />
              </div>
              <div className="imgMarquee">
                <img src={Images.support6} alt="Support 6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Marquee;
