import Navbar from "../../components/Navbar"

function Contact() {
    return (
        <>
            <Navbar />

            <div className="flex mt-28">
                <div className="flex flex-col gap-10 text-white w-[60%] shadow-md p-5 bg-orange-500 ml-5 rounded-tl-lg rounded-bl-lg">
                    <h1 className="text-5xl font-bold">CONTACT US</h1>
    
                    <div className="flex items-center gap-4">
                        <i className="fa-solid fa-phone text-4xl"></i>
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl">Phone</h1>
                            <p>+66 123456789</p>
                        </div>
                    </div>
    
                    <div className="flex items-center gap-4">
                        <i className="fa-solid fa-envelope text-4xl"></i>
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl">E-Mail</h1>
                            <p>OrbitRex@email.com</p>
                        </div>
                    </div>
    
                    <div className="flex items-center gap-4">
                        <i className="fa-solid fa-location-dot text-4xl"></i>
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl">Location</h1>
                            <p>ถนนบางนาตราด, บางแก้ว, บางพลี สมุทรปราการ</p>
                        </div>
                    </div>
    
                </div>
    
                <form action="" className="text-black w-full shadow-md p-20 mr-5 rounded-tr-lg rounded-br-lg">
                    <label className="flex flex-col text-xl mb-2">Full Name
                        <input type="text" className="border-2 rounded-lg" />
                    </label>
                    <label className="flex flex-col text-xl mb-2">E-Mail 
                        <input type="text" className="border-2 rounded-lg" />
                    </label>
                    <label className="flex flex-col text-xl mb-2">Phone Number 
                        <input type="text" className="border-2 rounded-lg" />
                    </label>
                    <label className="flex flex-col text-xl mb-2">Message 
                        <textarea className="border-2 rounded-lg" />
                    </label>
                    <button className="bg-black text-white p-2 px-5 rounded-lg">Submit</button>
                </form>
            </div>

        </>
    )
}

export default Contact
