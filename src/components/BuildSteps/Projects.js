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
    Textarea,
    VStack,
    Text,
  } from '@chakra-ui/react';
  import { useResume } from '../../Context';
  import { v4 as uuidv4 } from 'uuid';
  import { MdDelete } from 'react-icons/md';
  
  const Projects = () => {
    const { projects, setProjects } = useResume();
  
    // Function to add a new project entry
    const addMore = () => {
      setProjects([...projects, { id: uuidv4(), name: '', url: '', description: '' }]);
    };
  
    // Function to handle changes in input fields
    const handleChange = (e, id) => {
      const { name, value } = e.target;
      const updatedProject = projects.map((project) =>
        project.id === id ? { ...project, [name]: value } : project
      );
      setProjects(updatedProject);
    };
  
    // Function to delete a project entry
    const deleteProject = (id) => {
      setProjects(projects.filter((elem) => elem.id !== id));
    };
  
    return (
      <>
        <Accordion allowToggle defaultIndex={[0]}>
          {projects.map((project, index) => (
            <AccordionItem key={project.id}>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    <Text fontWeight={'medium'}>{project.name || 'Project Name'}</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <VStack spacing={3} alignItems={'flex-start'}>
                  <Input
                    value={project.name}
                    onChange={(e) => handleChange(e, project.id)}
                    name='name'
                    id='name'
                    type='text'
                    variant='filled'
                    placeholder='Project Name'
                  />
  
                  <Input
                    value={project.url}
                    onChange={(e) => handleChange(e, project.id)}
                    name='url'
                    id='url'
                    type='url'
                    variant='filled'
                    placeholder='Project URL'
                  />
  
                  <Textarea
                    value={project.description}
                    onChange={(e) => handleChange(e, project.id)}
                    name='description'
                    id='description'
                    variant='filled'
                    placeholder='Description...'
                  />
  
                  <Button rightIcon={<MdDelete />} onClick={() => deleteProject(project.id)} colorScheme={'red'}>
                    Delete
                  </Button>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
  
        {projects.length < 4 && ( // Allow adding up to 4 project entries
          <Button colorScheme={'purple'} my={5} onClick={addMore}>
            Add More
          </Button>
        )}
      </>
    );
  };
  
  export default Projects;
  