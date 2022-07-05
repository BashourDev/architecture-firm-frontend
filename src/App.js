import { Route, Routes } from "react-router-dom";
import ProjectCreateForm from "./forms/ProjectCreateForm";
import AdminDashboard from "./pages/AdminDashboard";
import Employees from "./pages/Employees";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProjectOverview from "./pages/ProjectOverview";
import Projects from "./pages/Projects";
import UserContext from "./contexts/userContext";
import ProjectUpdateForm from "./forms/ProjectsUpdateForm";
// 111311
// 001724

function App() {
  return (
    <div className="relative bg-light min-h-screen w-full">
      <Routes>
        <Route path="/employees" element={<Employees />} />
        <Route path="/projects/:id" element={<ProjectOverview />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="projects" element={<Projects />} />
          <Route path="projects/create" element={<ProjectCreateForm />} />
          <Route path="projects/:id" element={<ProjectUpdateForm />} />
        </Route>

        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
