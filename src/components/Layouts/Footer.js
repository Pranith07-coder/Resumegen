import {
    Text,
    Stack,
    HStack,
    Box,
    Container,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <Box
            bg={useColorModeValue('gray.100', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
            py={5} // Added padding to separate footer from content
        >
            <Container
                as={Stack}
                maxW={'7xl'}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}
            >
                <Stack direction={{ base: 'column', md: 'row' }} fontWeight={'medium'} spacing={2}>
                    <Text>&copy; 2024 Resumegen. Designed By</Text>
                    <Text as={'a'} href={'https://www.linkedin.com/in/pranithmanuri/'} target={'_blank'} color={'blue.600'}>
                        Pranith Babu
                    </Text>
                </Stack>

                <Stack direction={'row'} spacing={6}>
                    <IconButton
                        isRound={true}
                        as={'a'}
                        href={'https://github.com/Pranith07-coder'}
                        target='_blank'
                        bg={'gray.300'}
                        aria-label='GitHub'
                        _hover={{ bg: 'gray.400' }} // Hover effect
                    >
                        <FaGithub />
                    </IconButton>
                    <IconButton
                        isRound={true}
                        as={'a'}
                        href={'https://www.linkedin.com/in/pranithmanuri/'}
                        target='_blank'
                        colorScheme={'blue'}
                        aria-label='LinkedIn'
                        _hover={{ bg: 'blue.500' }} // Hover effect
                    >
                        <FaLinkedin />
                    </IconButton>
                    <IconButton
                        isRound={true}
                        as={'a'}
                        href={'https://www.instagram.com/psych.x7_/'}
                        target='_blank'
                        colorScheme={'pink'}
                        aria-label='Instagram'
                        _hover={{ bg: 'pink.500' }} // Hover effect
                    >
                        <FaInstagram />
                    </IconButton>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
