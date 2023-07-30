import React from 'react';
import styled from 'styled-components';

const PrivacyPolicyWrapper = styled.div`
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;



const PrivacyPolicyContent = styled.p`
  line-height: 1.6;
`;

const PrivacyPolicy = () => {
  const privacyPolicyText = `
    Your privacy is important to us at AmazingMart. This privacy policy outlines how we collect, use, and protect your personal information when you visit our website or make a purchase. By using our services, you consent to the practices described in this policy.

    We collect certain information, such as your name, email address, shipping address, and payment details, to process your orders and provide you with a seamless shopping experience. We use this information to fulfill your orders, communicate with you, and improve our services.

    Rest assured that we never share your personal information with third parties for marketing purposes. Your data is kept secure and confidential.

    We may use cookies to enhance your browsing experience on our website. Cookies are small files stored on your device that help us remember your preferences and analyze website traffic. You can adjust your browser settings to disable cookies if you prefer.

    Please read our full privacy policy to understand how we handle your data and your rights regarding your personal information.

    For any questions or concerns related to privacy, you can reach out to us at privacy@amazingmart.com.
  `;

  return (
    <PrivacyPolicyWrapper>
     <h2>Privacy Policy</h2>
      <PrivacyPolicyContent>{privacyPolicyText}</PrivacyPolicyContent>
    </PrivacyPolicyWrapper>
  );
};

export default PrivacyPolicy;
