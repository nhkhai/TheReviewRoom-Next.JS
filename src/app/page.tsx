"use client";
import Image from "next/image";
import { useState } from "react";
import { Grid, GridItem } from "@material-ui/core";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function Home() {
  const names = ["Ng Heng Khai", "Tay Yong Long", "Izzat Fadzlon"];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="The Review Room" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
