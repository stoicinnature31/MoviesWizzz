import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'aos';
import 'aos/dist/aos.css';
import { NextUIProvider } from '@nextui-org/react';
import { ChakraProvider } from '@chakra-ui/react'



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <ChakraProvider>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </ChakraProvider>
  </React.StrictMode>
);
