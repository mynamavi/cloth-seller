import React from 'react';

import './checkout-item.styles.scss';


const CheckoutItem = ({ cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='image' />
            </div>
        
            <span className='name'>{name}</span>
            <div className='quantity'>
                <div className='arrow'> &#10094;</div>
                {quantity}
                <div className='arrow'> &#10095;</div>
            </div>
            <span className='price'>{price}</span>
            <div className='remove'>
                &#10005;
            </div>
        </div>  

    );

}

export default CheckoutItem;