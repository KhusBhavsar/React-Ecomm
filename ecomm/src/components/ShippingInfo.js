import React from 'react';
import styled from 'styled-components';

const ShippingInfoWrapper = styled.div`
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ShippingInfo = () => {
  const shippingCost = 5.99;
  const freeShippingThreshold = 50;
  const estimatedDeliveryTime = "2-4 business days";
  const returnPolicy = "Easy 30-day returns";
  const internationalShipping = true;

  return (
    <ShippingInfoWrapper>
      <h2>Shipping Information</h2>
      <p>
        <strong>Shipping Cost:</strong> ${shippingCost.toFixed(2)}
      </p>
      <p>
        <strong>Free Shipping Threshold:</strong> Orders over ${freeShippingThreshold} qualify for free shipping.
      </p>
      <p>
        <strong>Estimated Delivery Time:</strong> {estimatedDeliveryTime}
      </p>
      <p>
        <strong>Return Policy:</strong> {returnPolicy}
      </p>
      {internationalShipping ? (
        <p>
          <strong>International Shipping:</strong> We ship worldwide!
        </p>
      ) : (
        <p>
          <strong>International Shipping:</strong> Sorry, we currently do not offer international shipping.
        </p>
      )}
    </ShippingInfoWrapper>
  );
};

export default ShippingInfo;
