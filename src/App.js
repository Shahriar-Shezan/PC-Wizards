import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Devhome from "./components/Database/Devhome";
import WriteMotherboard from "./components/Database/WriteMotherboard";
import WriteProcessor from "./components/Database/WriteProcessor";


import Home from "./components/home";

import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/writeprocessor",
      element: <WriteProcessor/>,
    },
    {
      path: "/devhome",
      element: <Devhome/>,
    },
    {
      path: "/writemotherboard",
      element: <WriteMotherboard/>,
    }


  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;
