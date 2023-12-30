import React from "react";
import "./styles/App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <div>
          <h1 className="text-4xl">hello world</h1>
        </div>
      </QueryClientProvider>
    </div>
  );
}

export default App;
