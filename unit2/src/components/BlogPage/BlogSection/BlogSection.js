import React, { useState } from "react";

import { Card, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const BlogSection = (props) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <Card className="p-8">
      <Typography className="">{props.title}</Typography>
      <Typography>{props.content}</Typography>
      <FavoriteIcon
        onClick={() => {
          handleLike();
        }}
      ></FavoriteIcon>
      <Typography>{likes}</Typography>
    </Card>
  );
};

export default BlogSection;
