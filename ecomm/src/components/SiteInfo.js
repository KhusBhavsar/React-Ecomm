import React from 'react';
import styled from 'styled-components';

const SiteInfoWrapper = styled.div`
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const SiteInfo = () => {
  const siteName = "AmazingMart";
  const slogan = "Your One-Stop Shop for Everything Amazing";
  const about =
    "Welcome to AmazingMart! We aim to provide you with the most amazing shopping experience, offering a vast selection of high-quality products at unbeatable prices.";

  return (
    <SiteInfoWrapper>
      <h2>Site Information</h2>
      <p>
        <strong>Site Name:</strong> {siteName}
      </p>
      <p>
        <strong>Slogan:</strong> {slogan}
      </p>
      <p>
        <strong>About Us:</strong> {about}
      </p>
      <p>
        <strong>Address:</strong> 123 Main Street, City, Country
      </p>
      <p>
        <strong>Contact Email:</strong> contact@amazingmart.com
      </p>
      <p>
        <strong>Support Email:</strong> support@amazingmart.com
      </p>
      <p>
        <strong>Phone:</strong> +1 (123) 456-7890
      </p>
      <p>
        <strong>Website:</strong> www.amazingmart.com
      </p>
    </SiteInfoWrapper>
  );
};

export default SiteInfo;
