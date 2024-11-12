import { Link } from "react-router-dom"
import Image1 from "../../images/Homepage/express-delivery.png"
import Image2 from "../../images/Homepage/refund.png"
import Image3 from "../../images/Homepage/shield.png"
import Image4 from "../../images/Homepage/chair2.jpg"
import Image5 from "../../images/Homepage/Cabinet.jpg"
import Image6 from "../../images/Homepage/bed.jpg"


function MobilePage() {
  return (
    <>
      <div className="mx-10">
        <div className='flex gap-5'>
          <div className='w-full flex flex-col justify-center items-center shadow-md p-5'>
            <img src={Image1} alt="" className='w-24 mb-5' />
            <h1 className='text-2xl font-bold'>จัดส่งฟรี ทั่วประเทศ</h1>
          </div>
          <div className='w-full flex flex-col justify-center items-center shadow-md'>
            <img src={Image2} alt="" className='w-24 mb-5' />
            <h1 className='text-2xl font-bold'>นโยบายการคืนเงิน</h1>
          </div>
          <div className='w-full flex flex-col justify-center items-center shadow-md'>
            <img src={Image3} alt="" className='w-24 mb-5' />
            <h1 className='text-2xl font-bold'>รับประกันสินค้า</h1>
          </div>
        </div>
      </div>


      <div className="mt-10 mx-10">
          <h1 className='text-3xl font-bold'>New Arrivals</h1>
          <h1 className='h-0.5 w-44 bg-orange-500 mb-10'></h1>

          <div className='flex justify-center gap-1'>
            <Link to=''>
              <img src={Image4} alt="" className='w-screen h-full' />
              <h1 className='text-2xl font-bold text-white  relative -top-28 left-5 translate-y-2/4 translate-x-0'>BRAND <br />2,490 บาท</h1>
            </Link>
            <Link to=''>
              <img src={Image5} alt="" className='w-screen h-full' />
              <h1 className='text-2xl font-bold text-white relative -top-28 left-5 translate-y-2/4 translate-x-0'>BRAND <br />1,500 บาท</h1>
            </Link>
            <Link to=''>
              <img src={Image6} alt="" className='w-screen h-full' />
              <h1 className='text-2xl font-bold text-white relative -top-28 left-5 translate-y-2/4 translate-x-0'>BRAND <br />24,000 บาท</h1>
            </Link>
          </div>
        </div>
    </>
  )
}

export default MobilePage
