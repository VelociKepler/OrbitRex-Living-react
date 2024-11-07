import React, { useState, useContext, useEffect, createContext } from 'react';

const DataContext = createContext();

// Sample structure of a product
const sampleProduct = [{
  id: 1,
  Productname: 'Sample Product',
  ProductSize: '150x400x80 cm',
  ProductDescription: 'A sample product description',
  ProductPrice:100,
  Category:'Bed',

  productProp0: {
    ProductImage: 'https://i.imgur.com/g3D5jNzg.jpg',
    ProductColor: 'default',
    Amount: 300,
  },

  productProp1: {
    ProductImage: 'https://i.imgur.com/g3D5jNzg.jpg',
    ProductColor: 'Red',
    Amount: 200,
  }
},
];

export const DataContextProvider = ({ children }) => {
    const initialData = JSON.parse(localStorage.getItem('data')) || [sampleProduct];
    const [data, setData] = useState(initialData);

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data));
    }, [data]);

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}    
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
