// I used chakra ui
import { Box, Heading, Flex, List, ListItem, Link, Text } from '@chakra-ui/react';
import logo from '/images/logo.png'
const Footer = () => {
  return (
    <Box
      as="footer"
      bg="#080a1a"
      borderTop="1px solid"
      borderColor="gray.300"
      py="2.5rem"
      fontSize="0.875rem"
    >
      <Box
        maxW="64rem"
        marginX="auto"
        pb="2rem"
        mb="1.5rem"
        px={10}
        borderBottom="1px solid"
        borderColor="gray.300"
      >
        <Flex flexWrap="wrap" alignItems="start" justifyContent="space-between">
          <FooterSection title="Company Name" items={['Careers', 'News', 'Policies', 'Help', 'Diversity & Belonging']} />
          <FooterSection title="Discover" items={['Trust & Safety', 'Travel Credit', 'Gift Cards', 'Airbnb Citizen', 'Business Travel', 'Things To Do', 'Airbnbmag']} newItems={['Things To Do']} />
          <FooterSection title="Hosting" items={['Why Host', 'Hospitality', 'Responsible Hosting', 'Community Center', 'Host an Experience', 'Open Homes', 'Donations']} newItems={['Host an Experience', 'Donations']} />
          <SocialLinks />
        </Flex>
      </Box>
      <Flex maxW="64rem" mx="auto" alignItems="center" px={10}>
        <svg
          fill="#008F94"
          style={{ width: '1.25rem', height: '1.25rem' }}
          viewBox="0 0 1000 1000"
          role="presentation"
          aria-hidden="true"
          focusable="false"
        >
          <path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path>
        </svg>
        {/* <img src={logo} alt="" width="200px" /> */}
        <Text color="gray.600" fontSize="0.875rem" pl="0.5rem">
          &copy; 2019 company, Inc. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

const FooterSection = ({ title, items, newItems = [] }) => {
  return (
    <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
      <Heading as="h5" color="gray.700" mb="0.5rem" fontSize="0.875rem" fontWeight="600">
        {title}
      </Heading>
      <List lineHeight="2">
        {items.map((item, index) => (
          <LinkItem key={index} text={item} isTag={newItems.includes(item)} tagText="New" />
        ))}
      </List>
    </Box>
  );
};

const LinkItem = ({ text, isTag = false, tagText }) => {
  return (
    <ListItem display="flex">
      <Link
        fontWeight="600"
        href="#"
        color="rgba(113, 128, 150, 1)"
        _hover={{ color: 'green.600' }}
      >
        {text}
      </Link>
      {isTag && (
        <Text
          as="span"
          bg="#008F94"
          px="0.25rem"
          display="inline-flex"
          alignItems="center"
          color="#fff"
          height="1.25rem"
          borderRadius="0.25rem"
          ml="0.25rem"
          mt="0.25rem"
          fontSize="0.75rem"
        >
          {tagText}
        </Text>
      )}
    </ListItem>
  );
};

const SocialLinks = () => {
  return (
    <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
      <Flex justifyContent="start" mb="0.5rem" alignItems="baseline">
        {socialIcons.map((icon, index) => (
          <Link href="#" mr="0.5rem" key={index}>
            <svg
              style={{ width: '1rem', height: '1rem' }}
              fill="#008F94"
              viewBox={icon.viewBox}
              role="img"
              aria-label={`Navigate to ${icon.name}`}
              focusable="false"
            >
              <path d={icon.path}></path>
            </svg>
          </Link>
        ))}
      </Flex>
      <List lineHeight="2">
        {['Terms', 'Privacy', 'Site Map'].map((text, index) => (
          <LinkItem key={index} text={text} />
        ))}
      </List>
    </Box>
  );
};

const socialIcons = [
  {
    name: 'Facebook',
    viewBox: '0 0 32 32',
    path: 'm8 14.41v-4.17c0-.42.35-.81.77-.81h2.52v-2.08c0-4.84 2.48-7.31 7.42-7.35 1.65 0 3.22.21 4.69.64.46.14.63.42.6.88l-.56 4.06c-.04.18-.14.35-.32.53-.21.11-.42.18-.63.14-.88-.25-1.78-.35-2.8-.35-1.4 0-1.61.28-1.61 1.73v1.8h4.52c.42 0 .81.42.81.88l-.35 4.17c0 .42-.35.71-.77.71h-4.21v16c0 .42-.35.81-.77.81h-5.21c-.42 0-.8-.39-.8-.81v-16h-2.52a.78.78 0 0 1 -.78-.78',
  },
  {
    name: 'Twitter',
    viewBox: '0 0 32 32',
    path: 'm31 6.36c-1.16.49-2.32.82-3.55.95 1.29-.76 2.22-1.87 2.67-3.22-1.21.72-2.56 1.25-4 1.53-1.12-1.19-2.71-1.94-4.47-1.94-3.39 0-6.14 2.77-6.14 6.18 0 .49.06.97.16 1.43-5.1-.26-9.63-2.7-12.66-6.44-.53.91-.84 1.97-.84 3.1 0 2.14 1.08 4.03 2.74 5.14-.98-.03-1.9-.3-2.71-.75v.07c0 2.99 2.12 5.48 4.92 6.05-.52.14-1.07.22-1.63.22-.4 0-.78-.04-1.16-.1.79 2.47 3.04 4.28 5.72 4.33-2.1 1.64-4.75 2.62-7.62 2.62-.5 0-1-.03-1.49-.08 2.71 1.75 5.94 2.77 9.41 2.77 11.29 0 17.47-9.41 17.47-17.57 0-.27-.01-.54-.03-.81 1.2-.87 2.22-1.97 3.04-3.22z',
  },
];

export default Footer;
