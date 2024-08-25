// src/components/Sidebar.js
import React from 'react';
import { Box, Flex, IconButton, useDisclosure } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Sidebar = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      {/* Sidebar */}
      <Box
        w={isOpen ? '200px' : '60px'}
        h="100vh"
        bg="white"
        color="gray.800"
        transition="width 0.2s"
      >
        <Flex direction="column" align="center" py={4}>
          <IconButton
            icon={<FiMenu />}
            variant="outline"
            colorScheme="teal"
            aria-label="Open Menu"
            onClick={isOpen ? onClose : onOpen}
          />
          {isOpen && (
            <Flex direction="column" mt={4}>
              <Link to="/">Notes</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/settings">Settings</Link>
            </Flex>
          )}
        </Flex>
      </Box>

      {/* Main Content */}
      <Box flex="1" p={4}>
        {children}
      </Box>
    </Flex>
  );
};

export default Sidebar;