import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Stack,
  Input,
  TextField,
  Button,
} from "@mui/material";

const AddBlog = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <Modal
      className="justify-center items-center flex"
      open={true}
      onClose={props.handleCloseModal}
    >
      <Box className="rounded-3xl w-[500px] h-102 pr-1 pl-6 pt-4 pb-10 bg-bgWhite shadow-[0_4px_20px_0px_rgba(0,0,0,0.25)] ring-0">
        <Stack spacing={3}>
          <Typography className="pt-4 text-center text-[35px] font-Inter font-bold">
            ADD POST
          </Typography>
          <Input
            placeholder={"What is the title of your blog post"}
            value={title}
            className="w-full color-bgWhite font-Inter font-light px-0 pt-2"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          ></Input>
          <TextField
            placeholder={"What is the content of your blog post"}
            value={content}
            multiline
            maxRows={6}
            className="w-full color-bgWhite font-Inter font-light px-0 pt-2e"
            onChange={(event) => {
              setContent(event.target.value);
            }}
          ></TextField>
          <Button
            onClick={() => {
              props.handleAddBooking(title, content);
              props.handleCloseModal();
            }}
          >
            ADD
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default AddBlog;
