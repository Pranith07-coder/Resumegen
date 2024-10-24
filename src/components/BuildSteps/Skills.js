import {
    Box,
    Button,
    FormControl,
    FormLabel,
    HStack,
    Input,
    Tag,
    TagCloseButton,
    TagLabel,
    useToast,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  import { v4 as uuidv4 } from 'uuid';
  import { useResume } from '../../Context';
  
  const Skills = () => {
    const toast = useToast();
    const [skill, setSkill] = useState('');
    const { skills, setSkills } = useResume();
  
    // Handle skill submission
    const handleSubmit = (e) => {
      e.preventDefault();
      const trimmedSkill = skill.trim(); // Trim whitespace
      if (!trimmedSkill) {
        toast({
          title: 'Empty Input',
          description: 'Please enter a valid skill.',
          status: 'error',
          isClosable: true,
        });
        return;
      }
      
      // Create a new skill object
      const newSkill = {
        id: uuidv4(),
        name: trimmedSkill,
      };
      setSkills([...skills, newSkill]);
      setSkill('');
      toast({
        title: 'Skill Added',
        description: `${trimmedSkill} has been added to your skills.`,
        status: 'success',
        isClosable: true,
      });
    };
  
    // Delete a skill by ID
    const deleteSkill = (id) => {
      setSkills(skills.filter((elem) => elem.id !== id));
      toast({
        title: 'Skill Removed',
        description: 'The skill has been removed from your skills.',
        status: 'info',
        isClosable: true,
      });
    };
  
    return (
      <>
        <HStack spacing={4} alignItems={'flex-end'} as='form' onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel htmlFor='skill'>Add Skills</FormLabel>
            <Input
              onChange={(e) => setSkill(e.target.value)}
              value={skill}
              name='skill'
              id='skill'
              type='text'
              variant='filled'
              placeholder='Skill'
            />
          </FormControl>
          <Button type='submit' colorScheme={'purple'}>
            Add
          </Button>
        </HStack>
  
        <Box borderWidth={'1px'} rounded={'sm'} my={4} p={2}>
          {skills.length > 0 ? (
            skills.map((skill) => (
              <Tag
                size={'lg'}
                key={skill.id}
                borderRadius='full'
                variant='solid'
                colorScheme='purple'
                m={0.5}
              >
                <TagLabel>{skill.name}</TagLabel>
                <TagCloseButton onClick={() => deleteSkill(skill.id)} />
              </Tag>
            ))
          ) : (
            "No Skills Added"
          )}
        </Box>
      </>
    );
  };
  
  export default Skills;
  