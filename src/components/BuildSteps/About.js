import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useResume } from "../../Context";
import ImageUpload from "../ImageUploadButton/ImageUpload.component";

const About = () => {
  const { about, setAbout } = useResume();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAbout({ ...about, [name]: value });
    
    // Simple validation
    if (!value) {
      setErrors((prev) => ({ ...prev, [name]: "This field is required" }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      <Stack spacing={4} mb={2}>
        {about.picture ? (
          <Button
            onClick={() => {
              setAbout({ ...about, picture: "" });
            }}
            colorScheme="red"
            variant="outline"
          >
            Remove Image
          </Button>
        ) : (
          <ImageUpload />
        )}

        <HStack spacing={6}>
          <FormControl isInvalid={!!errors.name}>
            <FormLabel htmlFor="name">Full Name</FormLabel>
            <Input
              onChange={handleChange}
              name="name"
              id="name"
              type="text"
              variant="filled"
              placeholder="Full Name"
            />
            <FormErrorMessage>{errors.name}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.role}>
            <FormLabel htmlFor="role">Role</FormLabel>
            <Input
              onChange={handleChange}
              name="role"
              id="role"
              type="text"
              variant="filled"
              placeholder="Role"
            />
            <FormErrorMessage>{errors.role}</FormErrorMessage>
          </FormControl>
        </HStack>

        <HStack spacing={6}>
          <FormControl isInvalid={!!errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              onChange={handleChange}
              name="email"
              id="email"
              type="email"
              variant="filled"
              placeholder="Email"
            />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.phone}>
            <FormLabel htmlFor="phone">Phone</FormLabel>
            <Input
              onChange={handleChange}
              name="phone"
              id="phone"
              type="tel"
              variant="filled"
              placeholder="Phone"
            />
            <FormErrorMessage>{errors.phone}</FormErrorMessage>
          </FormControl>
        </HStack>

        <HStack spacing={6}>
          <FormControl isInvalid={!!errors.address}>
            <FormLabel htmlFor="address">Address</FormLabel>
            <Input
              onChange={handleChange}
              name="address"
              id="address"
              type="text"
              variant="filled"
              placeholder="Address"
            />
            <FormErrorMessage>{errors.address}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.linkedin}>
            <FormLabel htmlFor="linkedin">LinkedIn</FormLabel>
            <Input
              onChange={handleChange}
              name="linkedin"
              id="linkedin"
              type="url"
              variant="filled"
              placeholder="https://linkedin.com"
            />
            <FormErrorMessage>{errors.linkedin}</FormErrorMessage>
          </FormControl>
        </HStack>
      </Stack>
    </>
  );
};

export default About;
