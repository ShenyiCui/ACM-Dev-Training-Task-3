import React, { useState } from "react";

import { Stack, Container, Button } from "@mui/material";

import BlogSection from "./BlogSection/BlogSection";
import AddBlog from "./AddBlog/AddBlog";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleAddBooking = (title, content) => {
    setPosts([
      ...posts,
      { id: posts.length + 1, title: title, content: content },
    ]);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Container className="w-screen h-screen bg-[#50d71e]">
      <Button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        ADD POST
      </Button>
      <Stack className="" spacing={1.5}>
        {posts.map((post) => (
          <BlogSection
            key={post.id}
            title={post.title}
            content={post.content}
          />
        ))}
      </Stack>
      {openModal && (
        <AddBlog
          isOpen={openModal}
          handleAddBooking={handleAddBooking}
          handleCloseModal={handleCloseModal}
        ></AddBlog>
      )}
    </Container>
  );
};

export default BlogPage;
