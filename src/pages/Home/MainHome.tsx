import Image1 from '../../images/Homepage/chair.png'
import Image2 from '../../images/Homepage/sofa.png'
import Image3 from '../../images/Homepage/table.png'
import Image4 from '../../images/Homepage/chair2.jpg'
import { Link } from 'react-router-dom'

function MainHome() {
    return (

        // Desktop
        <div className='lg:-translate-y-20'>

            {/* Main Section 1 */}
            <div className='my-10'>
                <div className='h-70 flex justify-center gap-36 my-10 mx-20'>
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
            <div>
                <div className='mx-72'>
                    <h1 className='text-3xl font-bold'>New Arrivals</h1>
                    <h1 className='h-0.5 w-44 bg-orange-500 mb-10'></h1>

                    <div className='flex justify-center'>
                        <>
                        <img src={Image4} alt="" className='w-80'/>
                        <h1 className='text-2xl font-bold text-white relative translate-y-3/4 -translate-x-72'>BRAND <br />xx,xxx บาท</h1>
                        </>
                        <>
                        <img src={Image4} alt="" className='w-80'/>
                        <h1 className='text-2xl font-bold text-white relative translate-y-3/4 -translate-x-72'>BRAND <br />xx,xxx บาท</h1>
                        </>
                        <>
                        <img src={Image4} alt="" className='w-80'/>
                        <h1 className='text-2xl font-bold text-white relative translate-y-3/4 -translate-x-72'>BRAND <br />xx,xxx บาท</h1>
                        </>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default MainHome
