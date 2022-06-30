
import Router from "./routes/Router";
import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
   
      <Router />
    </ChakraProvider>
  );
}

export default App;