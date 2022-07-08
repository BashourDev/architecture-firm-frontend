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
import ManageEmployees from "./pages/ManageEmployees";
import { getUser } from "./api/user";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

// 111311
// 001724

function App() {
  const [user, setUser] = useState(() => {
    if (!getUser()) {
      return {};
    }

    return getUser();
  });

  return (
    <div className="relative bg-light min-h-screen h-full w-full">
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <ToastContainer className={"z-50"} autoClose={5000} />
        <Routes>
          <Route path="/team" element={<Employees />} />
          <Route path="/projects/:id" element={<ProjectOverview />} />
          <Route path="/login" element={<Login />} />

          <Route path="/admin" element={<AdminDashboard />}>
            <Route path="employees" element={<ManageEmployees />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/create" element={<ProjectCreateForm />} />
            <Route path="projects/:id" element={<ProjectUpdateForm />} />
          </Route>

          <Route path="/" element={<Home />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
