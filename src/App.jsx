import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from "./components/Header";
import Body from "./components/Body";  
import Footer from "./components/Footer"; 
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';


const Layout = () => {
  return (
    <>
      <Header />
      <Outlet /> 
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>, 
    children: [
      { path: "/", element: <Body/> },
      { path: "/about", element: <About/> },
      { path: "/services", element: <Services/> },
      { path: "/contact", element: <Contact/> },
      { path: "/faq", element: <div>FAQ Page</div> },
      { path: "/privacy", element: <div>Privacy Page</div> },
      { path: "/support", element: <div>Support Page</div> },
    ],
  },
]);


function App() {

  return <RouterProvider router={router} />;

}

export default App
