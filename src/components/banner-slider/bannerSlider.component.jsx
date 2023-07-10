import Slider from "react-slick";
import Banner1 from "../../assets/clark-street-mercantile-qnKhZJPKFD8-unsplash.jpg";
import Banner2 from "../../assets/claudio-schwarz-628M6D91QX0-unsplash.jpg";
import Banner3 from "../../assets/force-majeure-00tlC0Clfrs-unsplash.jpg";
import "./bannerSlider.component.scss"

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    focusOnSelect: false,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={Banner1} alt="Clothing Banner" className="banner-image" />
      </div>
      <div>
        <img src={Banner2} alt="Clothing Banner" className="banner-image" />
      </div>
      <div>
        <img src={Banner3} alt="Clothing Banner" className="banner-image" />
      </div>
    </Slider>
  );
};


export default BannerSlider;