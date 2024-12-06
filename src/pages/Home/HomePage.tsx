import { useEffect, useState } from 'react'
import Image from '../../images/Homepage/Homepagecover.png'
import NavbarHome from '../../components/Homepage/NavbarHome';
import Desktop from './DesktopPage';
import TabletPage from './TabletPage';

function HomePage() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <>
            <NavbarHome />

            {/* Desktop */}
            <div className='relative hidden lg:-translate-y-20 lg:-z-10 lg:flex'>
                <img src={Image} alt="" className='lg:w-full lg:h-screen lg:object-cover' />
                <div className={`lg:bg-black lg:bg-opacity-50 lg:absolute lg:top-80 lg:left-40 lg:p-10 lg:rounded-xl lg:transition-all lg:duration-1000 ${isVisible ? 'lg:opacity-100' : 'lg:opacity-0 lg:translate-y-10'}`}>
                    <h1 className='lg:text-6xl lg:font-bold lg:text-white'>Furniture, decor,<br />and beyond</h1>
                    <button className='lg:bg-orange-500 lg:text-white lg:px-5 lg:py-2 lg:rounded-full lg:mt-5'>Shop</button>
                </div>
            </div>

            {/* Tablet */}
            <div className='relative lg:hidden -translate-y-20 -z-10 flex'>
                <img src={Image} alt="" className='w-full h-screen object-cover' />
                <div className={`bg-black bg-opacity-50 absolute top-80 left-10 p-5 rounded-xl transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}
                `}>
                    <h1 className='text-5xl font-bold text-white'>Furniture, decor,<br />and beyond</h1>
                    <button className='bg-orange-500 text-white px-5 py-2 rounded-full mt-5'>Shop</button>
                </div>
            </div>



            <div className='hidden lg:block'>
                <Desktop />
            </div>

            <div className='hidden lg:hidden md:block'>
                <TabletPage />
            </div>

        </>
    )
}

export default HomePage

