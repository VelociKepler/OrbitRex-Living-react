import { useState } from "react";
import Navbar from "../../components/Navbar";

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const Cart = () => {
  // ตัวอย่างข้อมูลสินค้าในตะกร้า
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // ฟังก์ชันคำนวณผลรวมสินค้า
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // ฟังก์ชันเปลี่ยนจำนวนสินค้า
  const updateQuantity = (id:number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // ฟังก์ชันลบสินค้า
  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <Navbar/>
      <div className="flex flex-col md:flex-row gap-6 p-6 mt-20">
        {/* รายการสินค้า */}
        <div className="flex-1 bg-white shadow-md p-4 rounded-md">
          <h2 className="text-xl font-bold mb-4">Your Cart</h2>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-4 border-b pb-2"
              >
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500">Price: ฿{item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 border p-1 rounded-md text-center"
                    min="1"
                  />
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
        </div>
  
        {/* ผลรวมสินค้าและ Payment */}
        <div className="w-full md:w-1/3 bg-gray-100 shadow-md p-4 rounded-md">
          <h2 className="text-xl font-bold mb-4">Summary</h2>
          <div className="flex justify-between mb-4">
            <span className="font-medium">Total:</span>
            <span className="font-bold">฿{calculateTotal()}</span>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Proceed to Payment
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;

