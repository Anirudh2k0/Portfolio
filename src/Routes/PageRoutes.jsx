import { lazy, Suspense } from "react";
import { Navigate,useRoutes } from "react-router-dom";
import FullScreenLoader from "@/components/Loader/FullScreenLoader";

import Home from "@/Pages/Home";
import About from "@/Pages/About";
import Contact from "@/Pages/Contact";
import Projects from "@/Pages/Projects/Projects";
import ProjectDetails from "@/Pages/Projects/ProjectDetails";
function PageRoutes(){
    const routes = useRoutes([
        {
            path: "/home",
            element: <Home />
        },
        {
            path: "/",
            element: <Navigate to="/home" />,
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/projects",
            // element: <Projects />
            children: [
            {
                index: true,
                element: <Projects style={{width:"100vh"}}/>
            },
            {
                path: ":id/",
                element: <ProjectDetails />
            },
            ]
        },
        {
            path: "/contact",
            element: <Contact />
        }
    ]) 
    return <Suspense fallback={<FullScreenLoader />}>{routes}</Suspense>;
}

export default PageRoutes;