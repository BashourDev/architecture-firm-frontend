import React, { Fragment, useContext, useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineUnorderedList } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { IoShirtSharp, IoStatsChart } from "react-icons/io5";
import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar";
import { Menu as HUMenu, Transition } from "@headlessui/react";
import "react-pro-sidebar/dist/css/styles.css";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import api from "../api/api";
import { removeToken } from "../api/token";
import { removeUser } from "../api/user";
import UserContext from "../contexts/userContext";
import WindowContext from "../contexts/windowContext";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Header from "../components/Header";
import { MdHouse, MdPerson } from "react-icons/md";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AdminDashboard = () => {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(true);
  const [activeItem, setActiveItem] = useState("");
  const windowContext = useContext(WindowContext);
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const checkActiveItem = (items) => {
    if (activeItem === items) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (location.pathname.match("/admin/projects")) {
      setActiveItem("projects");
    } else if (location.pathname.match("/admin/employees")) {
      setActiveItem("employees");
    }
  }, [location]);

  const handleLogout = async () => {
    await api.get("/logout");
    removeToken();
    removeUser();
    userContext.setUser({});
    navigate("/login");
  };

  return (
    <div className="flex flex-col h-full font-lato">
      <div className="w-full h-full bg-building bg-[#001724] bg-blend-overlay bg-no-repeat">
        <Header />
      </div>
      <div dir="ltr" className="flex h-full z-10 overflow-y-auto relative">
        <ProSidebar
          className="z-10 hidden md:block md:fixed top-0 left-0 h-[90vh]"
          collapsed={sideBarCollapsed}
        >
          <Menu iconShape="circle">
            <MenuItem
              icon={<AiOutlineMenu />}
              onClick={() => setSideBarCollapsed(!sideBarCollapsed)}
            ></MenuItem>

            <MenuItem
              className={`${checkActiveItem("projects") ? "bg-dark-blue" : ""}`}
              icon={<MdHouse />}
            >
              <NavLink to={"/admin/projects"}>Projects</NavLink>
            </MenuItem>
            <MenuItem
              className={`${
                checkActiveItem("employees") ? "bg-dark-blue" : ""
              }`}
              icon={<MdPerson />}
            >
              <NavLink to={"/admin/employees"}>Employees</NavLink>
            </MenuItem>
          </Menu>
        </ProSidebar>

        <div className="relative flex flex-col justify-between w-full h-full pb-32">
          <Outlet />
          <div className="fixed md:hidden bottom-0 z-20 flex justify-around items-center w-full h-16 ring-inset ring-2 ring-lightGray/50 shadow-md bg-white">
            <div className="h-full">
              <NavLink
                className={({ isActive }) =>
                  `flex flex-col justify-center items-center h-full transition ${
                    isActive
                      ? "text-dark-blue border-t-2 border-t-dark-blue/80"
                      : "text-dark"
                  }`
                }
                to={"/admin/projects"}
              >
                <MdHouse className="" />
                <span className="text-sm">Projects</span>
              </NavLink>
            </div>
            <div className="h-full">
              <NavLink
                className={({ isActive }) =>
                  `flex flex-col justify-center items-center h-full transition ${
                    isActive
                      ? "text-dark-blue border-t-2 border-t-dark-blue"
                      : "text-dark"
                  }`
                }
                to={"/admin/employees"}
              >
                <MdPerson className="text-lg" />
                <span className="text-sm">Employees</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
