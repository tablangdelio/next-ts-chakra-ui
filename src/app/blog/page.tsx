import { Box } from "@chakra-ui/react";
import Link from "next/link";
function Blog() {
  return (
    <Box bg="tomato">
      <Link href="about"> about</Link>
    </Box>
  );
}

export default Blog;
