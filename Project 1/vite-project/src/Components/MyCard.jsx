import React from "react";
import { Box, Text, Heading, Image, Flex } from '@chakra-ui/react';

const Dashboard = () => {
  // Sample data for six cards with image URLs
  const cards = [
    { 
      id: 1, 
      title: 'Your Order', 
      description: 'Track, return, or buy things again.', 
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/3081/3081559.png' 
    },
    { 
      id: 2, 
      title: 'Login & Security', 
      description: 'Edit login, name, and mobile number.', 
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/3064/3064197.png' 
    },
    { 
      id: 3, 
      title: 'Your Addresses', 
      description: 'Edit addresses for orders and gifts.', 
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png' 
    },
    { 
      id: 4, 
      title: 'Payment', 
      description: 'Edit or add payment methods.', 
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/1570/1570991.png' 
    },
    { 
      id: 5, 
      title: 'My Wishlist', 
      description: 'Buy from items saved in Wishlist.', 
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/833/833472.png' 
    },
    { 
      id: 6, 
      title: 'Contact Us', 
      description: 'Contact our customer service via phone or chat.', 
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/929/929409.png' 
    }
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      p={4}
    >
      <Heading as="h1" size={['lg', 'xl']} mb={8} textAlign="center">
        Your Account
      </Heading>

      <Box
        display="flex"
        flexWrap="wrap"
        gap={4}
        justifyContent="center"
        maxWidth="1200px"
        width="100%"
      >
        {cards.map(card => (
          <Box
            key={card.id}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            width={['100%', '48%', '30%']} // Responsive width: full width on small screens, 48% on medium, 30% on large
            minWidth="250px" // Minimum width for smaller screens
            height="150px"
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            onClick={() => handleCardClick(card.id)}
            cursor="pointer"
            boxShadow="sm"
            transition="box-shadow 0.3s ease"
            _hover={{ boxShadow: '2xl' }}
          >
            <Flex direction="row" align="center" w="full">
              <Image src={card.imageUrl} alt={card.title} boxSize="50px" mr={4} />
              <Box>
                <Heading fontSize={['md', 'lg']} textAlign='left'>{card.title}</Heading>
                <Text fontSize={['sm', 'md']} textAlign='left'>{card.description}</Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const handleCardClick = (id) => {
  console.log(`Card ${id} clicked`);
};

export default Dashboard;
