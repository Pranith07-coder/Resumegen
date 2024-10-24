import React, { useState } from "react";
import "./ImageUpload.styles.css";
import Files from "react-files";
import { useResume } from "../../Context";
import { Box, Image, Text, Alert, AlertIcon } from "@chakra-ui/react";

function ImageUpload() {
  const { about, setAbout } = useResume();
  const [error, setError] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(about.picture || "");

  const onFilesChange = (files) => {
    setError(null); // Reset any previous error

    // Get the uploaded file's preview URL
    const file = files[0];
    if (file) {
      setPreviewUrl(file.preview.url);
      setAbout({ ...about, picture: file.preview.url });
    }
  };

  const onFilesError = (error, file) => {
    setError(error.message);
    console.log("Error code " + error.code + ": " + error.message);
  };

  return (
    <Box>
      <Files
        className="files-dropzone"
        onChange={onFilesChange}
        onError={onFilesError}
        accepts={["image/png", "image/jpeg"]}
        maxFileSize={10000000}
        minFileSize={0}
        clickable
      >
        Upload Image
      </Files>

      {error && (
        <Alert status="error" mt={4}>
          <AlertIcon />
          {error}
        </Alert>
      )}

      {previewUrl && (
        <Box mt={4}>
          <Text fontWeight="bold">Image Preview:</Text>
          <Image src={previewUrl} alt="Uploaded Image" boxSize="150px" objectFit="cover" />
        </Box>
      )}
    </Box>
  );
}

export default ImageUpload;
