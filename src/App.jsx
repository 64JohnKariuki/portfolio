import React, { useState, useEffect } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Header from "./components/home/Header/Header";
import Footer from "./components/home/Footer/Footer";
import About from "./pages/About/About";
import Book from "./pages/Book/Book";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import Contact from "./pages/Contact/Contact";
import Dashboard from "./pages/Account/Dashboard";
import ProjectContainer from "./components/Projects/ProjectContainer";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Err404 from './components/SpecialCase/Err404';
import Terms from "./pages/T&C/Terms";
import Policies from "./pages/T&C/Policies";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import Cookies from "js-cookie";
import ReactGA from 'react-ga';
import ThemeContextProvider from "./context/Themecontext";
import All_Projects from './components/Projects/All_Projects';

ReactGA.initialize('G-BLRXSCP0S0');
ReactGA.pageview(window.location.href);

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      window.scroll({
        top: 70,
        behavior: "smooth"
      });
    };

    handleScroll();

    // Simulate loading time
    const loaderTimeOut = () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(), 2500);
      });
    };

    loaderTimeOut()
      .then(() => setLoading(false))
      .catch(err => {
        setError("An error occurred while loading the application.");
        console.error(err);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex space-x-2">
          <div className="w-4 h-4 bg-black rounded-full animate-pulse"></div>
          <div
            className="w-4 h-4 bg-black rounded-full animate-pulse"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-4 h-4 bg-black rounded-full animate-pulse"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    )
  }

  if (error) {
    return <div>{error}</div>;
  }

  const Layout = () => {
    return (
      <ThemeContextProvider>
        <div>
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <Header />
          <ScrollRestoration />
          <Outlet />
          <Footer />
        </div>
      </ThemeContextProvider>
      
    );
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route>
        <Route path="/" element={<Layout />}>
          {/* ==================== Header Navlink Start here =================== */}
          <Route index element={<Home />}></Route>
          <Route path="/book" element={<Book />}></Route>
          
          {/* ==================== Outlet Start here =================== */}
          <Route path="/projects" element={() =>
            <ProjectContainer
              showFilter={true}
              imageArray={All_Projects.imageArray}
              headerInfo={All_Projects.projectHeader}
              renderType="allprojects" />
          }></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          
          {/* ==================== Header Navlink End here ===================== */}
          <Route path="/dashboard" element={<Dashboard />}></Route>       
        </Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="*" element={<Err404 />}></Route>
        <Route path="/policies" element={<Policies />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
      </Route>
    )
  );

  return (
    <div className="w-full font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
