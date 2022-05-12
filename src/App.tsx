import * as Sentry from "@sentry/react";
import { Web3ReactProvider } from "@web3-react/core";
import React from "react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";

import "./App.css";
import ICOToken from "./ICOToken";
import Demo from "./components/Demo";
import { getLibrary } from "./components/Demo";

const crowdsaleAddress = import.meta.env.VITE_CROWDSALE_ADDRESS;

const queryClient = new QueryClient();

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Demo />
          <ICOToken crowdsaleAddress={crowdsaleAddress} />          
        </div>
        <Toaster position="top-right" />
      </QueryClientProvider>
    </Web3ReactProvider>
  );
}

export default Sentry.withErrorBoundary(App, { fallback: <p>an error has occurred</p> });
