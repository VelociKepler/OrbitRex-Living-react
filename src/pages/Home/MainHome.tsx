import Image1 from '../../images/Homepage/chair.png'
import Image2 from '../../images/Homepage/sofa.png'
import Image3 from '../../images/Homepage/table.png'
import Image4 from '../../images/Homepage/chair2.jpg'
import Image5 from '../../images/Homepage/Cabinet.jpg'
import Image6 from '../../images/Homepage/bed.jpg'
import Image7 from '../../images/Homepage/livingroom .png'
import Image8 from '../../images/Homepage/kitchenroom.png'
import Image9 from '../../images/Homepage/express-delivery.png'
import Image10 from '../../images/Homepage/refund.png'
import Image11 from '../../images/Homepage/shield.png'
import { Link } from 'react-router-dom'

function MainHome() {
    return (

        // Desktop
        <div >

            {/* Main Section 1 */}
            <div className='relative -top-20'>
                <div className='h-70 flex flex-wrap justify-center gap-36 my-10 mx-20'>
                    <div className='my-10 py-14'>
                        <h1 className='text-2xl font-bold'>Shop <br />by categories</h1>
                        <button className='font-bold mt-24'>ALL CATEGORIES <i className="fa-duotone fa-solid fa-play text-sm"></i></button>
                    </div>
                    <Link to='' className='my-10 h-60'>
                        <img src={Image1} alt="" className='h-52 py-10' />
                        <h1 className='text-2xl font-bold'>Chair</h1>
                    </Link>
                    <Link to='' className='my-10 h-60'>
                        <img src={Image2} alt="" className='h-52 py-12' />
                        <h1 className='text-2xl font-bold'>Sofa</h1>
                    </Link>
                    <Link to='' className='my-10 h-60'>
                        <img src={Image3} alt="" className='h-52 py-10' />
                        <h1 className='text-2xl font-bold'>Table</h1>
                    </Link>
                </div>
            </div>

            {/* Main Section 2 */}
            <div className='relative -top-20'> 
                <div className='mx-72'>
                    <h1 className='text-3xl font-bold'>New Arrivals</h1>
                    <h1 className='h-0.5 w-44 bg-orange-500 mb-10'></h1>

                    <div className='flex justify-center gap-1'>
                        <Link to=''>
                            <img src={Image4} alt="" className='w-screen h-full'/>
                            <h1 className='text-2xl font-bold text-white  relative -top-28 left-5 translate-y-2/4 translate-x-0'>BRAND <br />2,490 บาท</h1>
                        </Link>
                        <Link to=''>
                            <img src={Image5} alt="" className='w-screen h-full'/>
                            <h1 className='text-2xl font-bold text-white relative -top-28 left-5 translate-y-2/4 translate-x-0'>BRAND <br />1,500 บาท</h1>
                        </Link>
                        <Link to=''>
                            <img src={Image6} alt="" className='w-screen h-full'/>
                            <h1 className='text-2xl font-bold text-white relative -top-28 left-5 translate-y-2/4 translate-x-0'>BRAND <br />24,000 บาท</h1>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Section 3   */}
            <div className='mt-10'>
                <div className='mx-72 flex flex-row justify-center gap-5'>
                    <Link to=''>
                        <img src={Image7} alt="" className='h-full'/>
                    </Link>
                    <Link to=''>
                        <img src={Image8} alt="" className='h-full'/>
                    </Link>
                </div>
            </div>

            {/* Warranty Section */}
            <div className='mx-72 mt-20 flex gap-5'>
                <div className='w-full flex flex-col justify-center items-center shadow-md p-5'>
                    <img src={Image9} alt="" className='w-24 mb-5'/>
                    <h1 className='text-2xl font-bold'>จัดส่งฟรี ทั่วประเทศ</h1>
                </div>
                <div className='w-full flex flex-col justify-center items-center shadow-md'>
                    <img src={Image10} alt="" className='w-24 mb-5'/>
                    <h1 className='text-2xl font-bold'>นโยบายการคืนเงิน</h1>
                </div>
                <div className='w-full flex flex-col justify-center items-center shadow-md'>
                    <img src={Image11} alt="" className='w-24 mb-5'/>
                    <h1 className='text-2xl font-bold'>รับประกันสินค้า</h1>
                </div>
            </div>

            {/* Promotin Section */}
            <div>
                <div className='mx-72 mt-20'>
                    <h1 className='text-3xl font-bold'>โปรโมชั่นพิเศษ</h1>
                </div>
            </div>
            


        </div>
    )
}

export default MainHome
