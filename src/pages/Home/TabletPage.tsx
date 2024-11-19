import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
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
import Image10 from "../../images/Homepage/livingroom .png";
import Image11 from "../../images/Homepage/kitchenroom.png";
import Image12 from "../../images/Homepage/designservice.jpg";
import Image13 from "../../images/Homepage/service.png";
import Image14 from "../../images/Homepage/home-solution-item-3.png";

function MobilePage() {
  return (
    <>
      {/* warranty section */}
      <div className="mx-10">
        <div className="flex gap-5">
          <div className="w-full flex flex-col justify-center items-center shadow-md p-5">
            <img src={Image1} alt="" className="w-24 mb-5" />
            <h1 className="text-xl font-bold">จัดส่งฟรี ทั่วประเทศ</h1>
          </div>
          <div className="w-full flex flex-col justify-center items-center shadow-md">
            <img src={Image2} alt="" className="w-24 mb-5" />
            <h1 className="text-xl font-bold">นโยบายการคืนเงิน</h1>
          </div>
          <div className="w-full flex flex-col justify-center items-center shadow-md">
            <img src={Image3} alt="" className="w-24 mb-5" />
            <h1 className="text-xl font-bold">รับประกันสินค้า</h1>
          </div>
        </div>
      </div>

      {/* new arrivals section */}
      <div className="mt-10 mx-10">
        <h1 className="text-3xl font-bold">New Arrivals</h1>
        <h1 className="h-0.5 w-44 bg-orange-500 mb-10"></h1>
        <div className="flex justify-center gap-1">
          <Link to="">
            <img src={Image4} alt="" className="w-screen h-full" />
            <h1 className="text-2xl font-bold text-white  relative -top-28 left-5 translate-y-2/4 translate-x-0">
              BRAND <br />
              2,490 บาท
            </h1>
          </Link>
          <Link to="">
            <img src={Image5} alt="" className="w-screen h-full" />
            <h1 className="text-2xl font-bold text-white relative -top-28 left-5 translate-y-2/4 translate-x-0">
              BRAND <br />
              1,500 บาท
            </h1>
          </Link>
          <Link to="">
            <img src={Image6} alt="" className="w-screen h-full" />
            <h1 className="text-2xl font-bold text-white relative -top-28 left-5 translate-y-2/4 translate-x-0">
              BRAND <br />
              24,000 บาท
            </h1>
          </Link>
        </div>
      </div>

      {/* categories section */}
      <div className="py-20 flex justify-center mx-10 gap-5">
        <div className="flex flex-col gap-y-24 items-start w-40">
          <h1 className="text-lg font-bold">
            Shop
            <br /> by categories
          </h1>
          <button className="font-bold">ALL CATEGORIES  <i className="fa-duotone fa-solid fa-play text-sm"></i></button>
        </div>
        <div className="h-70 grid grid-cols-3 gap-14">
          <Link to="">
            <img src={Image7} alt="" className="h-36" />
            <h1 className="text-xl text-center font-bold">CHAIR</h1>
          </Link>
          <Link to="">
            <img src={Image8} alt="" className="h-36" />
            <h1 className="text-xl text-center font-bold">SOFA</h1>
          </Link>
          <Link to="">
            <img src={Image9} alt="" className="h-36" />
            <h1 className="text-xl text-center font-bold">TABLE</h1>
          </Link>
        </div>
      </div>

      {/* room section */}
      <div className="mb-10">
        <div className='mx-10 flex flex-row justify-center gap-10'>
          <Link to='' className='hover:scale-110 transition-all duration-300'>
            <img src={Image10} alt="" className='h-full' />
          </Link>
          <Link to='' className='hover:scale-110 transition-all duration-300'>
            <img src={Image11} alt="" className='h-full' />
          </Link>
        </div>
      </div>


      {/* service section*/}
      <div className="mx-10 my-10">
      <h1 className="text-3xl font-bold w-[100px] border-b-2 border-orange-500 mb-10">Service</h1>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="flex w-full h-60 rounded-lg shadow-lg">
            <img src={Image12} alt="" className="w-48 rounded-s-lg" />
            <div className="flex flex-col m-5">
              <h1 className="text-lg font-bold 2xl:text-xl">
                บริการให้คำปรึกษา ออกแบบภายใน พร้อมติดตั้ง
              </h1>
              <br />
              <p>
                ช่วยคุณได้ทุกงานเล็กใหญ่เรื่องบ้าน ตั้งแต่หา ไอเดียตกแต่ง ออกแบบ เลือกสินค้า และรีโนเวตต่อเติม
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex w-full h-60 rounded-lg shadow-lg">
            <img src={Image13} alt="" className="w-48 rounded-s-lg" />
            <div className="flex flex-col m-5">
              <h1 className="text-xl font-bold">บริการงานช่าง ซ่อมแซม ปรับปรุงเฉพาะจุด</h1>
              <br />
              <p>
                ครอบคลุมงานบริการกว่า 41 ประเภท ไว้ใจได้ ไม่ทิ้งงาน การันตีงานเสร็จตรงเวลา รับประกันงานสูงสุด 1 ปี
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex w-full h-60 rounded-lg shadow-lg">
            <img src={Image14} alt="" className="w-48 rounded-s-lg" />
            <div className="flex flex-col m-5">
              <h1 className="text-xl font-bold">
                บริการติดตั้งสินค้า ดูแลรักษา และทำความสะอาด
              </h1>
              <br />
              <p>
                ผู้ให้บริการหลากหลาย เปรียบเทียบง่าย และสามารถเลือกซื้อสินค้าพร้อมบริการติดตั้งได้
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>

    </>
  );
}

export default MobilePage;
