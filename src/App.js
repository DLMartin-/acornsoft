import React from "react";
import { HStack } from "./components/common/hstack";
import { VStack } from "./components/common/vstack";

const App = () => (
  <HStack>
    <VStack reverse>
      <div>Hello</div>
      <div>There</div>
    </VStack>
    <VStack>
      <div>World</div>
      <div>Are</div>
    </VStack>
    <VStack>
      <div>!</div>
      <div>Many</div>
    </VStack>
  </HStack>
);

export default App;
