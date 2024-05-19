import { Box, CssBaseline, Toolbar } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import PageRoutes from "./Routes/PageRoutes";

function App() {
  return (
    <Box className="app">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar />
        <Box
          component="main"
          flexGrow={1}
          p={3}
          height="100%"
          width="100%"
          overflow="auto"
        >
          <Toolbar />
          <PageRoutes />
        </Box>
      </Box>
    </Box>
  )
}

export default App
