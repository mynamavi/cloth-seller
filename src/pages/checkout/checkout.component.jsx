import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
//import CustomButton from '../custom-button/custom-button.component';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import './checkout.styles.scss';

const CheckOutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className="checkout-header">
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
            
        </div>
        {
            cartItems.map(cartItem=>
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        }

        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>
        <StripeCheckoutButton price = {total} />

        <h2>Its is test mode payment.</h2>
        <h2>Use 4242424242424242 and CVV- 123 expiry: 12/20</h2>
    </div>

)

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage);