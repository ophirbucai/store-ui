import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { Products } from "./Products/Products";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Products />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
