import React, { useState } from "react";

function Header() {
  const [width, setWidth] =useState(0)
  const left = document.getElementById("left-side");

  const handleMove = e => {
    setWidth(left.style.width)
    left.style.width = `${e.clientX / window.innerWidth * 100}%`;
  }

document.onmousemove = e => handleMove(e);
document.ontouchmove = e => handleMove(e.touches[0]);


return (
  <div style={{width:width}} >
    <div id="left-side" className="side">
      <h2 className="title">
        Every gathering 
        <br></br>has <span class="fancy"> its MOMENT</span>
      </h2>
    </div>
    <div id="right-side" className="side">
      <h2 className="title">
        Every gathering  
        <br></br>has <span class="fancy"> no PRESSURE</span>
      </h2>
    </div>
  </div>
  )
}

export default Header