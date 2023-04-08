import React from 'react';

const Tshirt = ({ product, handleAddToCart }) => {
    const { picture, name, _id, index, price } = product;
    return (
        <div>
            <div className="card w-auto h-96 bg-base-100 shadow-xl relative">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl w-44 h-48" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold">Name: {name}</h2>

                    <button onClick={() => handleAddToCart(product)} className='bg-blue-500 py-2 px-4 text-white rounded hover:bg-red-500 w-3/4 absolute bottom-3'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tshirt;