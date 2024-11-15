

function ProductItem(){
    return( 
        <div className="px-48 pb-5">
            <div className="grid grid-cols-[3fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr] border border-gray h-32 rounded-xl shadow-lg items-center ">
                <div>IMG</div>
                <div className='font-bold'>Product name</div>
                <div className='font-thin'>description</div>
                <div className='font-bold'>Price</div>
                <div className='font-thin'>Amount</div>
                <div></div>
                <div></div>
                <div className='font-thin'>catagorized</div>
                <div className="flex flex-col p-5">
                    <button className="font-thin hover:text-orange-500 ">edit</button>
                    <button className=" bg-red-500 text-white  rounded-xl hover:bg-red-700">delete</button>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
