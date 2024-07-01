import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

function PartnerSlider() {
  return (
    <div className="flex flex-col px-5 md:px-10 items-center max-w-3xl py-10">
      <h2 className="text-4xl md:text-7xl font-semibold justify-center mb-4 md:mb-10 p-5 md:p-10 text-center">
        Student Activity <span className="text-purple-800 mr-1 grid place-content-center">Partners</span>
      </h2>
      <Slider {...sliderSettings} className="max-w-full md:max-w-[900px] my-slider">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuDiuwrEZCz3lzKjeLumQEFSZyleJUYPT2IUGDmdUVv6DLJm4DrNZ_R77FUA&s"
            alt="Partner 1"
            className="slider-image mx-auto"
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuDiuwrEZCz3lzKjeLumQEFSZyleJUYPT2IUGDmdUVv6DLJm4DrNZ_R77FUA&s"
            alt="Partner 2"
            className="slider-image mx-auto"
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuDiuwrEZCz3lzKjeLumQEFSZyleJUYPT2IUGDmdUVv6DLJm4DrNZ_R77FUA&s"
            alt="Partner 3"
            className="slider-image mx-auto"
          />
        </div>
      </Slider>
    </div>
  );
}

export default PartnerSlider;
