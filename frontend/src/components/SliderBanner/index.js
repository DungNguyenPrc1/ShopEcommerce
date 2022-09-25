import styles from "./SliderBanner.module.scss";
import classNames from "classnames/bind";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slider1, slider2, slider3, slider4 } from "../../asset";

const cx = classNames.bind(styles);

const SliderBanner = () => {
  var settings = {
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerRow: 2,
    autoplay: true,
    speed: 1000,

    cssEase: "linear",
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={slider1} alt="1" className={cx("sliderImage")} />
        </div>
        <div>
          <img src={slider2} alt="2" className={cx("sliderImage")} />
        </div>
        <div>
          <img src={slider2} alt="3" className={cx("sliderImage")} />
        </div>
        <div>
          <img src={slider2} alt="1" className={cx("sliderImage")} />
        </div>
        <div>
          <img src={slider3} alt="1" className={cx("sliderImage")} />
        </div>{" "}
        <div>
          <img src={slider4} alt="1" className={cx("sliderImage")} />
        </div>
      </Slider>
    </div>
  );
};
export default SliderBanner;
