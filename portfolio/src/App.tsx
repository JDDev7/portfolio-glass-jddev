import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar/Navbar"
import { SelectedPage } from "./shared/types";
import Home from "./scenes/home/index";
import Experience from "./scenes/experience";
import BackToTopButton from "./components/goBackToTop";



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(()=>{
    const handleScroll = () =>{
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) { 
        setIsTopOfPage(false);

      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  

  return (
    <>
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} className={isTopOfPage ? "" : "transparent-navbar"}/>
      <Home setSelectedPage={setSelectedPage}></Home>
      <Experience setSelectedPage={setSelectedPage}></Experience>
      <BackToTopButton></BackToTopButton>    
    </>
  )
}

export default App
