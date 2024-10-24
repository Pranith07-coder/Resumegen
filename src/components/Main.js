import {
    Box,
    Container,
    Stack,
    Text,
    HStack,
    Heading,
    Button,
    useToast,
} from '@chakra-ui/react';
import Builder from './Builder';
import ResumePreview from './ResumePreview';
import ThemeSelect from './Theme/ThemeSelect';
import { useReactToPrint } from 'react-to-print';
import { useResume } from '../Context';
import { MdOutlineFileDownload } from 'react-icons/md';
import { useState } from 'react';

const Main = () => {
    const { printElem } = useResume();
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    const handlePrint = useReactToPrint({
        content: () => printElem.current,
        onBeforeGetContent: () => {
            setIsLoading(true);
        },
        onAfterPrint: () => {
            setIsLoading(false);
            toast({
                title: "Document downloaded.",
                description: "Your resume has been downloaded successfully.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        },
        onPrintError: (error) => {
            setIsLoading(false);
            toast({
                title: "Print Error",
                description: "There was an error printing your document.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        },
    });

    return (
        <Container
            bg={'gray.50'}
            minW={'full'}
            py={10}
            id='builder'
        >
            <Heading as='h4' size='lg' textAlign={'center'} color={'gray.700'} style={{ fontFamily: 'Poppins' }} fontWeight={'medium'}>
                Builder Dashboard
            </Heading>

            <Container maxW={'7xl'} px={8} my={3}>
                <Stack justifyContent={'space-between'} pt={4} direction={{ base: 'column', sm: 'row' }}>
                    <ThemeSelect />
                    <Button 
                        rightIcon={<MdOutlineFileDownload />} 
                        onClick={handlePrint} 
                        colorScheme={'purple'}
                        isLoading={isLoading}
                    >
                        {isLoading ? "Preparing..." : "Download"}
                    </Button>
                </Stack>
            </Container>

            <Stack
                direction={{ base: 'column', md: 'row' }}
                gap={4}
                mx={{ base: 2, md: 12 }}
                my={8}
                alignItems={'flex-start'}
                justifyContent={'space-between'}
            >
                <Builder />
                <ResumePreview />
            </Stack>
        </Container>
    );
}

export default Main;
