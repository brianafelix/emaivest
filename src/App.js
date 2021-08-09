import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/main/Main";

import "./App.css";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  const [inactive, setInactive] = useState(false);

  return (
    <>
      {" "}
      <Sidebar
        onCollapse={(inactive) => {
          setInactive(inactive);
        }}
      />
      <div className={`s-container ${inactive ? "inactive" : ""}`}>
        <Navbar />
        <Main />
      </div>
    </>
  );
};

export default App;
