import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
  const {img,price,name,ratings,seller}=props.product
  let Add_Cart=props.Add_Cart;


  return (
    <div>
       <div className="cards  relative rounded-lg shadow-xl p-3
   ">
   <img className='w-64 h-64  rounded-lg' src={img} alt="" srcset="" />
   <div className="pro-info h-44">
   <h6 className='text-xl font-semibold leading-6
 tracking-wide my-3' >{name}</h6>
   <p className='text-lg font-semibold leading-6
 tracking-wide my-3' >Price: {price}$</p>
   <p className='text-base font-semibold leading-6
 tracking-wide my-3' >Manufacturer: {seller}</p>
   <p className='text-base font-semibold leading-6
 tracking-wide my-3' >Ratings: {ratings} Stars</p>
   </div>
<button onClick={()=>Add_Cart(props.product)} className="
absolute bottom-0
 rounded-md bg-rose-300 hover:bg-orange-300 border-0 w-64 mx-2 my-2 p-2">
Add to Cart
<FontAwesomeIcon className='mx-2' icon={faShoppingCart} />

</button>
</div>
    </div>
  );
};

export default Products;