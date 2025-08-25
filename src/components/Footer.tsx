import { Box, Button, Flex, Text, useMediaQuery, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, HStack, useDisclosure, shouldForwardProp, chakra } from '@chakra-ui/react';
import { FiArrowUp } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { isValidMotionProp, motion } from 'framer-motion';

const MotionButton = chakra(motion.button, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Footer = () => {
    const [isWide] = useMediaQuery('(max-width: 995px)');
    const [isMobile] = useMediaQuery('(max-width: 768px)');
    const { isOpen, onClose } = useDisclosure();
    const [showScrollButton, setShowScrollButton] = useState(false);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navLinks = {
        fontWeight: 'semibold',
        transition: 'transform 0.3s ease-in-out, color 0.3s ease',
        _hover: {
            transform: 'scale(1.1)',
            color: '#FF00CC',
        },
    };

    useEffect(() => {
        const handleScroll = () => setShowScrollButton(window.scrollY > 500);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const buttonStyles = {
        variant: 'outline',
        border: '1px solid rgba(255,255,255,0.2)',
        bg: 'rgba(255,255,255,0.05)',
        fontFamily: "'Ariel'",
        backdropFilter: 'blur(10px)',
        color: '#fff',
        transition: 'all 0.3s ease-in-out',
        _hover: {
            bg: '#FF00CC',
            color: 'black',
            boxShadow: '0 6px 18px rgba(255, 0, 204, 0.5)',
            transform: 'scale(1.1)',
        },
    };

    return (
        <Box
            id="contact"
            as="footer"
            color="#fff"
            py="40px"
            px="20px"
            bg="rgba(26, 26, 46, 0.25)"
            backdropFilter="blur(12px)"
            borderTop="1px solid rgba(255,255,255,0.1)"
            position="relative"
            width="100%"
        >
            <Flex
                maxWidth="80vw"
                margin="0 auto"
                justifyContent="space-between"
                alignItems="center"
                direction={isWide ? 'column' : 'row'}
                gap={isMobile ? '20px' : '40px'}
            >
                {/* Contact Buttons */}
                <Flex gap="20px" alignItems="center" flexWrap="wrap">
                    <Button
                        onClick={() => window.open('mailto:narcis.karanfilov@gmail.com')}
                        {...buttonStyles}
                    >
                        Contact Me
                    </Button>
                </Flex>

                {/* Desktop Navigation */}
                {!isWide && (
                    <HStack gap="40px">
                        {['home', 'about', 'resume', 'skills', 'projects', 'contact'].map(
                            (id) => (
                                <Text
                                    key={id}
                                    onClick={() => scrollToSection(id)}
                                    sx={navLinks}
                                >
                                    {id.charAt(0).toUpperCase() + id.slice(1)}
                                </Text>
                            ),
                        )}
                    </HStack>
                )}

                {/* Mobile Drawer Menu */}
                <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent backgroundColor="rgba(19,19,19,0.9)" backdropFilter="blur(14px)">
                        <DrawerCloseButton color="#FF00CC" />
                        <DrawerHeader color="#FF00CC" fontWeight="bold">
                            Menu
                        </DrawerHeader>
                        <DrawerBody>
                            <HStack justify="center" spacing="24px">
                                {['home', 'about', 'resume', 'skills', 'projects', 'contact'].map(
                                    (id) => (
                                        <Text
                                            key={id}
                                            onClick={() => {
                                                scrollToSection(id);
                                                onClose();
                                            }}
                                            sx={navLinks}
                                        >
                                            {id.charAt(0).toUpperCase() + id.slice(1)}
                                        </Text>
                                    ),
                                )}
                            </HStack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Flex>

            {showScrollButton && (
                <MotionButton
                    onClick={scrollToTop}
                    pos="fixed"
                    bottom={isMobile ? '15px' : '20px'}
                    right={isMobile ? '15px' : '20px'}
                    zIndex={1000}
                    bg="#FF00CC"
                    color="#fff"
                    borderRadius="50%"
                    boxShadow="0 6px 18px rgba(255, 0, 204, 0.5)"
                    _hover={{ transform: 'scale(1.1)' }}
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 50 }}
                    transition={{ duration: 0.3, ease: 'easeOut' } as unknown as never}
                >
                    <FiArrowUp size="24px" />
                </MotionButton>
            )}
        </Box>
    );
};

export default Footer;
