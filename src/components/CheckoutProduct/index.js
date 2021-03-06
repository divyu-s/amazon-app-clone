import React from 'react';
import { useStateValue } from '../../dataLayer/StateProvider';
import './CheckoutProduct.css';

export default function CheckoutProduct({id,image,title,price,rating}) {
    const [{basket},dispatch] = useStateValue();
    const removeFromBasket = ()=>{
        dispatch({
            type : "REMOVE_FROM_BASKET",
            id : id
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="ckeckoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">{Array(rating).fill()
                     .map(()=><p>🌟</p>)}
                     </div>   
                     <button onClick={removeFromBasket}>Remove from Basket</button> 
                </div>
             

            
        </div>
    )
}
