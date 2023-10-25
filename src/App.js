// import logo from "./logo.svg";

import { useState } from "react";
import "./App.css";
import About_us from "./components/About_us";
import Navbar from "./components/Navbar";
import News from "./components/News";

import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [progress, setProgress] = useState(0);
  // let apikey = process.env.REACT_APP_API_KEY;
  let apikey = 'e8e5094ebd17402294b4472c6790ef2e';
  console.log(apikey)
  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          {/* <Route path="/" element={<News apiKey={apikey} setProgress={setProgress} key={'all'} pagesize={10} category={''} />} /> */}
          <Route
            path="/business"
            element={
              <News apiKey={apikey} setProgress={setProgress}
                key={"business"}
                pagesize={10}
                country={"in"}
                category={"business"}
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News apiKey={apikey} setProgress={setProgress}
                key={"entertainment"}
                pagesize={10}
                country={"in"}
                category={"entertainment"}
              />
            }
          />
          <Route
            path="/"
            element={
              <News apiKey={apikey} setProgress={setProgress}
                key={"general"}
                pagesize={10}
                country={"in"}
                category={"general"}
              />
            }
          />
          <Route
            path="/health"
            element={
              <News apiKey={apikey} setProgress={setProgress}
                key={"health"}
                pagesize={10}
                country={"in"}
                category={"health"}
              />
            }
          />
          <Route
            path="/science"
            element={
              <News apiKey={apikey} setProgress={setProgress}
                key={"science"}
                pagesize={10}
                country={"in"}
                category={"science"}
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News apiKey={apikey} setProgress={setProgress}
                key={"sports"}
                pagesize={10}
                country={"in"}
                category={"sports"}
              />
            }
          />
          <Route path="/about_us" element={<About_us />} />
        </Routes>
      </Router>
    </>
  );
}

// business
// entertainment
// general
// health
// science
// sports
// technology

export default App;
