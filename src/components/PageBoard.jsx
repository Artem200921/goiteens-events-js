import { Box, List } from "./Box";

export const PageBoard = ({ events }) => {
  return (
    <Box className="page-board">
      <h1>24th Core Worlds Coalition Conference</h1>
      <List>{events}</List>
    </Box>
  );
};
