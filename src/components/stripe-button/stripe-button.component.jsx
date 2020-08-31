import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 	
    "pk_test_51HMF1nIhmQsimcy7crPpq5MRaFISSQ0Y51tuy2yGr5MYb4aj37A2CDUMuuABTgivwKOX1kklkwihIU1gPCG0zRxp00laclXG0q";

    return (
      <StripeCheckout
        label='Pay Now'
        name='React Store'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/PCW.svg'
      />
    )
};