import React from 'react';


const Cart = ({ cart, handleRemoveItemFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = "FOKIRA MAN!!!!!"
    } else {
        message = "You Are BOROLOXXX"
    }

    return (
        <div className='sticky top-5'>
            <h2 className='text-center bg-blue-300 py-2 font-bold text-2xl'>Total Product is: {cart.length}</h2>
            <div className='mt-3'>
                <h2 className={cart.length == 1 ? "text-blue-400" : "text-red-400"}>Order Summaray:</h2>
                <h3 className={`font-bold ${cart.length > 3 ? "bg-red-500" : "bg-yellow-300"}`}>Something:</h3>

                {message}

                {
                    cart.map((tshirt, index) => <p>{index + 1}. {tshirt.name} <button onClick={() => handleRemoveItemFromCart(tshirt._id)} className='bg-gray-300 px-2  m-1'>X</button></p>)
                }
                {
                    cart.length > 2
                        ? <span>Aro Kino Bro..</span>
                        : <span className='bg-yellow-200'>Bad customer</span>
                }
                {
                    cart.length === 2 && <p>Double Bonanza</p>
                }
                {
                    cart.length == 3 || <p>3 ta to hoylona re....</p>
                }
            </div>

        </div>
    );
};

export default Cart;

/**
 * CONDITIONAL RENDERING
 * 1.If else,else,else if conditional rendering
 * 2.Ternary operator conditional rendering.
 * 3.logical and && operator (if first condition will true then next things will be displayed)
 * 4.local or || operator(if first condition will false then next things will be displayed)
 * 
 * **/

/**
 * CONDITIONAL CSS CLASS
 * 1.
 * 
*/