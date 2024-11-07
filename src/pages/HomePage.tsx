import React, { useEffect, useState } from 'react'
import Image from '../images/Homepagecover.png'
import NavbarHome from '../components/NavbarHome';

function HomePage() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div>
            <NavbarHome />
            <img src={Image} alt="" className='w-full h-screen' />
            <div className={`bg-black bg-opacity-50 absolute top-80 left-40 p-10 py-20 rounded-xl transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
                <h1 className='text-6xl font-bold text-white'>Furniture, decor,<br />and beyond</h1>
            </div>
        </div>
    )
}

export default HomePage

