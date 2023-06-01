import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import Features from "./components/features";
import { FeatureProvider } from "./components/contextmang";

function App() {
  return (
    <ChakraProvider>
      <FeatureProvider>
        <Box bgColor={"blackAlpha.300"}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/feature" element={<Features />} />
            </Routes>
          </Router>
        </Box>
      </FeatureProvider>
    </ChakraProvider>
  );
}

export default App;
