import React from "react";

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
                <div></div>
            </div>
        </div>
    );
}

export default ProductItem;