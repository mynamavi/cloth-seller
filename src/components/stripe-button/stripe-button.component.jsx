import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) =>{
    const priceForStripe  = price*100;
    const publishableKey = 'pk_test_v9fRZcgWH1HbyM426GxW1vku';
    
    const onToken = token => {
        console.log(token);
        alert('Your payment is successful.');
    }

    return (
        <StripeCheckout 
            currency = "USD"
            label = "Pay Now"
            name = 'React Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />

    )

}


export default StripeCheckoutButton;