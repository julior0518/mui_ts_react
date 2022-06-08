import { Box, Stack, createTheme} from "@mui/material";
import { SideBar, Feed, RightBar, NavBar } from "./components/a_index";
import { useState } from "react";
import { ThemeProvider } from '@emotion/react';


function App() {
  // const [mode, setMode] = useState('light')

  // const darkTheme = createTheme({
  //   palette:{
  //     mode: mode
  //   }
  // })

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
