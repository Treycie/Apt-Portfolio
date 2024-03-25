import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Blogs from './pages/blogs/blogs';
import Landingpage from './pages/landingpage/landingpage';
import Dashboard from './pages/dashboard/dashboard';

const router = createBrowserRouter ([
  {path: "/", element: <Landingpage/>},
  {path: "/blogs", element: <Blogs/>},
  {path: "/dashboard", element: <Dashboard/>}

])

const App = () => {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
