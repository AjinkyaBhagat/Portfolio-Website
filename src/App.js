import React, { useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Cover from "./components/Cover/Cover";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ProjectCardList from "./components/ProjectCardList/ProjectCardList";
import { project_list } from "./Utils/Projects/Projects";

import Skills from "./components/Skills/Skills";

function App() {
  const [projects] = useState(project_list);
  return (
    <>
      <Navbar />
      <Cover />
      <About />
      <ProjectCardList projects={projects} />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
