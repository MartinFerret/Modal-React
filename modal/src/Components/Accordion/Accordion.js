import React, { useState, useRef, useEffect } from 'react'
import './Accordion.css'
import Chevron from "./chevron-down.svg"

export default function Accordion() {


const [toggle, setToggle] = useState(false);
const [heightEl, setHeightEl] = useState();

const changeToggle = () => {
    setToggle(!toggle);
}

const refHeight = useRef();

useEffect (() => {

    setHeightEl(`${refHeight.current.scrollHeight}px`)
    return () => {
    }
}, [])


  return (


    <div className="accordion">
        <div onClick = {changeToggle} className="accordion-visible">
            <h2>Accordion open/close</h2>
            <p>v</p>
        </div>

        <div ref= {refHeight} className={toggle ? 'accordion-toggle animated' : 'accordion-toggle'}
        style = {{height: toggle ? `${heightEl}` : "Opx"}}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam optio repellendus soluta provident vero perspiciatis beatae ratione nobis? Sequi a asperiores earum quisquam laborum repellendus quidem eveniet quibusdam et harum.</p>
        </div>
    
        </div>
  )
}
