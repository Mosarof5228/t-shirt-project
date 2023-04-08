import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import toast, { Toaster } from 'react-hot-toast';

const HomeLayout = () => {
    const [cart, setCart] = useState([])
    // console.log(cart)
    const products = useLoaderData();



    const handleAddToCart = (product) => {
        const exist = cart.find(tshirt => tshirt._id === product._id);
        if (exist) {
            toast('Already Exist!!!!!!')
        } else {

            const newCart = [...cart, product];
            setCart(newCart);
        }

    }

    const handleRemoveItemFromCart = (id) => {
        const exist = cart.filter(tshirt => tshirt._id !== id);
        setCart(exist)

    }
    return (
        <div className='grid grid-cols-12 mx-7 md:mx-14 lg:mx-20 gap-4'>
            <div className='col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto'>
                {
                    products.map(product => <Tshirt
                        key={product._id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className='col-span-4 '>
                <Cart
                    cart={cart}
                    handleRemoveItemFromCart={handleRemoveItemFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default HomeLayout;