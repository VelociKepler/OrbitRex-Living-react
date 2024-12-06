function footer() {

    return (

        <div className='flex lg:gap-40 border-t-2 p-2 justify-center md:gap-16 md:whitespace-nowrap'>
            <div className='hidden lg:block md:block lg:text-4xl md:text-2xl text-sm'>
                <p><i className="fa-brands fa-figma"></i></p>
                <span><i className="fa-brands fa-x-twitter"></i></span>
                <span><i className="fa-brands fa-instagram  ml-2"></i></span>
                <span><i className="fa-brands fa-youtube ml-2"></i></span>
                <span><i className="fa-brands fa-linkedin ml-2"></i></span>
            </div>
            <div className='flex flex-col gap-y-2'>
                <h1 className='text-sm md:text-xl lg:text-xl font-bold'>Use cases</h1>
                <p className="text-sm">UI design</p>
                <p className="text-sm">UX design</p>
                <p className="text-sm">Wireframing</p>
                <p className="text-sm">Diagramming</p>
                <p className="text-sm">Brainstorming</p>
                <p className="text-sm">Online whiteboard</p>
                <p className="text-sm">Team collaboration</p>
            </div>
            <div className='flex flex-col gap-y-2'>
                <h1 className='text-sm md:text-xl lg:text-xl font-bold'>Explore</h1>
                <p className="text-sm">Design</p>
                <p className="text-sm">Prototyping</p>
                <p className="text-sm">Development features</p>
                <p className="text-sm">Design systems</p>
                <p className="text-sm">Collaboration features</p>
                <p className="text-sm">Design process</p>
                <p className="text-sm">FigJam</p>
            </div>
            <div className='flex flex-col gap-y-2'>
                <h1 className='text-sm md:text-xl lg:text-xl font-bold'>Resources</h1>
                <p className="text-sm">Blog</p>
                <p className="text-sm">Best practices</p>
                <p className="text-sm">Colors</p>
                <p className="text-sm">Color wheel</p>
                <p className="text-sm">Support</p>
                <p className="text-sm">Developers</p>
                <p className="text-sm">Resource library</p>
            </div>
        </div>
    )
}

export default footer
