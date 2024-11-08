import React from 'react';
import AddProduct from '../../components/adminPage/addProduct';
import ProductItem from '../../components/adminPage/productItem';

function AdminPage() {
  return (
    <div className="text-center mt-10">
      <section id="addProduct" className="mb-12">
        <AddProduct />
      </section>

      <section id="dashboard" className="flex flex-col py-8">
        <h1 className='text-5xl font-bold pb-6'>Dashboard</h1>
        <div className="flex flex-col pb-16">
            <ProductItem />
            <ProductItem />
        </div>
      </section>
    </div>
  );
}

export default AdminPage;
