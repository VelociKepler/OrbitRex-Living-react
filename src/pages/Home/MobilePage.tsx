import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Footer from "../../components/Footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image1 from "../../images/Homepage/express-delivery.png";
import Image2 from "../../images/Homepage/refund.png";
import Image3 from "../../images/Homepage/shield.png";
import Image4 from "../../images/Homepage/chair2.jpg";
import Image5 from "../../images/Homepage/Cabinet.jpg";
import Image6 from "../../images/Homepage/bed.jpg";
import Image7 from "../../images/Homepage/chair.png";
import Image8 from "../../images/Homepage/sofa.png";
import Image9 from "../../images/Homepage/table.png";
import Image12 from "../../images/Homepage/designservice.jpg";
import Image13 from "../../images/Homepage/service.png";
import Image14 from "../../images/Homepage/home-solution-item-3.png";
function MobilePage() {
  return (
    <>
      {/* warranty section */}
      <div className="mx-5 relative -translate-y-10">
        <div className="flex gap-2">

          <div className="w-full flex flex-col justify-center items-center shadow-md p-5">
            <img src={Image1} alt="" className="w-16 mb-5" />
            <h1 className="text-lg font-bold text-center">จัดส่งฟรี ทั่วประเทศ</h1>
          </div>
          <div className="w-full flex flex-col justify-center items-center shadow-md">
            <img src={Image2} alt="" className="w-16 mb-5" />
            <h1 className="text-xl font-bold text-center">นโยบายการคืนเงิน</h1>
          </div>
          <div className="w-full flex flex-col justify-center items-center shadow-md">
            <img src={Image3} alt="" className="w-16 mb-5" />
            <h1 className="text-xl font-bold text-center">รับประกันสินค้า</h1>
          </div>

        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="mt-10 mx-10">

        <h1 className="text-2xl font-bold">New Arrivals</h1>
        <h1 className="h-0.5 w-36 bg-orange-500 mb-10"></h1>

        <div className="flex flex-col justify-center gap-8">
          {[
            { img: Image4, brand: "BRAND", price: "2,490 บาท" },
            { img: Image5, brand: "BRAND", price: "1,500 บาท" },
            { img: Image6, brand: "BRAND", price: "24,000 บาท" },
          ].map((item, index) => (
            <Link to="" key={index} className="relative block group">
              <img
                src={item.img}
                alt={`${item.brand} ${item.price}`}
                className="w-full h-auto object-cover"
              />
              <h1 className="text-4xl font-bold text-white absolute bottom-5 left-5">
                {item.brand} <br />
                {item.price}
              </h1>
            </Link>
          ))}
        </div>
      </div>

      {/* categories section */}
      <div className="py-10 flex flex-col justify-center mx-10 gap-5">
        <div className="flex justify-between w-full mb-10">
          <h1 className="text-xl font-bold">
            Shop
            <br /> by categories
          </h1>
          <button className="font-bold text-center text-sm text-white bg-orange-500 px-4 rounded-full">
            ดูสินค้าทั้งหมด
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          <Link to="">
            <img src={Image7} alt="" className="h-52" />
            <h1 className="text-xl text-center font-bold">CHAIR</h1>
          </Link>
          <Link to="">
            <img src={Image8} alt="" className="h-52" />
            <h1 className="text-xl text-center font-bold">SOFA</h1>
          </Link>
          <Link to="">
            <img src={Image9} alt="" className="h-52" />
            <h1 className="text-xl text-center font-bold">TABLE</h1>
          </Link>
        </div>
      </div>

      {/* service section*/}
      <div className="mx-10 mb-10">
        <h1 className="text-3xl font-bold w-[100px] border-b-2 border-orange-500 mb-10">
          Service
        </h1>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="flex w-full h-40 rounded-lg shadow-lg">
              <img src={Image12} alt="" className="w-20 rounded-s-lg" />
              <div className="flex flex-col m-5">
                <h1 className="text-sm font-bold 2xl:text-xl">
                  บริการให้คำปรึกษา ออกแบบภายใน พร้อมติดตั้ง
                </h1>
                <p className="text-sm">
                  ช่วยคุณได้ทุกงานเล็กใหญ่เรื่องบ้าน ตั้งแต่หา ไอเดียตกแต่ง
                  ออกแบบ เลือกสินค้า และรีโนเวตต่อเติม
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex w-full h-40 rounded-lg shadow-lg">
              <img src={Image13} alt="" className="w-20 rounded-s-lg" />
              <div className="flex flex-col m-5">
                <h1 className="text-sm font-bold">
                  บริการงานช่าง ซ่อมแซม ปรับปรุงเฉพาะจุด
                </h1>
                <p className="text-sm">
                  ครอบคลุมงานบริการกว่า 41 ประเภท ไว้ใจได้ ไม่ทิ้งงาน
                  การันตีงานเสร็จตรงเวลา รับประกันงานสูงสุด 1 ปี
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex w-full h-40 rounded-lg shadow-lg">
              <img src={Image14} alt="" className="w-20 rounded-s-lg" />
              <div className="flex flex-col m-5">
                <h1 className="text-sm font-bold">
                  บริการติดตั้งสินค้า ดูแลรักษา และทำความสะอาด
                </h1>
                <p className="text-sm">
                  ผู้ให้บริการหลากหลาย เปรียบเทียบง่าย
                  และสามารถเลือกซื้อสินค้าพร้อมบริการติดตั้งได้
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Footer Section */}
      <div>
        <Footer />
      </div>
    </>
  );
}

export default MobilePage;
