import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'


const Order = () => {
const savedcart=useLoaderData();
const [cart,setCart]=useState(savedcart);
const handleRemoveReview=(id)=>{
 const remaining= cart.filter(product=>product.id!==id);
 setCart(remaining);
removeFromDb(id)
}
const handleRemoveCart=()=>{
  setCart([]);
  deleteShoppingCart();
}

  return (
    <div className='shop-container grid grid-cols-2 gap-10 mt-4'>
      <div className="review-page  mx-5 rounded-2xl grid grid-cols-1 items-center  ">

      {
        cart.map(product=> <ReviewItem
        key={product.id}
        product={product}
        handleRemoveReview={handleRemoveReview}
        ></ReviewItem> )
      }
      </div>
      <div className="cart-page  text-center">
<Cart cart={cart} 
handleRemoveCart={handleRemoveCart}
>

<Link to='/checkout'>
<button className="
 rounded-md font-semibold text-white bg-rose-500 border-0 w-64 mx-2 my-2 p-2">Procced Checkout
 <FontAwesomeIcon className='mx-5' icon={faCreditCard}></FontAwesomeIcon>
 
 </button>
        
</Link>
</Cart>
      </div>
    </div>
  );
};

export default Order;