
function footer() {
    return (
        <div className='flex gap-40 border-t-2 p-10 justify-center'>
            <div className='text-4xl'>
                <p><i className="fa-brands fa-figma"></i></p>
                <span><i className="fa-brands fa-x-twitter"></i></span>
                <span><i className="fa-brands fa-instagram  ml-2"></i></span>
                <span><i className="fa-brands fa-youtube ml-2"></i></span>
                <span><i className="fa-brands fa-linkedin ml-2"></i></span>
            </div>
            <div className='flex flex-col gap-y-2'>
                <h1 className='text-xl font-bold'>Use cases</h1>
                <p>UI design</p>
                <p>UX design</p>
                <p>Wireframing</p>
                <p>Diagramming</p>
                <p>Brainstorming</p>
                <p>Online whiteboard</p>
                <p>Team collaboration</p>
            </div>
            <div className='flex flex-col gap-y-2'>
                <h1 className='text-xl font-bold'>Explore</h1>
                <p>Design</p>
                <p>Prototyping</p>
                <p>Development features</p>
                <p>Design systems</p>
                <p>Collaboration features</p>
                <p>Design process</p>
                <p>FigJam</p>
            </div>
            <div className='flex flex-col gap-y-2'>
                <h1 className='text-xl font-bold'>Resources</h1>
                <p>Blog</p>
                <p>Best practices</p>
                <p>Colors</p>
                <p>Color wheel</p>
                <p>Support</p>
                <p>Developers</p>
                <p>Resource library</p>
            </div>
        </div>
    )
}

export default footer
