import React from "react";
import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton = ({ price }) => {
  // Stripe works cents (think the Yen), so convert dollar amounts into pennies.
  const priceForStripe = price * 100
  const publishableKey = "pk_test_51IulbRBAACT5KYAz2ccJzFBsqDWMVgeGa6ycfgQk7LK4wIsnr07Ld5Zl6MZzr4AmCRa0FfMa8zg69kBB4cNgifgz00R4mpnUoa"

const onToken = token =>{
  console.log(token);
  alert("payment successful")
}

  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothes and Clothes, the Clothing Store"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`The total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    /> 
  )
}

export default StripeCheckoutButton