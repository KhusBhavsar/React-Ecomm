import React from 'react';
import styled from 'styled-components';

const ContactInfoWrapper = styled.div`
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ContactInfoList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ContactInfoItem = styled.li`
  margin-bottom: 10px;
`;

const ContactInfoLabel = styled.span`
  font-weight: bold;
`;

const ContactInfo = () => {
  const contactEmail = "contact@yourstore.com";
  const supportEmail = "support@yourstore.com";
  const phoneNumber = "+1 (123) 456-7890";
  const address = "123 Main Street, City, Country";

  return (
    <ContactInfoWrapper>
      <h2>Contact Information</h2>
      <ContactInfoList>
        <ContactInfoItem>
          <ContactInfoLabel>Email:</ContactInfoLabel> {contactEmail}
        </ContactInfoItem>
        <ContactInfoItem>
          <ContactInfoLabel>Support Email:</ContactInfoLabel> {supportEmail}
        </ContactInfoItem>
        <ContactInfoItem>
          <ContactInfoLabel>Phone:</ContactInfoLabel> {phoneNumber}
        </ContactInfoItem>
        <ContactInfoItem>
          <ContactInfoLabel>Address:</ContactInfoLabel> {address}
        </ContactInfoItem>
      </ContactInfoList>
    </ContactInfoWrapper>
  );
};

export default ContactInfo;
