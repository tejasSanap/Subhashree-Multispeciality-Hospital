import { useState } from "react";
import { CgArrowLongUp } from 'react-icons/cg';
import "./ScrollButton.css"

const ScrollButton = () =>{
  
    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    
    return (
      <button   className={`${visible  ? "scrollButtomToTop extraClass" : "scrollButtomToTop" }`} >
       <CgArrowLongUp onClick={scrollToTop} 
       />
      </button>
    );
  }
    
  export default ScrollButton;