import React from "react";
import "./styles/App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Sidebar from "./layouts/aside/Sidebar";
import Header from "./layouts/header/Header";
import Home from "./Pages/Home/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <section className="flex">
          <div className="min-w-[14rem]">
            <Sidebar />
          </div>
          <div className="w-full px-4 pt-4">
            <Header />
            <Home />
          </div>
        </section>
      </QueryClientProvider>
    </div>
  );
}

export default App;
