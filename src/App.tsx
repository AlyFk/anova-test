import { Repository } from "pages/repository";
import ReactQueryProvider from "providers/react-query-provider";
import React from "react";

const App = () => {

  return (
    <ReactQueryProvider>
      <Repository />
    </ReactQueryProvider>
  );
};

export default App;