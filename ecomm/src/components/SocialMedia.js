import React from 'react';
import styled from 'styled-components';

const SocialMediaWrapper = styled.div`
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const SocialMediaList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SocialMediaItem = styled.li`
  margin-bottom: 10px;
`;

const SocialMediaLink = styled.a`
  display: inline-block;
  padding: 8px 16px;
  background-color: #333;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const SocialMedia = () => {
  const socialMediaLinks = [
    {
      platform: "Facebook",
      url: "https://www.facebook.com/yourpage",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/yourhandle",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/yourprofile",
    },
    
  ];

  return (
    <SocialMediaWrapper>
      <h2>Social Media</h2>
      <SocialMediaList>
        {socialMediaLinks.map((link) => (
          <SocialMediaItem key={link.platform}>
            <SocialMediaLink href={link.url} target="_blank" rel="noopener noreferrer">
              {link.platform}
            </SocialMediaLink>
          </SocialMediaItem>
        ))}
      </SocialMediaList>
    </SocialMediaWrapper>
  );
};

export default SocialMedia;
