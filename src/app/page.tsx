"use client";
import Image from "next/image";
import { useState } from "react";
import { Grid, GridItem } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Layouts and pages.
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";

function App() {
  const names = ["Ng Heng Khai", "Tay Yong Long", "Izzat Fadzlon"];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
