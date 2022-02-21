import React from 'react';
import {useEffect, useState} from 'react';
import scrollicon from '../../icons/scroll.png'
import './scroll.css'

const Scroll=()=> {
  const [isVisible, setIsVisible]=useState(false);
  //  isVisible=setIsVisible;
  const visibility =()=>{
    if(window.scrollY > 100){
      setIsVisible(true);
    }else{
      setIsVisible(false);
    }
  }
  const scrollup=()=>{
    window.scrollTo({top:0, behavior:'smooth',});
  };
  useEffect(()=>{
    window.addEventListener('scroll', visibility)
    return()=>{
      window.removeEventListener('scroll', visibility)
    }
  }, []);
  return <div className="scroll">
    {isVisible && (
      <button className="scroll_button" onClick={scrollup} >
      <img src={scrollicon} alt="scrollicon" className="scrollicon1"/> 
    </button>
    )}
  </div>;
}

export default Scroll;
