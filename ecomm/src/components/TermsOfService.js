import React from 'react';
import styled from 'styled-components';

const TermsOfServiceWrapper = styled.div`
 background-color: #f7f7f7;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;



const TermsOfServiceContent = styled.p`
  line-height: 1.6;
`;



const TermsOfService = () => {
  const termsOfServiceText = `
    Welcome to AmazingMart! By accessing and using this website, you accept and agree to be bound by the following terms and conditions.

    You must be at least 18 years old to use our website and services. If you are under 18, you may only use the website with the involvement of a parent or guardian.

    We reserve the right to modify, update, or discontinue any part of the website or services without prior notice.

    The content provided on this website is for general information purposes only and should not be relied upon as professional advice.

    While we strive to provide accurate product information, pricing, and availability, we do not guarantee the completeness or accuracy of such details.

    By placing an order on our website, you acknowledge that you have read and agree to our terms of service and privacy policy.

    For any inquiries or concerns, please contact us at support@amazingmart.com.
  `;

  return (
    <TermsOfServiceWrapper>
      <h2>Terms of Service</h2>
      <TermsOfServiceContent>{termsOfServiceText}</TermsOfServiceContent>
    </TermsOfServiceWrapper>
  );
};

export default TermsOfService;
