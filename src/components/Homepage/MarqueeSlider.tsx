import image1 from '../../images/Homepage/MarqueeSlider/Cabinet01.jpg';
import image2 from '../../images/Homepage/MarqueeSlider/Cabinet02.jpg';
import image3 from '../../images/Homepage/MarqueeSlider/Cabinet03.jpg';
import image4 from '../../images/Homepage/MarqueeSlider/bed01.jpg';
import image5 from '../../images/Homepage/MarqueeSlider/bed02.jpg';
import image6 from '../../images/Homepage/MarqueeSlider/bed03.jpg';
import image7 from '../../images/Homepage/MarqueeSlider/chair01.jpg';
import image8 from '../../images/Homepage/MarqueeSlider/chair02.jpg';
import image9 from '../../images/Homepage/MarqueeSlider/chair03.jpg';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];
// const urls = []

const MarqueeSlider = () => {
  return (
    <div className="relative overflow-hidden my-10">
      <div className="flex animate-marquee gap-5">

        {images.map((src, index) => (
          <>
           <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-80 h-96 object-cover flex-shrink-0 rounded-2xl transition-all duration-100 hover:border-4"
          />
          </>
        ))}

        {images.map((src, index) => (
           <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-80 h-96 object-cover flex-shrink-0 rounded-2xl transition-all duration-100 hover:border-4"
          />
        ))}

      </div>
    </div>
  );
};

export default MarqueeSlider;
