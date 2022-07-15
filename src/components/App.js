import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);
import Links from "./Links";

function App() {
  return (
    <div>
      <NavBar  />
      <Home name = "Liza" city = "New York" color = "firebrick" />
      <About bio = "I made this!" github = "https://github.com/liza" linkedin = "https://www.linkedin.com/in/liza/" />
      <Links github ="https://github.com/liza" linkedin = "https://www.linkedin.com/in/liza/" />
      </div>
  );
}

export default App;
