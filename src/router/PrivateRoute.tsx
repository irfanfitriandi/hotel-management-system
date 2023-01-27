import { useQuery } from "@apollo/client";
import Cookies from "js-cookie";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Navbar from "src/components/Navbar";
import Sidebar from "src/components/Sidebar";
import { DEFAULT_ROUTE_BY_ROLE, RBAC } from "src/shared/constants/roles";
import { ModuleEnum } from "src/shared/types/module";
import { Role } from "src/shared/types/roles";

interface RouteProps {
  Component: JSX.Element;
  userRole: Role;
}

const PrivateRoute = ({ Component, userRole }: RouteProps) => {
  const { pathname } = useLocation();

  // Check if login then redirect to login page;
  const isAuthenticated = Cookies.get("auth");
  if (!isAuthenticated) return <Navigate to="/login" />;

  // Check whether the user is authorized
  const defaultRoleRoute = DEFAULT_ROUTE_BY_ROLE[userRole];
  const basePath = pathname.split("/")[1];
  const isAuthorized = RBAC[basePath as ModuleEnum].includes(userRole);
  if (!basePath || !isAuthorized) return <Navigate to={defaultRoleRoute} />;

  return (
    <>
      <div className="h-screen">
        <Navbar />
        <aside className="fixed top-[75px] left-0 bottom-8">
          <Sidebar />
        </aside>
        <main className="py-7 px-6 flex-grow margin ml-[246px]">
          {Component}
        </main>
      </div>
      <Outlet />
    </>
  );
};

export default PrivateRoute;
