import { Box, Stack } from "@mui/material";
import { SideBar, Feed, RightBar, NavBar } from "./components/a_index";

function App() {


  return (
    <Box>
      <NavBar />
      <Stack direction="row" spacing={2} justifyContent="space-between" height="90vh">
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default App;
