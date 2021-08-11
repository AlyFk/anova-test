import React, { useState } from "react";
import {SearchBar } from "components";
import RepositoryList from "./RepositoryList";

const Repository = () => {
  const [name, setName] = useState("");


  const handleName = (name: string) => {
    setName(name);
  };

  return (
    <div className="container mx-auto flex flex-col items-center">
      <SearchBar onSubmit={handleName} />
      <RepositoryList name={name}/>
    </div>
  );
};

export default Repository
