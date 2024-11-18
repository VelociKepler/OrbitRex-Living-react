
function productProp(){
    
    return(
        <div className="pt-8">
            <div className='grid grid-cols-3 py-10 bg-white rounded-3xl'>
                <div>
                    <h1>Product Image</h1>
                    <button className='px-3 py-3 bg-white border border-black text-black font-bold w-32 rounded-full text-xl hover hover:bg-black hover:text-white'>
                        Upload
                    </button>
                </div>
                <div>
                    <h1>Product Color</h1>
                    <input 
                    type="color"
                    className="w-14 h-14 cursor-pointer"
                    onChange={(e) => console.log("Selected color: ", e.target.value)}
                    >
                    </input>
                </div>
                <div>
                    <h1>Amount</h1>
                    <input
                    type="number"
                    className="w-32 h-14 border-black border rounded-md bg-red px-3 py-3"
                    placeholder="amount"
                    >
                    </input>
                </div>
            </div>
        </div>
        
    );
}

export default productProp;
