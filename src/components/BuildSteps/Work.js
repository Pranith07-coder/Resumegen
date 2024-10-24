import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    FormControl,
    FormLabel,
    HStack,
    Input,
    Select,
    Textarea,
    Text,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  import { useResume } from '../../Context';
  import { v4 as uuidv4 } from 'uuid';
  import { MdDelete } from 'react-icons/md';
  import { useToast } from '@chakra-ui/react';
  
  const Work = () => {
    const { workList, setWorkList } = useResume();
    const toast = useToast();
  
    // Function to add a new work experience
    const addMore = () => {
      setWorkList([
        ...workList,
        {
          id: uuidv4(),
          position: '',
          company: '',
          type: '',
          startDate: '',
          endDate: '',
          description: '',
        },
      ]);
    };
  
    // Function to handle input changes
    const handleChange = (e, id) => {
      const { name, value } = e.target;
      const updatedWorkList = workList.map((work) =>
        work.id === id ? { ...work, [name]: value } : work
      );
  
      setWorkList(updatedWorkList);
    };
  
    // Function to delete work experience by ID
    const deleteWork = (id) => {
      setWorkList(workList.filter((elem) => elem.id !== id));
      toast({
        title: 'Work Experience Removed',
        description: 'The work experience has been removed.',
        status: 'info',
        isClosable: true,
      });
    };
  
    return (
      <>
        <Accordion allowToggle defaultIndex={[0]}>
          {workList.map((work) => (
            <AccordionItem key={work.id}>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    <Text fontWeight={'medium'}>
                      {work.position ? work.position : 'Position'}
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Input
                  value={work.position}
                  onChange={(e) => handleChange(e, work.id)}
                  name='position'
                  type='text'
                  variant='filled'
                  placeholder='Position'
                  mb={3}
                />
  
                <HStack spacing={3}>
                  <Input
                    value={work.company}
                    onChange={(e) => handleChange(e, work.id)}
                    name='company'
                    type='text'
                    variant='filled'
                    placeholder='Company'
                  />
                  <Select
                    value={work.type}
                    onChange={(e) => handleChange(e, work.id)}
                    name='type'
                    variant='filled'
                    placeholder='Employment Type'
                  >
                    <option value='Full-time'>Full-time</option>
                    <option value='Part-time'>Part-time</option>
                    <option value='Internship'>Internship</option>
                    <option value='Freelance'>Freelance</option>
                  </Select>
                </HStack>
  
                <HStack spacing={3} mt={4}>
                  <FormControl>
                    <FormLabel htmlFor='startDate'>Start Date</FormLabel>
                    <Input
                      value={work.startDate}
                      onChange={(e) => handleChange(e, work.id)}
                      name='startDate'
                      id='startDate'
                      type='month'
                      variant='filled'
                      placeholder='Start Date'
                    />
                  </FormControl>
  
                  <FormControl>
                    <FormLabel htmlFor='endDate'>End Date</FormLabel>
                    <Input
                      value={work.endDate}
                      onChange={(e) => handleChange(e, work.id)}
                      name='endDate'
                      id='endDate'
                      type='month'
                      variant='filled'
                      placeholder='End Date'
                    />
                  </FormControl>
                </HStack>
  
                <FormControl mt={3}>
                  <FormLabel htmlFor='description'>Description</FormLabel>
                  <Textarea
                    value={work.description}
                    onChange={(e) => handleChange(e, work.id)}
                    name='description'
                    id='description'
                    variant='filled'
                    placeholder='Description...'
                  />
                </FormControl>
  
                <Button
                  rightIcon={<MdDelete />}
                  onClick={() => deleteWork(work.id)}
                  mt={3}
                  colorScheme={'red'}
                >
                  Delete
                </Button>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
  
        {workList.length < 3 && (
          <Button colorScheme={'purple'} my={5} onClick={addMore}>
            Add More
          </Button>
        )}
      </>
    );
  };
  
  export default Work;
  