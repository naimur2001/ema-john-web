import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const Cart = ({cart,handleRemoveCart,children}) => {
  

let total=0;
let totalShipping=0;
let quantity=0;
for (const product of cart) {
//  product.quantity=product.quantity || 1;
  total= total+ (product.price * product.quantity);
  totalShipping=totalShipping+ product.shipping ;
quantity=quantity+product.quantity;
}
const tax=(total*(7/100));
const grandTotal=(total+totalShipping+tax)

  return (
    <div className='sticky top-0 rounded-2xl bg-emerald-200 mx-6'>
        <h3 className='text-xl font-bold'>||Order-Summary||</h3>
        <h3 className='text-lg my-2'>Selected-Item: <span className='font-semibold'>{quantity}</span></h3>
        <h3 className='text-lg my-2'>Total Price: $<span className='font-semibold'>{total}</span></h3>
        <h3 className='text-lg my-2'>Total Shipping: <span className='font-semibold'>${totalShipping}</span></h3>
        <h3 className='text-lg my-2'>Tax: <span className='font-semibold'>${tax.toFixed(2)}</span></h3>
        <h3 className='text-lg my-2'>Grand Total: <span className='font-semibold'>${grandTotal.toFixed(2)}</span></h3>
        <div className='b-t-n'>
          <button onClick={handleRemoveCart}   className="

 rounded-md font-semibold bg-orange-300 border-0 w-64 mx-2 my-2 p-2">Clear Cart
 <FontAwesomeIcon className='mx-5' icon={faTrashAlt}></FontAwesomeIcon>
 
 </button>
        </div>
     {children}
    </div>
  );
};

export default Cart;

{/* <div>
<button className="

rounded-md font-semibold text-white bg-rose-500 border-0 w-64 mx-2 my-2 p-2"> proceed Chekout
<FontAwesomeIcon className='mx-5' icon={faCreditCard}></FontAwesomeIcon>

</button>
</div> */}