import  { useState } from 'react';
import ProductProp from './addProductProp'; 

function AddProduct() {
  const [productProps, setProductProps] = useState([<ProductProp key={0} />]);

  const addProductProp = () => {
    setProductProps([...productProps, <ProductProp key={productProps.length} />]);
  };

  return (
    <div className="px-48">
      <div className="grid grid-cols-2 bg-neutral-200 px-10 rounded-2xl">
        <div className="flex flex-col py-10">
          <div className="px-20 pb-5">
            <input
              type="text"
              className="px-4 py-2 text-base rounded-md h-10 border w-5/6 border-gray-400"
              placeholder="Product Name"
            />
          </div>
          <div className="px-20 pb-5">

            <input
              type="text"
              className="px-4 py-2 text-base rounded-md h-20 border w-5/6 border-gray-400"
              placeholder="Product description"
            />
          </div>
          <div className="px-20 pb-5">
            <input
              type="text"
              className="px-4 py-2 text-base rounded-md h-10 border w-5/6 border-gray-400"
              placeholder="width x height cm"
            />
          </div>
          <div className="px-20 pb-5">
            <input
              type="number"
              className="px-4 py-2 text-base rounded-md h-10 border w-5/6 border-gray-400"
              placeholder="Product Price"
            />
          </div>
          <div className="px-20 pb-5">
            <h1 className="pb-2 text-base">Category</h1>
            <select className="px-4 py-2 text-base rounded-md h-10 border w-5/6 border-gray-400">
              <option value="bedroom">Bedroom</option>
              <option value="kitchen">Kitchen</option>
              <option value="living-room">Living Room</option>
              <option value="bathroom">Bathroom</option>
            </select>
          </div>
          <div>
            <button className="px-5 py-5 bg-gray-300 text-black font-bold w-48 rounded-full text-xl hover:hover:bg-black hover:text-white">
              Add Product
            </button>
          </div>
        </div>

        <div className='pb-10'>
          {productProps}
          <button onClick={addProductProp} className="mt-4 w-12 h-12 bg-gray-300 text-black font-bold rounded-full text-xl hover:bg-black hover:text-white">
          +
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
