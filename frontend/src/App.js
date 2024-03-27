import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Blogs from './pages/blogs/blogs';
import Landingpage from './pages/landingpage/landingpage';
import Dashboard from './pages/dashboard/dashboard';
import "../src/index.css"
import DashSkills from "./pages/dashboard/components/DashSkills";
import Mainfordash from "./components/compfordashboard/mainfordash";
import Dashachievements from "./pages/dashboard/components/Dashachievements";
import Dashprojects from "./pages/dashboard/components/Dashprojects";
import Dashblogs from "./pages/dashboard/components/Dashblogs";
import Dashexperiences from "./pages/dashboard/components/Dashexperiences";

const router = createBrowserRouter ([
  {path: "/", element: <Landingpage/>},
  {path: "/blogs", element: <Blogs/>},
  {path: "/dashboard", element: <Dashboard/>},
  {path: "/dashboard/home", element: <Mainfordash/>},
  {path: "/dashboard/skills", element: <DashSkills/>},
  {path: "/dashboard/achievements", element: <Dashachievements/> },
  {path: "/dashboard/projects", element: <Dashprojects/>},
  {path: "/dashboard/blogs", element: <Dashblogs/>},
  {path: "dashboard/experiences", element: <Dashexperiences/>}

])

const App = () => {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
