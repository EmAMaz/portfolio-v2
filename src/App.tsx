import { Route, Routes } from "react-router-dom";
import SliderComponent from "./components/slider";
import ProjectPage from "./components/projects";
import ErrorPage from "./components/error-page";

function App() {
  return (
    <div className="sm:h-screen h-min">
      <Routes>
        <Route path="/" element={<SliderComponent />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
