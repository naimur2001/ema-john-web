import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product,handleRemoveReview}) => {


  return (
    <div className='h-28  rounded-2xl w-3/4 my-2 mx-auto border-2 border-red-200 '>
<div className='flex p-2 justify-between'>
<div className=' flex gap-2'>
  <img className='w-20 h-24 rounded-2xl' src={product.img} alt="" />
  <div>
  <h2 className='text-base font-bold'>{product.name}</h2>
    <h2 className='text-base font-semibold'>Price $<span className='text-orange-600'>{product.price}</span></h2>
    <h2 className='text-base font-semibold'>Quantity<span className='text-orange-600'>{product.quantity}</span></h2>
  </div>
</div>
<div className="del my-4  ">
<button onClick={()=>handleRemoveReview(product.id)} className=''>
<FontAwesomeIcon className='mx-2 hover:border-yellow-500 hover:border-2 border-2 border-transparent text-3xl p-4 rounded-full text-rose-800
 bg-pink-200' icon={faTrashAlt} />
</button>
</div>

</div>
    </div>
  );
};

export default ReviewItem;