import React from 'react';


const Cart = ({ cart, handleRemoveItemFromCart }) => {
    console.log(cart)
    return (
        <div className='sticky top-5'>
            <h2 className='text-center bg-blue-300 py-2 font-bold text-2xl'>Total Product is: {cart.length}</h2>
            <div className='mt-3'>
                {
                    cart.map((tshirt, index) => <p>{index + 1}. {tshirt.name} <button onClick={() => handleRemoveItemFromCart(tshirt._id)} className='bg-gray-300 px-2  m-1'>X</button></p>)
                }
            </div>

        </div>
    );
};

export default Cart;