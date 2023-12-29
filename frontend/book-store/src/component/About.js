import React from "react";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
        Welcome to DY
      </Typography>
      <Typography variant="body1" paragraph>
        Nestled at the heart of Panadura, DY is more than just a bookstore; it's a haven for bibliophiles, a sanctuary for the written word, and a community of passionate readers.
      </Typography>
      <Typography variant="body1" paragraph>
        At DY, we believe that books have the power to transport, inspire, and connect people. Our shelves are carefully curated to offer a diverse collection of genres, from timeless classics to the latest releases, ensuring there's something for every reader to discover and enjoy.
      </Typography>
      <Typography variant="body1" paragraph>
        We take pride in fostering an environment that celebrates the joy of reading, where every book is a new adventure waiting to be explored. Our knowledgeable and friendly staff is here to assist you in finding the perfect read, whether you're seeking a gripping mystery, a heartwarming romance, or a thought-provoking piece of non-fiction.
      </Typography>
      <Typography variant="body1" paragraph>
        We are dedicated to promoting local authors and supporting the literary community. Our events and book clubs provide opportunities for readers to engage with their favorite writers and fellow book enthusiasts.
      </Typography>
      <Typography variant="body1" paragraph>
        Beyond being a haven for book lovers, DY is committed to sustainability. We strive to minimize our ecological footprint by offering eco-friendly packaging options and promoting environmentally conscious practices.
      </Typography>
      <Typography sx={{ fontFamily: "fantasy" }} >
        Explore the Magic of Reading at DY
      </Typography>
    </Box>
  );
};

export default About;
