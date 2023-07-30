import React from 'react';
import styled from 'styled-components';

const AboutUsWrapper = styled.div`

  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`

const AboutUsCard = styled.div`
  flex: 1;
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 5px;
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const AboutUsTitle = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
`;

const AboutUsContent = styled.p`
  line-height: 1.6;
`;

const AboutUs = () => {
  return (
    <AboutUsWrapper>
     <h2>About Us</h2>
     <Flex>
     <AboutUsCard>
        <AboutUsTitle>Welcome to AmazingMart</AboutUsTitle>
        <AboutUsContent>
          We are passionate about providing you with an incredible shopping experience, offering a vast selection of high-quality products at unbeatable prices. Join our ever-growing community of satisfied customers and experience the magic of shopping with us.
        </AboutUsContent>
      </AboutUsCard>
      <AboutUsCard>
        <AboutUsTitle>Our Mission</AboutUsTitle>
        <AboutUsContent>
          At AmazingMart, we believe that shopping should be easy, enjoyable, and affordable. That's why we strive to offer a diverse range of products, from trendy fashion to cutting-edge gadgets, all curated to meet your needs and desires.
        </AboutUsContent>
      </AboutUsCard>
      <AboutUsCard>
        <AboutUsTitle>Top-notch Customer Service</AboutUsTitle>
        <AboutUsContent>
          Our team of dedicated professionals is committed to delivering top-notch customer service, ensuring that you have a seamless shopping journey with us. We are here to assist you with any questions or concerns you may have.
        </AboutUsContent>
      </AboutUsCard>
     </Flex>
    </AboutUsWrapper>
  );
};

export default AboutUs;
