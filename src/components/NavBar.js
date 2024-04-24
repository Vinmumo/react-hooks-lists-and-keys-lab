import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
 const newlinks = links.map( (link, index) => {
   return( <a href={`#${link}`} key={index}>{link}</a>)
 }  
 );
  return <nav>{newlinks}</nav>;
}

export default NavBar;
