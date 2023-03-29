import React from "react";
import useLocalStorage from "../hooks/useLocalStorage1";

const Home = () => {
  const [name, setName] = useLocalStorage("name", "Surya");
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default Home;
