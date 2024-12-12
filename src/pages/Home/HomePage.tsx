import { useEffect, useState } from 'react'
import Image from '../../images/Homepage/Homepagecover.png'
import NavbarHome from '../../components/Homepage/NavbarHome';
import Desktop from './DesktopPage';
import TabletPage from './TabletPage';
import MobilePage from './MobilePage';

function HomePage() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <>
            {/* Navbar */}
            <div className="relative z-20">
                <NavbarHome />
            </div>

            {/* Header section Desktop */}
            <div className='relative hidden lg:-translate-y-20 lg:-z-10 lg:flex'>
                <img src={Image} alt="" className='lg:w-full lg:h-screen lg:object-cover' />
            </div>
            <div className={`hidden lg:block lg:bg-black lg:bg-opacity-50 lg:absolute lg:top-80 lg:left-40 lg:p-10 lg:rounded-xl lg:transition-all lg:duration-1000 ${isVisible ? 'lg:opacity-100' : 'lg:opacity-0 lg:translate-y-10'}`}>
                <h1 className='lg:text-6xl lg:font-bold lg:text-white'>Furniture, decor,<br />and beyond</h1>
                <button className='lg:bg-orange-500 lg:text-white lg:px-5 lg:py-2 lg:rounded-full lg:mt-5 lg:text-xl'>Shop</button>
            </div>

            {/* Header section Tablet */}
            <div className='relative lg:hidden -translate-y-20'>
                <img src={Image} alt="" className='w-[100%] h-[500px] md:w-full md:h-screen object-cover z-0' />
                <div className={`bg-black bg-opacity-50 absolute top-40 md:top-80 left-10 py-3 px-10 rounded-xl transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
                    <h1 className='text-xl md:text-5xl font-bold text-white'>Furniture, decor,<br />and beyond</h1>
                    <button className='bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-full mt-4'>Shop</button>
                </div>
            </div>

            {/* Main section Desktop */}
            <div className='hidden lg:block'>
                <Desktop />
            </div>

            {/* Main section Tablet */}
            <div className='hidden lg:hidden sm:hidden md:block '>
                <TabletPage />
            </div>

            {/* Main section Tablet */}
            <div className='lg:hidden md:hidden'>
                <MobilePage />
            </div>

        </>
    )
}

export default HomePage

