import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import MarqueeSlider from "../../components/Homepage/MarqueeSlider";
import Footer from "../../components/Footer";
import Product from "../../components/products/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { backendUrl } from "../../App";

// Importing images
import Image1 from "../../images/Homepage/chair.png";
import Image2 from "../../images/Homepage/sofa.png";
import Image3 from "../../images/Homepage/table.png";
import Image4 from "../../images/Homepage/chair2.jpg";
import Image5 from "../../images/Homepage/Cabinet.jpg";
import Image6 from "../../images/Homepage/bed.jpg";
import Image7 from "../../images/Homepage/livingroom .png";
import Image8 from "../../images/Homepage/kitchenroom.png";
import Image9 from "../../images/Homepage/express-delivery.png";
import Image10 from "../../images/Homepage/refund.png";
import Image11 from "../../images/Homepage/shield.png";
import Image12 from "../../images/Homepage/designservice.jpg";
import Image13 from "../../images/Homepage/service.png";
import Image14 from "../../images/Homepage/home-solution-item-3.png";
import { IProduct } from "../../components/products/Product.type.ts";

// Define ProductType interface for type safety
interface ProductType {
  id: string;
  date: string; // Valid ISO date string
  [key: string]: any; // Extendable for additional properties
}

// Refactored MainHome Component
const MainHome: React.FC = () => {
  const [list, setList] = useState<ProductType[]>([]);

  // Fetch list of products from the backend
  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/products`);
      if (response.data.success) {
        setList(response.data.products.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  // @ts-ignore
  return (
    <div className = "text-black">
      {/* Shop By Categories Section */}
      <div className = "relative -top-20">
        <div className = "h-70 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-20 mx-20 justify-items-center">
          <div className = "flex flex-col items-center">
            <h1 className = "text-2xl font-bold pb-20">
              Shop <br /> by categories
            </h1>
            <button className = "pt-20 font-bold border-b-2 border-transparent hover:border-orange-500 transition-all duration-300">
              <Link to = "/products">
                ALL CATEGORIES <i className = "fa-duotone fa-solid fa-play text-sm"></i>
              </Link>
            </button>
          </div>

          {/* Categories */}
          {[
            { image: Image1, title: "CHAIR" },
            { image: Image2, title: "SOFA" },
            { image: Image3, title: "TABLE" }
          ].map((category, index) => (
            <Link
              key = {index}
              to = ""
              className = "hover:scale-110 transition-all duration-300 flex flex-col items-center"
            >
              <img
                src = {category.image}
                alt = {category.title}
                className = "w-full h-auto max-w-xs"
              />
              <h1 className = "text-2xl text-center font-bold mt-4">{category.title}</h1>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <div className = "relative -top-20">
        <div className = "mx-40 2xl:mx-80">
          <h1 className = "text-3xl font-bold">Featured</h1>
          <h1 className = "h-0.5 w-32 bg-orange-500 mb-10"></h1>
          <div className = "flex justify-center gap-1">
            {[Image4, Image5, Image6].map((image, index) => (
              <Link
                key = {index}
                to = ""
              >
                <img
                  src = {image}
                  alt = ""
                  className = "w-screen h-full"
                />
                <h1 className = "text-2xl font-bold text-white relative -top-28 left-5">
                  BRAND <br /> PRICE
                </h1>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <div className = "mt-10">
        <div className = "mx-40 2xl:mx-80 flex flex-row justify-center gap-5">
          {[Image7, Image8].map((image, index) => (
            <Link
              key = {index}
              to = ""
              className = "hover:scale-110 transition-all duration-300"
            >
              <img
                src = {image}
                alt = ""
                className = "h-full"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Warranty Section */}
      <div className = "mx-40 2xl:mx-80 mt-20 flex gap-5">
        {[Image9, Image10, Image11].map((image, index) => (
          <div
            key = {index}
            className = "w-full flex flex-col justify-center items-center shadow-md p-5"
          >
            <img
              src = {image}
              alt = ""
              className = "w-24 mb-5"
            />
            <h1 className = "text-xl text-center font-bold">Warranty Info</h1>
          </div>
        ))}
      </div>

      {/* New Arrivals Section */}
      <div>
        <div className = "mx-40 2xl:mx-80 mt-20 mb-10 flex flex-row justify-between">
          <h1 className = "text-3xl font-bold">New Arrivals</h1>
          <Link to = "">
            <h1 className = "text-md font-bold border-2 rounded-full p-2">See All Products</h1>
          </Link>
        </div>
      </div>

      <div className = "w-full h-full flex justify-center gap-4">
        {list
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(-4) // get only last 4 products
          .map((product) => {
            // Transform `ProductType` to align with `IProduct`
            const transformedProduct: IProduct = {
              _id: product._id, // Assuming ObjectId is represented as a string
              name: product.name,
              description: product.description,
              category: product.category,
              pricing: product.pricing,
              stock: product.stock,
              images: product.images, // URLs or paths
              color: product.color,
              rating: 5,
              numReviews: 0,
              metadata: product.metadata
            };

            return (
              <div
                key = {transformedProduct._id}
                className = "w-52 h-full"
              >
                <Product product = {transformedProduct} />
              </div>
            );
          })}
      </div>

      {/* Marquee Slider */}
      <div className = "relative">
        <MarqueeSlider />
      </div>

      {/* Service Section */}
      <div className = "mx-5 mb-10">
        <h1 className = "text-3xl font-bold w-[100px] border-b-2 border-orange-500 mb-10">Service</h1>
        <Swiper
          modules = {[Pagination]}
          spaceBetween = {30}
          slidesPerView = {1}
          pagination = {{ clickable: true }}
        >
          {[
            { image: Image12, title: "Interior Design", description: "We help you..." },
            { image: Image13, title: "Repair Services", description: "Trusted repairs..." },
            { image: Image14, title: "Installation & Maintenance", description: "Reliable services..." }
          ].map((service, index) => (
            <SwiperSlide key = {index}>
              <div className = "flex w-full h-60 rounded-lg shadow-lg">
                <img
                  src = {service.image}
                  alt = ""
                  className = "w-52 rounded-s-lg"
                />
                <div className = "flex flex-col justify-center m-2">
                  <h1 className = "text-2xl">{service.title}</h1>
                  <p className = "text-lg">{service.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainHome;