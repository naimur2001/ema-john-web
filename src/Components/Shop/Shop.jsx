import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faCreditCard, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';
const Shop = () => {
  const [products,setProducts]=useState([])
  const [cart,setCart]=useState([])
useEffect(()=>{
  fetch('/products.json')
  .then(res=>res.json())
  .then(data=>setProducts(data))
},[])

// Add-Cart
const Add_Cart=(product)=>{
//  let newCart=[...cart,product];
//  let newCart=[...cart,products]; ERROR

let newCart=[];
const exists=cart.find(pd=>pd.id===product.id);

if (!exists) {
  product.quantity=1;
  // newCart=[...cart.product] ERROR
  newCart=[...cart,product]
}
else{
  exists.quantity=exists.quantity+1;
  const remaining=cart.filter(pd=>pd.id!=product.id)
  newCart=[...remaining,exists]
}
 setCart(newCart);
 addToDb(product.id)
}
// anonymous

useEffect( ()=>{
  const storeCart= getShoppingCart();
  const savedCart=[]
  for (const id in storeCart) {
    //get the product by id
   const addedProduct = products.find(product=>product.id===id);
   if (addedProduct) {
    const quantity=storeCart[id];
    addedProduct.quantity=quantity;
    savedCart.push(addedProduct)
   }
 setCart(savedCart)
  }
}
  ,[products])
// anonymous
const handleRemoveCart=()=>{
  setCart([]);
deleteShoppingCart();
}




  return (
    <div className='shop-container '>
      <div className="products-container grid grid-cols-1
  lg:grid-cols-3
      gap-x-52 gap-y-10 md:m-12 m-6  ">
    {
      products.map(product=><Products
      key={product.id}
      product={product}
      Add_Cart={Add_Cart}
      ></Products>)
    }
      </div>
      <div className="carts-container  mt-12 text-center md:ml-32  ">
      <Cart
      cart={cart}
      key={cart.id}
      handleRemoveCart={handleRemoveCart}
      >
<Link to='/order' >
<button className="
 rounded-md font-semibold text-white bg-rose-500 border-0 w-64 mx-2 my-2 p-2"> Review Order
 <FontAwesomeIcon className='mx-5' icon={faArrowAltCircleRight}></FontAwesomeIcon>
 
 </button>
        

</Link>

      </Cart>
      </div>
    </div>
  );
};

export default Shop;